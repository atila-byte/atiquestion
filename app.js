// Utilitário: Riscar alternativa (Tachar) e desmarcar se estiver selecionada
function toggleRisco(buttonElement) {
    const alternativaItem = buttonElement.closest('.alternativa-item');
    alternativaItem.classList.toggle('tachado');
    
    // Se a opção acabou de ser tachada, verifica se estava marcada e desmarca
    if (alternativaItem.classList.contains('tachado')) {
        const radio = alternativaItem.querySelector('input[type="radio"]');
        if (radio.checked) {
            radio.checked = false;
            radio.setAttribute('data-checked', 'false');
        }
    }
}

// Variável global para rastrear se o tempo acabou
let tempoEsgotado = false;

// Utilitário: Permitir desmarcar o input radio e rastrear tempo
function handleRadioClick(radio) {
    if (radio.getAttribute('data-checked') === 'true') {
        radio.checked = false;
        radio.setAttribute('data-checked', 'false');
        radio.removeAttribute('data-fora-tempo');
    } else {
        document.querySelectorAll(`input[name="${radio.name}"]`).forEach(r => {
            r.setAttribute('data-checked', 'false');
            r.removeAttribute('data-fora-tempo');
        });
        radio.setAttribute('data-checked', 'true');
        
        // Se o tempo esgotou e ele respondeu agora, marcamos a resposta
        if (tempoEsgotado) {
            radio.setAttribute('data-fora-tempo', 'true');
        }
    }
}

// ---- SISTEMA DE MEMÓRIA (LOCAL STORAGE) ----
let favoritos = JSON.parse(localStorage.getItem('ati_favoritos')) || [];
let estatisticas = JSON.parse(localStorage.getItem('ati_estatisticas')) || {};

// Ao iniciar o app, checa se o Dark Mode estava ativo
if (localStorage.getItem('ati_theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}
// Utilitário: Renderizar HTML de uma questão (Adicionada a Badge de Nota)
function gerarHTMLQuestao(q, modoSimulado = false) {
    let isFav = favoritos.includes(q.id);
    let favIcon = isFav ? '❤️' : '🤍'; // Coração cheio se for favorito

    let html = `
    <div class="card questao-card" id="q-${q.id}">
        <div class="questao-header" style="display:flex; justify-content:space-between; align-items:center;">
            <span>${q.especialidade} | ${q.tema} (${q.prova} - ${q.ano})</span>
            <div style="display:flex; align-items:center;">
                <span id="badge-${q.id}" class="badge-nota" style="display:none;"></span>
                <button class="btn-icon" onclick="toggleFavorito('${q.id}', this)" title="Adicionar/Remover do Caderno de Erros">${favIcon}</button>
            </div>
        </div>
        <div class="enunciado">${q.enunciado}</div>
        <ul class="alternativas">`;
    
    q.alternativas.forEach(alt => {
        html += `
            <li class="alternativa-item" data-id="${alt.id}" data-correta="${alt.correta}">
                <button class="btn-riscar" onclick="toggleRisco(this)" title="Riscar/Descartar" type="button">✂️</button>
                <div style="flex-grow: 1;">
                    <label style="font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                        <input type="radio" name="resposta-${q.id}" value="${alt.id}" onclick="handleRadioClick(this)">
                        <span class="alt-texto">${alt.id}) ${alt.texto}</span>
                    </label>
                    <div class="resolucao-alt" style="display:none; margin-top: 10px;">${alt.resolucao}</div>
                </div>
            </li>`;
    });

    html += `</ul>`;
    
    if (!modoSimulado) {
        html += `<button type="button" onclick="mostrarResolucao('${q.id}')" style="margin-top: 15px;" id="btn-resp-${q.id}">Responder</button>`;
    }

    // O botão de "Copiar" foi removido daqui!
    html += `
        <div class="resolucao-container" id="res-${q.id}">
            <h4>Resolução Geral:</h4>
            <div class="resolucao-geral">${q.resolucaoGeral}</div>
        </div>
    </div>`;
    
    return html;
}

// Utilitário: Revelar resolução e pintar alternativas
function mostrarResolucao(questaoId) {
    const card = document.getElementById(`q-${questaoId}`);
    const resContainer = document.getElementById(`res-${questaoId}`);
    const itens = card.querySelectorAll('.alternativa-item');
    const questaoNoBanco = window.bancoDeQuestoes.find(q => q.id === questaoId);
    let acertou = false;
    let respondeu = false;
    
    itens.forEach(item => {
        const radio = item.querySelector('input[type="radio"]');
        if (item.getAttribute('data-correta') === 'true') {
            item.classList.add('alt-correta');
        } else {
            if (radio.checked) {
                item.classList.add('alt-errada');
            }
        }
        
        if (radio.checked) {
            respondeu = true;
            if (item.getAttribute('data-correta') === 'true') acertou = true;
        }

        item.querySelector('.resolucao-alt').style.display = 'block';
        radio.disabled = true; // Trava a opção
    });

    // Registra estatística APENAS se o usuário marcou uma opção
    if (respondeu) {
        salvarEstatistica(questaoNoBanco.especialidade, acertou);
    }
    
    // Esconde o botão de responder
    const btnResponder = document.getElementById(`btn-resp-${questaoId}`);
    if (btnResponder) btnResponder.style.display = 'none';

    resContainer.classList.add('ativa');
}

// ---- LÓGICA DO SIMULADO ----
let timerInterval;
let simuladoAtivo = false;

// Função modificada para resetar as variáveis
function iniciarSimulado() {
    const numQ = document.getElementById('num-questoes').value;
    const tempo = document.getElementById('tempo').value;
    const autoEncerra = document.getElementById('auto-encerra').checked;
    
    if (!numQ) { alert('Selecione o número de questões!'); return; }

    tempoEsgotado = false; // Reseta o rastreador de tempo
    let questoesEmbaralhadas = [...window.bancoDeQuestoes].sort(() => 0.5 - Math.random());
    let selecionadas = questoesEmbaralhadas.slice(0, numQ);

    const container = document.getElementById('simulado-area');
    container.innerHTML = '';
    selecionadas.forEach(q => {
        container.innerHTML += gerarHTMLQuestao(q, true);
    });

    // Adicionado ID ao botão para podermos removê-lo no final
    container.innerHTML += `<button id="btn-finalizar-simulado" onclick="finalizarSimulado()" style="margin-top:20px; background:var(--secondary);">Finalizar Simulado</button>`;

    if (tempo > 0) {
        iniciarTimer(tempo * 60, autoEncerra);
    }
    document.getElementById('setup-simulado').style.display = 'none';
}

function iniciarTimer(segundosTotais, autoEncerra) {
    const timerDiv = document.createElement('div');
    timerDiv.className = 'timer-fixed';
    timerDiv.id = 'timer-display';
    document.body.appendChild(timerDiv);

    let tempoRestante = segundosTotais;
    
    timerInterval = setInterval(() => {
        let min = Math.floor(tempoRestante / 60);
        let seg = tempoRestante % 60;
        timerDiv.innerText = `${min}:${seg < 10 ? '0'+seg : seg}`;
        
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            timerDiv.innerText = "Tempo Esgotado!";
            timerDiv.style.color = "var(--wrong)";
            timerDiv.style.borderColor = "var(--wrong)";
            tempoEsgotado = true; // Sinaliza que o tempo acabou
            
            if (autoEncerra) {
                finalizarSimulado(true);
            }
        }
        tempoRestante--;
    }, 1000);
}

function finalizarSimulado(forcadoPeloTempo = false) {
    clearInterval(timerInterval);
    const questoes = document.querySelectorAll('.questao-card');
    let acertos = 0;

    questoes.forEach(card => {
        const qId = card.id.replace('q-', '');
        mostrarResolucao(qId);
        
        const selecionada = card.querySelector('input[type="radio"]:checked');
        const badge = document.getElementById(`badge-${qId}`);
        badge.style.display = 'inline-block';

        if (!selecionada) {
            badge.textContent = "Não respondida";
            badge.className = "badge-nota nota-neutra";
        } else {
            const isForaDeTempo = selecionada.getAttribute('data-fora-tempo') === 'true';
            const item = selecionada.closest('.alternativa-item');
            const isCorreta = item.getAttribute('data-correta') === 'true';

            if (isForaDeTempo) {
                badge.textContent = "Respondida fora de tempo";
                badge.className = "badge-nota nota-aviso";
            } else if (isCorreta) {
                badge.textContent = "1/1";
                badge.className = "badge-nota nota-correta";
                acertos++;
            } else {
                badge.textContent = "0/1";
                badge.className = "badge-nota nota-errada";
            }
        }
    });

    const percentual = Math.round((acertos / questoes.length) * 100);
    
    // Gera o painel de resultado na própria página
    const painelResultado = document.createElement('div');
    painelResultado.className = 'card';
    painelResultado.style.textAlign = 'center';
    painelResultado.style.borderTop = '5px solid var(--primary)';
    painelResultado.innerHTML = `
        <h2 style="color: var(--primary);">Resultado do Simulado</h2>
        <p style="font-size: 1.2rem; margin-top: 10px;">Você acertou <strong>${acertos}</strong> de <strong>${questoes.length}</strong> questões.</p>
        <h1 style="font-size: 3rem; color: var(--text-main); margin: 10px 0;">${percentual}%</h1>
    `;
    const container = document.getElementById('simulado-area');
    container.insertBefore(painelResultado, container.firstChild);

    // Remove o botão de finalizar
    const btnFinalizar = document.getElementById('btn-finalizar-simulado');
    if (btnFinalizar) btnFinalizar.remove();

    // Rola a página suavemente para o topo para o usuário ver a nota dele
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- LÓGICA DO BANCO DE QUESTÕES (SISTEMA DE TAGS E CASCATA) ----

let filtrosAtivos = {
    especialidade: [],
    tema: [],
    prova: [],
    ano: []
};

function popularFiltros() {
    // Preenche inicialmente
    const especialidades = [...new Set(window.bancoDeQuestoes.map(q => q.especialidade))].sort();
    const provas = [...new Set(window.bancoDeQuestoes.map(q => q.prova))].sort();
    const temas = [...new Set(window.bancoDeQuestoes.map(q => q.tema))].sort();

    preencherSelect('filtro-especialidade', especialidades);
    preencherSelect('filtro-prova', provas);
    preencherSelect('filtro-tema', temas);

    // Adiciona escutadores: Quando o usuário escolhe, transforma em Tag
    document.getElementById('filtro-especialidade').addEventListener('change', (e) => adicionarTag('especialidade', e.target.value));
    document.getElementById('filtro-tema').addEventListener('change', (e) => adicionarTag('tema', e.target.value));
    document.getElementById('filtro-prova').addEventListener('change', (e) => adicionarTag('prova', e.target.value));
    
    const filtroAno = document.getElementById('filtro-ano');
    if (filtroAno) {
        filtroAno.addEventListener('change', (e) => adicionarTag('ano', e.target.value));
    }
}

function adicionarTag(tipo, valor) {
    if (valor === "") return; // Ignora se clicar em "Todos"

    // Se ainda não estiver na lista, adiciona
    if (!filtrosAtivos[tipo].includes(valor)) {
        filtrosAtivos[tipo].push(valor);
        renderizarTags();
        
        // Regras de Cascata
        if (tipo === 'especialidade') atualizarFiltroTema();
        if (tipo === 'prova') atualizarFiltroAno();
    }
    
    // Devolve o menu para a opção "Todos", liberando para o usuário escolher outro!
    document.getElementById(`filtro-${tipo}`).value = "";
}

function removerTag(tipo, valor) {
    // Remove da memória
    filtrosAtivos[tipo] = filtrosAtivos[tipo].filter(v => v !== valor);
    renderizarTags();
    
    // Atualiza a cascata caso um filtro "pai" seja removido
    if (tipo === 'especialidade') atualizarFiltroTema();
    if (tipo === 'prova') atualizarFiltroAno();
}

function renderizarTags() {
    const container = document.getElementById('tags-filtros');
    if (!container) return;
    
    container.innerHTML = '';
    const nomesTipos = { especialidade: 'Especialidade', tema: 'Tema', prova: 'Prova', ano: 'Ano' };

    // Cria visualmente a "Pílula" para cada filtro ativo
    Object.keys(filtrosAtivos).forEach(tipo => {
        filtrosAtivos[tipo].forEach(valor => {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `${nomesTipos[tipo]}: ${valor} <span onclick="removerTag('${tipo}', '${valor}')" title="Remover filtro">✖</span>`;
            container.appendChild(tag);
        });
    });
}

// Cascata: Especialidade -> Tema
function atualizarFiltroTema() {
    let temasFiltrados;
    if (filtrosAtivos.especialidade.length === 0) {
        // Sem especialidade? Mostra todos os temas
        temasFiltrados = [...new Set(window.bancoDeQuestoes.map(q => q.tema))].sort();
    } else {
        // Com especialidade? Mostra apenas temas DAQUELAS especialidades
        const questoesDaEsp = window.bancoDeQuestoes.filter(q => filtrosAtivos.especialidade.includes(q.especialidade));
        temasFiltrados = [...new Set(questoesDaEsp.map(q => q.tema))].sort();
    }
    preencherSelect('filtro-tema', temasFiltrados);
}

// Cascata: Prova -> Ano
function atualizarFiltroAno() {
    const containerAno = document.getElementById('container-ano');

    if (filtrosAtivos.prova.length === 0) {
        // Se removeu todas as provas, Oculta o Ano e apaga da memória
        containerAno.style.display = 'none';
        filtrosAtivos.ano = []; 
        renderizarTags(); 
    } else {
        // Se escolheu prova, mostra a caixa de Ano focada nela
        containerAno.style.display = 'block';
        const questoesDaProva = window.bancoDeQuestoes.filter(q => filtrosAtivos.prova.includes(q.prova));
        const anosFiltrados = [...new Set(questoesDaProva.map(q => q.ano))].sort();
        preencherSelect('filtro-ano', anosFiltrados);
    }
}

function preencherSelect(id, arrayOpcoes) {
    const select = document.getElementById(id);
    if (!select) return;

    // Limpa opções antigas, deixando só o "Todos"
    while (select.options.length > 1) {
        select.remove(1);
    }

    arrayOpcoes.forEach(opcao => {
        if(opcao) {
            let opt = document.createElement('option');
            opt.value = opcao;
            opt.innerHTML = opcao;
            select.appendChild(opt);
        }
    });
}

function pesquisarBanco() {
    // Pega o estado atual da caixinha de favoritos
    const checkboxFav = document.getElementById('filtro-somente-fav');
    const apenasFav = checkboxFav ? checkboxFav.checked : false;

    const filtradas = window.bancoDeQuestoes.filter(q => {
        const bateEsp = filtrosAtivos.especialidade.length === 0 || filtrosAtivos.especialidade.includes(q.especialidade);
        const bateTema = filtrosAtivos.tema.length === 0 || filtrosAtivos.tema.includes(q.tema);
        const bateProva = filtrosAtivos.prova.length === 0 || filtrosAtivos.prova.includes(q.prova);
        const bateAno = filtrosAtivos.ano.length === 0 || filtrosAtivos.ano.includes(q.ano);
        
        // Se a caixinha estiver marcada, só passa se o ID da questão estiver nos favoritos
        const bateFav = !apenasFav || favoritos.includes(q.id);
        
        return bateEsp && bateTema && bateProva && bateAno && bateFav;
    });

    const container = document.getElementById('resultados-banco');
    container.innerHTML = `<p style="margin-bottom:15px; font-weight:bold; color: var(--primary);">Foram encontradas ${filtradas.length} questões.</p>`;
    
    filtradas.forEach(q => {
        container.innerHTML += gerarHTMLQuestao(q, false);
    });
}

// ---- LÓGICA DO RESUMO DINÂMICO ----

// Puxa as questões específicas para o final do resumo
function carregarQuestoesPorTema(tema, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Procura no banco questões que batam com o tema do resumo
    const questoesDoTema = window.bancoDeQuestoes.filter(q => q.tema.toUpperCase() === tema.toUpperCase());
    
    if (questoesDoTema.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: var(--text-muted);">Ainda não há questões cadastradas para este tema.</p>`;
        return;
    }

    questoesDoTema.forEach(q => {
        container.innerHTML += gerarHTMLQuestao(q, false);
    });
}
// ---- NOVAS FUNCIONALIDADES (Favoritos, Copiar, Estatísticas, Dark Mode) ----

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('ati_theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('ati_theme', 'dark');
    }
}

function toggleFavorito(id, btnElement) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
        btnElement.innerText = '🤍';
    } else {
        favoritos.push(id);
        btnElement.innerText = '❤️';
    }
    localStorage.setItem('ati_favoritos', JSON.stringify(favoritos));
}

function salvarEstatistica(especialidade, acertou) {
    if (!estatisticas[especialidade]) {
        estatisticas[especialidade] = { acertos: 0, total: 0 };
    }
    estatisticas[especialidade].total += 1;
    if (acertou) estatisticas[especialidade].acertos += 1;
    
    localStorage.setItem('ati_estatisticas', JSON.stringify(estatisticas));
    // Atualiza na home se estiver na página inicial
    if (document.getElementById('painel-estatisticas')) renderizarEstatisticas();
}

function renderizarEstatisticas() {
    const painel = document.getElementById('painel-estatisticas');
    if (!painel) return;
    
    if (Object.keys(estatisticas).length === 0) {
        painel.innerHTML = '<p style="color:var(--text-muted);">Você ainda não respondeu nenhuma questão. Que tal fazer um simulado?</p>';
        return;
    }

    let html = '<div style="display:flex; gap:15px; flex-wrap:wrap; justify-content:center;">';
    for (let esp in estatisticas) {
        let dados = estatisticas[esp];
        let pct = Math.round((dados.acertos / dados.total) * 100);
        let cor = pct >= 70 ? 'var(--correct)' : (pct >= 50 ? '#f59e0b' : 'var(--wrong)');
        
        html += `
        <div style="background:var(--surface); border:1px solid var(--border-color); padding:15px; border-radius:12px; min-width:150px;">
            <div style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; font-weight:bold;">${esp}</div>
            <div style="font-size:1.8rem; font-weight:bold; color:${cor};">${pct}%</div>
            <div style="font-size:0.8rem;">${dados.acertos} de ${dados.total} acertos</div>
        </div>`;
    }
    html += '</div>';
    painel.innerHTML = html;
}
// ---- LÓGICA DO MODO ESCURO (DARK MODE) ----

// Executa assim que a página carrega para aplicar o tema salvo
document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('ati_theme');
    if (temaSalvo === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        const checkbox = document.getElementById('dark-mode-checkbox');
        if (checkbox) checkbox.checked = true;
        atualizarTextoBotaoTema(true);
    }
});

// Alterna o tema e salva a preferência
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.removeAttribute('data-theme');
        localStorage.setItem('ati_theme', 'light');
        atualizarTextoBotaoTema(false);
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('ati_theme', 'dark');
        atualizarTextoBotaoTema(true);
    }
}

// Muda o texto do botão arredondado
function atualizarTextoBotaoTema(isDark) {
    const textoBotao = document.getElementById('texto-botao-tema');
    if (textoBotao) {
        textoBotao.innerHTML = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    }
}
// ---- LIMPAR MEMÓRIA LOCAL ----
function limparMemoria() {
    const confirmacao = confirm("Tem a certeza que deseja apagar todo o seu Caderno de Erros e Estatísticas? Esta ação não pode ser desfeita.");
    
    if (confirmacao) {
        // Limpa todas as chaves salvas no navegador
        localStorage.removeItem('ati_favoritos');
        localStorage.removeItem('ati_estatisticas');
        
        // Opcional: se quiser que o Dark Mode também resete, descomente a linha abaixo:
        // localStorage.removeItem('ati_theme');

        // Reseta as variáveis globais
        favoritos = [];
        estatisticas = {};

        alert("Memória limpa com sucesso! Os seus dados foram apagados.");
        
        // Recarrega a página para atualizar todo o visual
        window.location.reload();
    }
}
// ---- LÓGICA DA SANFONA DOS RESUMOS ----
function toggleResumos(headerElement) {
    const cardClicado = headerElement.closest('.specialty-card');
    
    // Opcional: Fecha todos os outros cards que estiverem abertos
    const todosCards = document.querySelectorAll('.specialty-card');
    todosCards.forEach(card => {
        if (card !== cardClicado) {
            card.classList.remove('open');
        }
    });

    // Abre ou fecha o card que o usuário clicou
    cardClicado.classList.toggle('open');
}