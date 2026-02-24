// questoes_1.js
// Inicializa o banco global se ainda não existir
if (!window.bancoDeQuestoes) {
    window.bancoDeQuestoes = [];
}

const questoes_lote_1 = [
    {
        id: "Q01",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "INFECÇÃO DO TRATO URINÁRIO",
        especialidade: "NEFROLOGIA",
        enunciado: `(TEMFC 35 – 2024) Médico de família e comunidade realiza visita domiciliar a Sra. Ana, 82 anos, acompanhada em cuidados domiciliares pela equipe de saúde. A paciente encontra-se acamada após fratura de fêmur há 6 meses. A filha da paciente, Glória, que é a principal cuidadora, refere que a mãe está “um pouco desanimada” há dois dias e que se queixou de desconforto ao urinar e desejo de urinar várias vezes, contudo sem grande volume. Ao recolher a urina do “urinol ou comadre”, observou que a urina estava com odor fétido. Nega febre, náusea, vômito e hiporexia. Ao exame, Ana encontra-se orientada, hidratada, afebril. Pressão arterial 130X90 mmHg, FC: 89 bpm, FR: 15 ipm. Exame do aparelho cardiovascular sem alterações dignas de nota. Abdome livre. Giordano negativo, mas apresentou dor a palpação supra púbica. Ao exame da genitália: ausência de corrimento vaginal. Qual a principal hipótese diagnóstica?`,
        alternativas: [
            { id: "A", texto: `Diagnóstico presuntivo de pielonefrite.`, correta: false, resolucao: `Por que está errada? A pielonefrite é uma infecção bacteriana renal (chamada de ITU alta) que inclui os sintomas de cistite acrescidos de sinais sistêmicos como febre e dor no flanco. Como a Sra. Ana está afebril e com Giordano negativo, esta hipótese é afastada.` },
            { id: "B", texto: `Diagnóstico presuntivo de ITU grave.`, correta: false, resolucao: `Por que está errada? As diretrizes atuais observam que o termo "ITU complicada" (ou grave) carece de uma definição clínica padrão, mas geralmente envolve sintomas sistêmicos, sepse ou fatores obstrutivos. A paciente está hemodinamicamente estável e sem sinais de sepse.` },
            { id: "C", texto: `Diagnóstico presuntivo de ITU.`, correta: true, resolucao: `Por que está correta? O diagnóstico de ITU (especificamente cistite, que é uma forma de ITU) é predominantemente clínico. A presença de disúria, polaciúria e dor suprapúbica em uma paciente sem corrimento vaginal tem um valor preditivo positivo muito alto. Em idosos acamados, a troca de fraldas ou uso de comadres facilita a ascensão bacteriana, tornando a ITU a hipótese principal diante de queixas urinárias.` },
            { id: "D", texto: `Vulvovaginite.`, correta: false, resolucao: `Por que está errada? Embora a vulvovaginite possa causar "disúria externa" (ardência quando a urina encosta na vulva inflamada), o enunciado afirma explicitamente: "ausência de corrimento vaginal". Além disso, a dor à palpação suprapúbica é um achado típico de inflamação na bexiga, não na vagina.` }
        ],
        resolucaoGeral: `💡 O raciocínio clínico aqui deve focar na diferenciação entre uma infecção localizada/baixa (cistite) e uma infecção sistêmica/alta (pielonefrite), além de descartar diagnósticos diferenciais ginecológicos.
<br> A Sra. Ana apresenta o binômio clássico de sintomas irritativos miccionais: disúria (desconforto ao urinar) e polaciúria (desejo de urinar várias vezes com baixo volume).
<br> Em idosos, a "prostração" ou o "desânimo" podem ser equivalentes sutis de resposta inflamatória, mas o quadro dela é bem localizado.
<br> Pontos-chave do enunciado:
<br>  • Sintomas Locais: Disúria, polaciúria e dor suprapúbica (fecham o diagnóstico clínico de cistite).
<br>  • Sinais de Alerta Negativos: Ausência de febre, náuseas, vômitos e sinal de Giordano negativo (isso afasta o acometimento do parênquima renal/pielonefrite).
<br>  • Exame Físico: A dor à palpação suprapúbica corrobora a inflamação vesical.
<br>  • A ausência de corrimento vaginal ajuda a afastar causas ginecológicas que mimetizam disúria.
<br><br>📚 O que a nova diretriz traz de "ajuste" para seus estudos:
<br>  • Precisão Terminológica: O grupo WikiGuidelines recomenda evitar termos como "complicada/não complicada" em favor de descrições anatômicas precisas (ex: Cistite vs. Pielonefrite).
<br>  • Tratamento de Cistite em Adultos: Caso você precisasse prescrever, a diretriz estabelece recomendações claras de duração:
<br>  • Nitrofurantoína: 5 dias.
<br>  • Trimetoprima/Sulfametoxazol (Bactrim): 3 dias.
<br>  • Fosfomicina oral: dose única.
<br>  • Pivmecilinam: 3 dias.
<br>  • Idosos e Diagnóstico: Em idosos (especialmente em instituições), a diretriz ressalta a importância de ferramentas clínicas para evitar o excesso de testes em casos de mudanças comportamentais sem sintomas urinários claros.`
    },
    {
        id: "Q02",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "ANEMIA",
        especialidade: "HEMATOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Paciente de 56 anos, sexo masculino, tem como comorbidade diabetes tipo II (em uso de metformina há 6 anos), acompanhado no Hospital Universitário anualmente devido doença inflamatória intestinal desde os 18 anos de idade. Faz uso contínuo de omeprazol, pois apresenta intolerância gástrica à metformina. Refere dieta vegana há dois anos. Comparece a consulta com seu médico de família e comunidade para apresentar exames complementares solicitados para avaliação de palidez e adinamia. Os exames laboratoriais evidenciaram: Hemograma: Leucócitos: 5,6 x10⁹/L (neutrófilos: 3,6 x10⁹/L, linfócitos: 1,7 x10⁹/L, monócitos: 0,2 x10⁹/L, eosinófilos: 0,1 x10⁹/L), hemoglobina (Hb): 10,2 g/dL, hematócrito: 33,3 %, volume corpuscular medio (VCM): 105,6 fL, hemoglobina corpuscular media (HCM): 30,0 pg, concentração de hemoglobina corpuscular media (CHCM): 30,1 g/dL, RDW: 15,6 %, plaquetas: 123 x10⁹/L. Considerando o caso acima, qual a provável etiologia e fator de risco associado?`,
        alternativas: [
            { id: "A", texto: `Anemia devido à deficiência de ferro - Doença inflamatória intestinal.`, correta: false, resolucao: `O erro: A deficiência de ferro causa anemia microcítica (VCM baixo) e hipocrômica. O paciente apresenta um VCM de 105,6 (alto). Embora a DII possa causar anemia ferropriva por sangramento, os índices laboratoriais desta questão não batem.` },
            { id: "B", texto: `Anemia devido à deficiência de folato - Diabetes melitus.`, correta: false, resolucao: `O erro: O Diabetes Mellitus per se não é um fator de risco para deficiência de folato (vitamina B9). Além disso, a metformina interfere especificamente na B12, não no folato.` },
            { id: "C", texto: `Anemia devido à deficiência de vitamina B12 - Uso crônico de metformina.`, correta: true, resolucao: `Por que está correta? A metformina interfere na absorção da vitamina B12 no íleo terminal. O quadro de anemia macrocítica (VCM alto) com leve plaquetopenia é a apresentação clássica da deficiência de B12. É a resposta mais completa e provável diante do histórico de 6 anos de uso da droga.` },
            { id: "D", texto: `Anemia devido à deficiência de ferro - Dieta vegana.`, correta: false, resolucao: `O erro: Novamente, a deficiência de ferro geraria microcitose. Embora veganos precisem de cuidado com o ferro não-heme, a principal carência de uma dieta vegana sem suplementação que gera macrocitose é a vitamina B12.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
O diagnóstico clínico e laboratorial aponta para uma anemia macrocítica (ou megaloblástica, dadas as circunstâncias).
<br>Para resolver essa questão, devemos olhar para os índices hematimétricos e para o histórico do paciente.
<br>Análise do Hemograma:
<br>  • Hemoglobina (10,2 g/dL): Confirma anemia (valor de referência para homens é >13 g/dL).
<br>  • VCM (105,6 fL): O ponto chave. Como o VCM > 100 fL, estamos diante de uma macrocitose.
<br>  • Plaquetas (123 x 10⁹/L): Há uma leve plaquetopenia. A deficiência grave de B12 ou folato prejudica a síntese de DNA em todas as linhagens celulares, podendo causar bicitopenia ou pancitopenia.
<br><br>Fatores de Risco do Paciente:
<br>  • Metformina: O uso crônico (há 6 anos) está fortemente associado à má absorção de vitamina B12 no íleo distal (mecanismo dependente de cálcio).
<br>  • Omeprazol: Inibidores de Bomba de Prótons (IBP) reduzem a acidez gástrica necessária para separar a B12 das proteínas dos alimentos.
<br>  • Doença Inflamatória Intestinal (DII): Se houver acometimento do íleo terminal, a absorção do complexo B12-fator intrínseco fica comprometida.
<br>  • Dieta Vegana: Como a B12 é encontrada apenas em fontes animais, a dieta vegana sem suplementação é um fator de risco direto.
<br> Embora o paciente tenha múltiplos riscos, a associação clássica cobrada em contextos de diabetes é a metformina.`
    },
    {
        id: "Q03",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "ALTERAÇÕES DO MOVIMENTO",
        especialidade: "NEUROLOGIA",
        enunciado: `(TEMFC 35 – 2024) O Sr. Josué possui 66 anos e procurou atendimento na unidade básica de saúde porque nas últimas 4 semanas começou a desenvolver um quadro atípico de tremores, acatisia e discinesia orofacial. É portador de diabetes e hipertensão arterial em uso de insulina NPH, anlodipino e hidroclorotiazida. Também tem diagnóstico de depressão, tratada, com mudança recente de medicação por ter desenvolvido um quadro psicótico e, desde então, está em uso de quetiapina. Está preocupado com a possibilidade de estar com Doença de Parkinson, pois tem história familiar positiva, em parente de primeiro grau. Ao ser avaliado pela médica de família e comunidade, percebeu-se um tremor de ação e presença de movimentos involuntários na face. Ele nega outras queixas e suas condições de saúde prévias estão estáveis, de acordo com avaliações clínico laboratoriais recentes. Diante do quadro apresentado, qual das alternativas representa o diagnóstico mais provável?`,
        alternativas: [
            { id: "A", texto: `Tremor essencial, considerando-se a idade cronológica do paciente e a condição de polifarmácia associada.`, correta: false, resolucao: `Por que está errada? O tremor essencial é tipicamente bilateral, familiar e melhora com álcool. No entanto, ele não explica a acatisia nem a discinesia orofacial. Esses dois últimos são "assinaturas" de bloqueio dopaminérgico (neurolépticos).` },
            { id: "B", texto: `Tremor cinético, provavelmente secundário à insulinoterapia inadequada associada ao uso do diurético tiazídico.`, correta: false, resolucao: `Por que está errada? O tremor cinético ocorre durante o movimento voluntário. Embora a insulina possa causar tremores por hipoglicemia, o quadro clínico de movimentos faciais e inquietação motora (acatisia) é muito mais específico para uma síndrome extrapiramidal por antipsicóticos do que para um desequilíbrio glicêmico.` },
            { id: "C", texto: `Síndrome extrapiramidal, provavelmente secundária ao uso de medicação neuroléptica e bloqueador de canais de cálcio.`, correta: true, resolucao: `Por que está correta? É a hipótese que une todos os pontos. A quetiapina (neuroléptico) é a causa principal da acatisia e da discinesia. A idade do paciente aumenta a vulnerabilidade do sistema dopaminérgico. O bloqueador de canal de cálcio (anlodipino) pode atuar como um fator contribuinte ou adjuvante na gênese dos sintomas motores.` },
            { id: "D", texto: `Doença de Parkinson inicial, associada a intoxicação medicamentosa, resultante do uso de benzodiazepínicos durante o episódio psicótico.`, correta: false, resolucao: `Por que está errada? Na Doença de Parkinson (DP), o tremor clássico é de repouso ("contar moedas") e costuma ser assimétrico no início. Além disso, a DP não causa acatisia ou discinesia orofacial em sua fase inicial (discinesias na DP geralmente surgem após anos de tratamento com Levodopa).` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O diagnóstico do Sr. Josué baseia-se na tríade: introdução de nova droga + sintomas específicos + natureza do tremor.
<br>O Gatilho: Ele iniciou recentemente o uso de quetiapina (um antipsicótico/neuroléptico) para um quadro psicótico. Embora seja um antipsicótico atípico (com menor afinidade pelos receptores D2), ele ainda pode causar efeitos extrapiramidais, especialmente em idosos.
<br>Os Sintomas:
<br>  • Acatisia: Aquela inquietação motora, a incapacidade de ficar parado.
<br>  • Discinesia Orofacial: Movimentos involuntários da boca e face.
<br>  • Tremor de Ação: Diferente do Parkinson (que é de repouso), o tremor que aparece durante o movimento ou manutenção de postura sugere causa medicamentosa ou essencial.
<br> A Outra Droga: O anlodipino é um bloqueador dos canais de cálcio. Embora os principais vilões dessa classe para parkinsonismo sejam a flunarizina e a cinarizina, há relatos na literatura de que outros bloqueadores de cálcio podem exacerbar sintomas extrapiramidais em pacientes suscetíveis.`
    },
    {
        id: "Q04",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DIABETES MELLITUS",
        especialidade: "ENDOCRINOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Dona Maria, 60 anos, foi diagnosticada com diabetes mellitus tipo 2 há 8 anos. Ela faz uso de metformina 850 mg três vezes ao dia e gliclazida 30 mg uma vez ao dia. Nos últimos meses, sua glicemia de jejum tem ficado em torno de 190 mg/dL e a hemoglobina glicada (HbA1c) está em 8,7%. Ela tem sobrepeso e relata dificuldade em perder peso, apesar de praticar caminhadas ocasionais. Não apresenta complicações microvasculares, mas sua pressão arterial, que costumava ser normal, agora está em 150 x 90 mmHg. Recentemente, em um exame de rotina, foi detectada microalbuminúria. Preocupada com o risco de desenvolver complicações renais, ela quer saber o que pode ser feito para melhorar o controle do diabetes. Qual seria a conduta mais adequada para o manejo do diabetes e dos fatores de risco de Dona Maria?`,
        alternativas: [
            { id: "A", texto: `Começar o tratamento com insulina basal e aumentar a dosagem de gliclazida para intensificar o controle glicêmico.`, correta: false, resolucao: `O erro: Ambas as condutas promovem ganho de peso, o que é contraproducente para uma paciente com sobrepeso e dificuldade de emagrecimento. Além disso, não tratam a causa da hipertensão nem protegem os rins da microalbuminúria.` },
            { id: "B", texto: `Continuar com o uso de gliclazida e incluir no tratamento um análogo de GLP-1, também conhecido como agonista do receptor de GLP-1.`, correta: false, resolucao: `O erro: Embora o análogo de GLP-1 seja excelente para perda de peso e controle glicêmico, manter a gliclazida não é o ideal se o objetivo é simplificar o esquema e focar na proteção renal. Além disso, esta opção ignora completamente o tratamento da hipertensão de 150 x 90 mmHg.` },
            { id: "C", texto: `Substituir a gliclazida por um inibidor de SGLT-2 e associar um IECA para controle da pressão arterial e microalbuminúria.`, correta: true, resolucao: `Por que está correta? Esta é a conduta padrão-ouro. O SGLT-2i atua no controle glicêmico, peso e proteção renal (baseado em grandes estudos como EMPA-REG e DAPA-CKD). O IECA trata a hipertensão e oferece a proteção necessária contra a progressão da microalbuminúria.` },
            { id: "D", texto: `Aumentar a dose de metformina e acrescentar um bloqueador dos canais de cálcio para controle da hipertensão.`, correta: false, resolucao: `O erro: Dona Maria já usa 2.550 mg de metformina (dose quase máxima, onde o ganho de eficácia é marginal e os efeitos colaterais aumentam). O bloqueador de canal de cálcio é um bom anti-hipertensivo, mas não possui o benefício de proteção renal superior demonstrado pelos IECAs em pacientes com albuminúria.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O quadro de Dona Maria é um exemplo clássico de progressão da doença onde o foco deixa de ser apenas "baixar o açúcar" e passa a ser a redução do risco residual.
<br>Perfil Metabólico: HbA1c de 8,7% (alvo geralmente < 7%) e excesso de peso. O uso de Gliclazida (sulfonilureia) contribui para o ganho de peso e não oferece proteção renal direta.
<br>A Nova Comorbidade: A pressão de 150 x 90 mmHg e a presença de microalbuminúria indicam o início de lesão renal (Nefropatia Diabética).
<br>A Escolha do Inibidor de SGLT-2: Esta classe de drogas (como Dapagliflozina ou Empagliflozina) é a "queridinha" das diretrizes atuais para este perfil, pois:
<br>  • Promove glicosúria (ajuda a baixar a HbA1c).
<br>  • Induz perda de peso.
<br>  • Reduz a pressão arterial.
<br>  • Proteção Renal: Diminui a pressão intraglomerular, reduzindo a albuminúria e retardando a progressão para insuficiência renal crônica.
<br>  • A Escolha do IECA: Em pacientes diabéticos com albuminúria, os Inibidores da Enzima Conversora de Angiotensina (IECA) ou Bloqueadores de Receptores de Angiotensina (BRA) são a primeira escolha para hipertensão devido ao seu efeito antiproteinúrico e renoprotetor.`
    },
    {
        id: "Q05",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "HIPERTENSÃO ARTERIAL",
        especialidade: "CARDIOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Sr. Pedro, 58 anos, com histórico de hipertensão arterial há 10 anos, faz uso de losartana 50 mg duas vezes ao dia e hidroclorotiazida 25 mg/dia. Ele tem obesidade (IMC de 32 kg/m²) e é sedentário. Sua pressão arterial na consulta de hoje é de 155/95 mmHg. Seus exames revelam creatinina de 1,3 mg/dL, potássio de 4,7 mEq/L e glicemia de jejum de 115 mg/dL. Ele relata dificuldades em controlar a dieta e perder peso, mas nega sintomas como dor no peito ou falta de ar. Na última avaliação, não havia sinais de hipertrofia ventricular esquerda, mas ele está preocupado com o risco cardiovascular futuro. Qual seria a conduta mais adequada para melhorar o controle da hipertensão e reduzir o risco cardiovascular no caso de Sr. Pedro?`,
        alternativas: [
            { id: "A", texto: `Prosseguir com o tratamento atualmente em uso e ajustar a dose de hidroclorotiazida, aumentando-a conforme necessário.`, correta: false, resolucao: `Por que está errada? Pedro já utiliza 25 mg de HCTZ. Aumentar a dose de tiazídicos acima disso traz pouco benefício adicional na redução da PA e aumenta significativamente o risco de efeitos colaterais metabólicos (como hipocalemia e hiperglicemia), o que é crítico para um paciente já pré-diabético.` },
            { id: "B", texto: `Manter a losartana, adicionar um bloqueador dos canais de cálcio e recomendar mudanças no estilo de vida.`, correta: true, resolucao: `Por que está correta? Esta alternativa segue exatamente a recomendação da DBHA 2024 para o tratamento da HAS não controlada com dois fármacos: a evolução para a combinação tripla (BRA + Diurético + BCC). O BCC (como anlodipino) é o fármaco de escolha para ser adicionado a este esquema. Além disso, reforça a necessidade de intervenção no estilo de vida.` },
            { id: "C", texto: `Trocar a losartana pelo uso de enalapril e adicionar ao tratamento um inibidor de SGLT-2, com o objetivo de aprimorar o manejo das condições cardiovasculares.`, correta: false, resolucao: `Por que está errada? Trocar um BRA (Losartana) por um IECA (Enalapril) é uma troca lateral dentro da mesma classe funcional (inibidores do SRAA), não sendo a estratégia prioritária para controle de PA. Embora os inibidores de SGLT-2 tenham benefícios cardiovasculares em diabéticos, eles não são a droga de escolha de primeira linha para o manejo primário da hipertensão.` },
            { id: "D", texto: `Interromper o uso de hidroclorotiazida e iniciar espironolactona para melhor controle da pressão arterial.`, correta: false, resolucao: `Por que está errada? A espironolactona é recomendada como o quarto fármaco no tratamento da hipertensão resistente (quando o paciente já falhou com a terapia tripla em doses máximas). Interromper o diurético tiazídico agora seria prematuro e contrário às recomendações de progressão escalonada.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O Sr. Pedro apresenta HAS Estágio 1 (PA entre 140-159 / 90-99 mmHg).
<br>Ele já utiliza uma combinação de BRA (Losartana) e Diurético (HCTZ), mas sua PA de 155/95 mmHg indica que o tratamento atual é insuficiente para atingir as metas recomendadas.
<br>Raciocínio Clínico:
<br>  • Classificação e Risco: Pedro tem HAS Estágio 1 associada a fatores de risco como obesidade e pré-diabetes (glicemia de 115 mg/dL).
<br>  • Progressão Terapêutica: De acordo com o fluxograma da DBHA 2024, quando a meta não é atingida com terapia dupla em doses otimizadas, o próximo passo preferencial é a tripla combinação.
<br>  • A Tríade Preferencial: A combinação tripla padrão consiste em um Inibidor da ECA ou BRA + Bloqueador de Canais de Cálcio (BCC) + Diurético Tiazídico.
<br>  • Mudanças no Estilo de Vida (MEV): Sendo Pedro obeso e sedentário, a diretriz enfatiza que as MEV (perda de peso e atividade física) são pilares fundamentais e obrigatórios em todas as etapas do tratamento.`
    },
    {
        id: "Q06",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "SÍNDROME ICTÉRICA",
        especialidade: "CIRURGIA GERAL",
        enunciado: `(TEMFC 35 – 2024) Carlos, 45 anos, procura o médico de família e comunidade queixando-se de icterícia (pele e olhos amarelados) há duas semanas, associada a urina escura e fezes esbranquiçadas. Ele relata perda de apetite e perda de peso de cerca de 5 kg no último mês. Não apresenta dor abdominal significativa, mas nota desconforto na região superior direita do abdome. Ele nega uso de medicamentos recentes e histórico de viagens. Carlos tem antecedentes de consumo regular de álcool, cerca de 3 a 4 latas de cerveja por dia nos últimos 15 anos, mas diz ter reduzido nos últimos meses. Ele também queixa-se de prurido generalizado. Exame físico revela hepatomegalia (fígado a 4,5cm do rebordo costal direito) sem sinais de dor à palpação. Qual é a hipótese diagnóstica mais provável e a conduta inicial mais apropriada?`,
        alternativas: [
            { id: "A", texto: `Hepatite alcoólica: solicitar testes de função hepática e recomendar abstinência alcoólica imediata.`, correta: false, resolucao: `Por que está errada? Embora ele tenha um histórico de etilismo, a hepatite alcoólica geralmente se apresenta com febre, dor no hipocôndrio direito e um fígado doloroso. A presença de acolia fecal persistente é muito mais sugestiva de uma obstrução mecânica das vias biliares do que de uma lesão hepatocelular inflamatória.` },
            { id: "B", texto: `Colelitíase com obstrução biliar: proceder com o encaminhamento do paciente para avaliação cirúrgica agendada.`, correta: false, resolucao: `Por que está errada? A obstrução biliar por cálculos (coledocolitíase) costuma ser acompanhada de dor tipo cólica biliar intensa e súbita. Além disso, a perda de peso acentuada não é uma característica da litíase biliar simples.` },
            { id: "C", texto: `Neoplasia de pâncreas: solicitar ultrassonografia abdominal e tomografia de abdome, além de encaminhar para avaliação cirúrgica.`, correta: true, resolucao: `Por que está correta? É a hipótese que explica perfeitamente a icterícia indolor, a acolia e a perda ponderal. A conduta inicial correta é a investigação por imagem. A ultrassonografia (USG) abdominal é frequentemente o primeiro exame pela facilidade, mas a tomografia (TC) de abdome com contraste é o padrão-ouro.` },
            { id: "D", texto: `Hepatite viral: solicitar sorologias para hepatites A, B e C e orientar sobre a higiene alimentar.`, correta: false, resolucao: `Por que está errada? As hepatites virais agudas costumam ter uma fase prodrômica (febre, mal-estar, náuseas) e o fígado costuma estar sensível ao toque. A perda de peso de 5 kg em um mês e a acolia fecal persistente são incomuns em quadros virais típicos.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico deve ser construído sobre a síndrome de icterícia colestática:
<br>  • A Síndrome Colestática: Carlos apresenta a tríade clássica de obstrução biliar: icterícia, colúria (urina escura) e acolia fecal (fezes claras). Isso indica que a bile não está chegando ao duodeno. O prurido generalizado reforça o acúmulo de sais biliares na pele.
<br>  • O Caráter da Icterícia: O enunciado destaca que não há dor abdominal significativa. Na medicina, "icterícia indolor e progressiva" em um paciente de meia-idade é o sinal de alerta máximo para obstrução maligna, geralmente por um tumor na cabeça do pâncreas ou em outras áreas periampulares.
<br>  • Sinais Constitucionais: A perda de peso de 5 kg e a anorexia (perda de apetite) em apenas um mês são marcadores de consumo metabólico elevado, típicos de processos neoplásicos.
<br>  • Exame Físico: A hepatomegalia indolor sugere congestão biliar por obstrução a jusante (abaixo do fígado). Se fosse uma hepatite, o fígado estaria doloroso à palpação.`
    },
    {
        id: "Q07",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "PARESTESIA",
        especialidade: "NEUROLOGIA",
        enunciado: `(TEMFC 35 – 2024) João, 58 anos, apresenta-se no consultório com queixas de dormência, formigamento e dor em queimação nas mãos e pés, que começaram há cerca de seis meses e tem se agravado progressivamente. Ele descreve a dor como constante, com piora à noite, e refere que também tem dificuldade para sentir calor e frio nessas áreas. João tem diabetes mellitus tipo 2 há 15 anos, com controle glicêmico irregular, e está em uso de metformina e glibenclamida. Ao exame físico, observa-se diminuição da sensibilidade tátil e vibratória nas extremidades, sem déficits motores evidentes. Os reflexos tendinosos profundos estão diminuídos nos membros inferiores. João nega consumo de álcool e não apresenta sinais de outras comorbidades, tem hemograma normal. Qual é o diagnóstico mais provável e a conduta mais apropriada para este paciente?`,
        alternativas: [
            { id: "A", texto: `Neuropatia periférica diabética: otimizar o controle glicêmico e iniciar tratamento para dor neuropática.`, correta: true, resolucao: `Por que está correta? É o diagnóstico mais provável diante de 15 anos de DM2 e controle irregular. A conduta imediata é melhorar o controle glicêmico e tratar o sintoma de dor queimação com fármacos de primeira linha (como Pregabalina, Gabapentina ou Duloxetina).` },
            { id: "B", texto: `Síndrome de Guillain-Barré: encaminhar para avaliação neurológica urgente e iniciar imunoglobulina intravenosa.`, correta: false, resolucao: `O erro: A Síndrome de Guillain-Barré é uma polirradiculoneuropatia aguda ou subaguda (dias a semanas), caracterizada principalmente por fraqueza motora ascendente e arreflexia. O quadro de João é crônico (6 meses) e puramente sensitivo/doloroso.` },
            { id: "C", texto: `Deficiência de vitamina B12: solicitar exames de dosagem de vitamina B12 e já iniciar reposição vitamínica.`, correta: false, resolucao: `O erro: Embora o uso crônico de Metformina seja um fator de risco conhecido para deficiência de B12, o enunciado afirma que o hemograma é normal (ausência de macrocitose). A neuropatia diabética é a resposta primária para este contexto clínico.` },
            { id: "D", texto: `Esclerose múltipla: encaminhar para ressonância magnética de crânio e medula espinhal para investigação.`, correta: false, resolucao: `O erro: A Esclerose Múltipla é uma doença do Sistema Nervoso Central. Ela costuma apresentar sintomas focais (como neurite óptica ou déficits motores em surtos) e não uma polineuropatia distal simétrica e progressiva.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O quadro de João é a descrição clássica da Neuropatia Periférica Diabética (NPD), especificamente a forma polineuropática simétrica distal.
<br><br>Fisiopatologia: O diabetes de longa data (15 anos) e o "controle irregular" levam à hiperglicemia crônica. Isso gera estresse oxidativo, acúmulo de sorbitol e glicação avançada de proteínas, resultando em dano progressivo às fibras nervosas.
<br><br>Padrão de Sintomas: A dor em queimação com piora noturna e a distribuição simétrica em mãos e pés (padrão em "bota e luva") são marcas registradas. A perda de sensibilidade térmica e vibratória indica o comprometimento de fibras finas e grossas, respectivamente.
<br><br>Exame Físico: A hiporreflexia (reflexos diminuídos) em membros inferiores sem déficit motor confirma uma neuropatia predominantemente sensitiva, típica da fase em que João se encontra.`
    },
    {
        id: "Q08",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DISTÚRBIOS MENSTRUAIS",
        especialidade: "GINECOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Ana, 36 anos, casada, comparece a consulta com a seguinte queixa: “Há 4 meses parei o anticoncepcional por conta própria e desde então não menstruei mais. Já fiz vários testes de gravidez, e, infelizmente, todos deram negativos. Além disso, surgiram muitas espinhas no rosto e nas costas.” Ao exame apresenta PA 136/88mmHg, IMC 30 kg/m², acantose nigrans e exame ginecológico sem alterações. Com base no quadro retratado, assinale a alternativa correta sobre a classificação da amenorreia e conduta indicada.`,
        alternativas: [
            { id: "A", texto: `Trata-se de amenorreia primária, com indicação de avaliar FSH e cariótipo genético.`, correta: false, resolucao: `O erro: A amenorreia primária é quando a mulher nunca menstruou na vida (até os 13 anos sem caracteres sexuais ou 15 anos com caracteres). Ana já tinha ciclos, logo é secundária.` },
            { id: "B", texto: `Trata-se de amenorreia secundária, com indicação de avaliar FSH e retomar anticoncepcional.`, correta: false, resolucao: `O erro: A conduta de "retomar o anticoncepcional" antes de concluir a investigação diagnóstica é um erro, pois o medicamento apenas "mascararia" o problema sem tratar a causa base.` },
            { id: "C", texto: `Trata-se de amenorreia primária, com indicação de ultrassonografia e anticoncepcional.`, correta: false, resolucao: `O erro: Erro na classificação inicial (é secundária, não primária) e conduta inadequada para o momento.` },
            { id: "D", texto: `Trata-se de amenorreia secundária, avaliar prolactina, progestagênio e perfil metabólico.`, correta: true, resolucao: `Por que está correta? Classifica corretamente a amenorreia e propõe a investigação inicial padrão para causas comuns (prolactina e teste do progestagênio). Além disso, individualiza a conduta ao solicitar o perfil metabólico, essencial para uma paciente com sinais claros de resistência insulínica e obesidade.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para a Ana deve começar pela definição do tempo de ausência de menstruação e pela interpretação dos achados do exame físico.
<br>Classificação da Amenorreia: Como Ana já menstruava anteriormente, a ausência de menstruação por 4 meses configura Amenorreia Secundária (definida como ausência de fluxo por 3 meses em mulheres com ciclos regulares ou 6 meses em irregulares).
<br>Achados Clínicos ("Pistas"):
<br>  • Acne: Sinal de hiperandrogenismo clínico.
<br>  • IMC 30 kg/m2: Obesidade grau I.
<br>  • Acantose Nigricans: Manchas escuras e aveludadas em dobras, que são sinais patognomônicos de resistência insulínica.
<br><br>Hipótese Principal: O quadro sugere fortemente a Síndrome dos Ovários Policísticos (SOP) ou uma disfunção endócrina relacionada.
<br>Investigação Inicial: Diante de uma amenorreia secundária, a propedêutica básica inclui a dosagem de Prolactina, TSH e o Teste do Progestagênio. Devido à acantose e ao IMC, o perfil metabólico (glicemia, insulina, lipídios) é mandatório.`
    },
    {
        id: "Q09",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "PLANEJAMENTO FAMILIAR",
        especialidade: "GINECOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Julia, 25 anos, vem a unidade solicitar apoio para contracepção de emergência. Utiliza anticoncepcional combinado oral há dois anos, mas alega que deixa de tomar a medicação com frequência, principalmente quando tem enxaqueca na semana, pois percebe que piora os sintomas visuais e a dor. Não possui parceiro fixo, e há 4 dias teve relação desprotegida. A data da última menstruação foi há 20 dias, e ela diz que já fez uso de contracepção de emergência outras 2 vezes, sem efeitos adversos. Diante do caso, assinale a alternativa que apresenta conduta adequada.`,
        alternativas: [
            { id: "A", texto: `Orienta que o levonorgestrel 1,5mg, conhecido como “pílula do dia seguinte” deve ser tomado em até 72 horas, sem indicação no momento.`, correta: false, resolucao: `O erro: Embora o pico de eficácia do levonorgestrel seja em 72h, ele ainda pode ser tentado até 120h se não houver outra opção. Contudo, o erro principal é ignorar que existe um método muito superior para o caso dela (DIU de cobre) que ainda está no prazo.` },
            { id: "B", texto: `Tranquiliza a paciente que por estar no vigésimo dia do ciclo não apresenta risco de gestação, mas que deverá realizar os testes para ISTs.`, correta: false, resolucao: `O erro: Como Júlia esquece as pílulas com frequência, não podemos prever a data da ovulação. O risco de gestação existe e é real. Além disso, a conduta negligencia a necessidade de contracepção de urgência.` },
            { id: "C", texto: `Propõe a inserção do Diu de Cobre, para atuar como contracepção de urgência e ajuste do método contraceptivo de longo prazo.`, correta: true, resolucao: `Por que está correta? Atende ao prazo de 120 horas para emergência e resolve definitivamente o problema da contraindicação ao estrogênio (migrânea com aura) e da baixa adesão aos métodos orais.` },
            { id: "D", texto: `Troca o contraceptivo combinado oral para injetável para que não se esqueça e prescreve medicação para as crises de enxaqueca.`, correta: false, resolucao: `O erro: O injetável combinado também contém estrogênio, mantendo o risco de AVC (Categoria 4 para migrânea com aura). Além disso, o injetável não serve como contracepção de emergência para uma relação que já ocorreu há 4 dias.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para a Júlia deve priorizar dois fatores: o tempo decorrido desde a relação desprotegida e uma contraindicação absoluta no histórico dela.
<br>O Fator Tempo: A relação ocorreu há 4 dias (96 horas). O DIU de Cobre é o método de contracepção de emergência mais eficaz que existe e pode ser inserido em até 5 dias (120 horas) após o coito desprotegido.
<br>Contraindicação Clínica (A "Pegadinha"): Júlia relata enxaqueca com "sintomas visuais". Isso caracteriza Migrânea com Aura. Para mulheres com migrânea com aura, o uso de estrogênio é classificado como Categoria 4 da OMS (Risco Inaceitável), devido ao risco aumentado de Acidente Vascular Cerebral (AVC).
<br>A Solução LARC: O DIU de Cobre não possui hormônios, sendo seguro para quem tem enxaqueca, e resolve o problema da baixa adesão ("esquece de tomar com frequência"), sendo um método de longa duração (LARC).`
    },
    {
        id: "Q10",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "INFECÇÕES DE VIAS AÉREAS (IVAS)",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Julia trouxe seu filho João, de 1 ano e 6 meses, para consulta. Conta que há 3 dias a criança iniciou sintomas gripais com tosse, coriza e diminuição do apetite. Na noite anterior evoluiu com febre de 39,5ºC, ficou choroso e puxando e esfregando as orelhas. A mãe está preocupada pois há duas semanas João começou a ir para creche e lhe disseram que é comum ter infecções frequentes. Ao exame físico apresenta abaulamento de membrana timpânica bilateral com hiperemia. Diante do caso, assinale a conduta adequada:`,
        alternativas: [
            { id: "A", texto: `Esclarecer a mãe que a otite de João é viral, sem indicação de antibioticoterapia, com provável resolução em 2 dias.`, correta: false, resolucao: `O erro: Embora quadros virais precedam a OMA, o abaulamento e a febre alta indicam uma infecção bacteriana secundária. Em crianças menores de 2 anos com OMA bilateral, a chance de resolução espontânea sem antibiótico é significativamente menor.` },
            { id: "B", texto: `Por apresentar abaulamento bilateral, o tratamento deve conter, além do antihistamínico, um corticoide para alívio dos sintomas.`, correta: false, resolucao: `O erro: Anti-histamínicos e descongestionantes não têm benefício comprovado no tratamento da OMA e podem aumentar o tempo de efusão no ouvido médio. O corticoide também não é terapia de primeira linha.` },
            { id: "C", texto: `João possui critérios para tratamento com antibiótico por 10 dias, mesmo na ausência de otorreia.`, correta: true, resolucao: `Por que está correta? De acordo com a SBP e a AAP, crianças entre 6 meses e 2 anos com OMA bilateral ou OMA unilateral com sintomas graves (febre ≥ 39ºC) devem receber antibioticoterapia imediata. O tempo recomendado para crianças < 2 anos é de 10 dias.` },
            { id: "D", texto: `Diante da ausência de sintomas severos, o tratamento indicado para João é analgésico simples de 6 em 6 horas.`, correta: false, resolucao: `O erro: Essa conduta (Observação Vigilante) só seria permitida se João tivesse mais de 2 anos e sintomas leves. A presença de febre de 39,5ºC e a bilateralidade tornam o antibiótico mandatório.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br> O diagnóstico de João é de OMA bilateral com sintomas graves. O raciocínio clínico baseia-se em três pilares:
<br>  • Diagnóstico de Certeza: O abaulamento da membrana timpânica é o sinal mais fidedigno de efusão purulenta no ouvido médio, confirmando a etiologia bacteriana da fase aguda.
<br>  • Idade do Paciente: João tem 1 ano e 6 meses (18 meses). Crianças abaixo de 2 anos têm maior risco de complicações e falha na resolução espontânea.
<br>  • Gravidade e Lateralidade:
<br>      • Sintomas Graves: Ele apresenta febre alta (39,5ºC). O critério de gravidade geralmente é definido por febre ≥ 39ºC ou otalgia moderada/grave por mais de 48 horas.
<br>      • Lateralidade: A OMA é bilateral.
<br><br>Nota Técnica: João preenche dois critérios para tratamento imediato: idade < 2 anos com doença bilateral e presença de sintomas graves.`
    },
{
        id: "Q11",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "PRÉ-NATAL",
        especialidade: "OBSTETRÍCIA",
        enunciado: `(TEMFC 35 – 2024) Joana, 28 anos, hígida, está realizando acompanhamento pré-natal na unidade. Primeira gestação, está hoje, com 12 semanas desde a DUM, sem queixa, veio apresentar os resultados dos exames solicitados. Exame físico sem alterações com PA 110/66 mmHg. Resultados dos exames complementares: Hemoglobina 11,8mg/dL; tipo sanguíneo O negativo; glicemia de jejum de 88 mg/dL; urina rotina sem alterações; VDRL não reagente; anti-HIV não reagente; HbsAg não reagente; toxoplasmose IgM negativo e IgG positivo. Com base nos resultados apresentados, é correto afirmar que a paciente:`,
        alternativas: [
            { id: "A", texto: `Apresenta anemia leve e deve ser prescrito sulfato ferroso 120g/dia, além de se verificar o tipo sanguíneo do pai e coombs indireto.`, correta: false, resolucao: `O erro: Joana tem Hb = 11,8 g/dL, o que é normal na gestação (Hb >= 11,0 g/dL). Além disso, a dosagem mencionada está incorreta para qualquer protocolo.` },
            { id: "B", texto: `Apresenta-se normotensa e com glicemia adequada, sem necessidade de realizar novos exames glicêmicos durante a gestação.`, correta: false, resolucao: `O erro: Mesmo com glicemia de jejum normal no 1º trimestre, é mandatório o Teste Oral de Tolerância à Glicose (TOTG) entre 24-28 semanas.` },
            { id: "C", texto: `Apresenta resultados incompletos, pois além da urina rotina é necessário avaliar urocultura mesmo na ausência de sintomas.`, correta: true, resolucao: `Por que está correta? De acordo com o Ministério da Saúde, o rastreio de bacteriúria assintomática deve ser feito com Urocultura, que é o padrão-ouro. O sumário de urina (tipo I) tem baixa sensibilidade para detectar colonização bacteriana sem inflamação evidente.` },
            { id: "D", texto: `Apresenta sorologias não reagentes, mas deve ser orientada quanto a imunização e métodos de precaução para não contrair toxoplasmose.`, correta: false, resolucao: `O erro: Como o IgG é positivo e o IgM é negativo, ela já é imune. As orientações de não comer carne malpassada ou evitar contato com fezes de gatos são destinadas apenas às gestantes suscetíveis (IgG e IgM negativos).` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>Para resolver esta questão, precisamos analisar cada dado laboratorial da Joana à luz das diretrizes do Ministério da Saúde (MS) e da FEBRASGO:
<br>  • Hemoglobina (Hb 11,8 g/dL): Na gestação, define-se anemia como Hb < 11,0 g/dL. Portanto, Joana não está anêmica. O sulfato ferroso profilático (40 mg de ferro elementar) é indicado para todas, mas o termo "anemia leve" e a dose de "120g" (provável erro de digitação para mg, mas ainda assim para tratamento) invalidam a opção.
<br>  • Toxoplasmose (IgG+ / IgM-): Este resultado indica imunidade. Joana já teve contato com o parasita no passado e possui anticorpos de memória. Ela não corre risco de infecção primária durante esta gestação e, por isso, não precisa de orientações de precaução para "não contrair" a doença.
<br>  • Glicemia de Jejum (88 mg/dL): O valor está normal (< 92 mg/dL). No entanto, isso não exclui a necessidade de novos exames. Todas as gestantes com glicemia inicial normal devem realizar o TOTG 75g entre a 24ª e 28ª semana para rastrear Diabetes Gestacional.
<br>  • Urina de Rotina vs. Urocultura: A urina de rotina (tipo I/EAS) normal não exclui a Bacteriúria Assintomática. Na gestação, essa condição aumenta drasticamente o risco de pielonefrite e parto prematuro. Por isso, a Urocultura com antibiograma é obrigatória no primeiro trimestre, independentemente de sintomas ou do resultado do EAS.
<br><br>📚 Embasamento Científico (Ministério da Saúde)
<br>  • Rotina de Exames: A primeira consulta de pré-natal deve incluir: Tipagem sanguínea e fator Rh, Coombs indireto (se Rh negativo), Hb/Ht, Glicemia de jejum, VDRL, Anti-HIV, HBsAg, Sorologia para Toxoplasmose, Urina tipo I e Urocultura.
<br>  • Bacteriúria Assintomática: Ocorre em 2% a 10% das gestantes. Se não tratada, até 40% evoluem para pielonefrite.
<br>  • Imunidade à Toxoplasmose: A presença de IgG confere proteção permanente contra a reinfecção que poderia causar danos fetais (exceto em casos raros de imunossupressão grave).`
    },
    {
        id: "Q12",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DOENÇAS EXANTEMÁTICAS",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Uma médica de família e comunidade atua como preceptora de estudantes do internato de graduação de medicina. Recebeu de um dos internos a demanda de discutir o caso de uma criança de 2 anos, que apresenta um quadro de febre alta (>38º C) e persistente há aproximadamente cinco dias, com hiperemia e rachadura nos lábios, associada a um exantema maculopapular escarlatiniforme. Caso você estivesse no lugar dessa médica e dispondo dessas informações iniciais, qual seria a hipótese diagnóstica que você pensaria?`,
        alternativas: [
            { id: "A", texto: `Dengue.`, correta: false, resolucao: `Por que está errada? Embora a dengue cause febre alta e exantema, ela raramente se apresenta com as alterações labiais descritas (rachaduras e hiperemia intensa). O exantema da dengue costuma ser do tipo "ilhas brancas em um mar vermelho" e o quadro clínico é marcado mais por mialgia, dor retro-orbitária e prostração do que por alterações inflamatórias de mucosas.` },
            { id: "B", texto: `Dermatite herpetiforme.`, correta: false, resolucao: `Por que está errada? Esta é uma condição cutânea crônica, intensamente pruriginosa e autoimune, associada à sensibilidade ao glúten (doença celíaca). Ela se apresenta com vesículas e pápulas simétricas, não cursando com febre alta persistente ou quadro sistêmico agudo como o descrito.` },
            { id: "C", texto: `Doença de Kawasaki.`, correta: true, resolucao: `Por que está correta? O quadro preenche os principais critérios: febre por >= 5 dias, alteração de lábios (mucosa oral) e exantema polimorfo. Na presença de febre por 5 dias e 4 dos 5 critérios clássicos, o diagnóstico é fechado. Mesmo em casos incompletos, este conjunto de sinais é altamente sugestivo.` },
            { id: "D", texto: `Mononucleose infecciosa.`, correta: false, resolucao: `Por que está errada? A mononucleose causa febre, faringite e linfonodopatia. Embora possa apresentar exantema (especialmente se o paciente usar amoxicilina inadvertidamente), as rachaduras labiais e a febre alta persistente sem uma faringite exsudativa proeminente tornam o Kawasaki uma hipótese muito mais provável e urgente devido ao risco cardíaco.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para este caso deve focar na persistência da febre e nas alterações de mucosas/pele em uma criança pequena.
<br>  • A Febre: O marcador inicial é a febre alta e persistente por 5 dias ou mais. Este é o critério obrigatório para o diagnóstico clássico da Doença de Kawasaki.
<br>  • Alterações Orais: A descrição de "hiperemia e rachadura nos lábios" é um dos critérios diagnósticos da doença. Outros achados comuns incluem a "língua em morango" e hiperemia difusa da orofaringe.
<br>  • Exantema: O exantema na Doença de Kawasaki é polimorfo, podendo se apresentar como maculopapular escarlatiniforme (como no caso), morbiliforme ou até semelhante ao eritema multiforme. Ele geralmente se inicia no tronco e extremidades.
<br>  • A Patologia: A Doença de Kawasaki é uma vasculite de médios vasos que afeta predominantemente crianças menores de 5 anos. Sua maior importância clínica reside no risco de formação de aneurismas de artérias coronárias se não for tratada precocemente com imunoglobulina intravenosa (IVIG).
<br><br>📚 Embasamento Científico
<br>De acordo com as diretrizes da American Heart Association (AHA) e da Sociedade Brasileira de Pediatria (SBP):
<br>  • Critérios Diagnósticos: Febre por pelo menos 5 dias associada a 4 dos seguintes critérios:
<br>     1. Alterações de extremidades (eritema/edema de palmas e plantas ou descamação periungueal).
<br>     2. Exantema polimorfo.
<br>     3. Conjuntivite bulbar bilateral não purulenta.
<br>     4. Alterações de lábios e cavidade oral.
<br>     5. Linfonodopatia cervical (geralmente unilateral, > 1,5 cm).
<br>  • Tratamento: A fase aguda deve ser tratada com Imunoglobulina Venosa (IVIG) em dose única alta (2 g/kg) e Ácido Acetilsalicílico (AAS), idealmente até o 10º dia de doença para prevenir os aneurismas coronarianos.
<br>  • Monitoramento: O ecocardiograma é o exame padrão para rastrear as alterações nas artérias coronárias.`
    },
    {
        id: "Q13",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "ARTRITES",
        especialidade: "REUMATOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Uma menina de 3 anos apresenta rigidez e claudicação persistentes há mais de 2 meses. O início dos sintomas foi insidioso, e os pais não se recordam de nenhum trauma ou infecção anterior. Eles observam que um dos joelhos da criança está edemaciado e não pode ser completamente estendido, embora ela não pareça sentir dor significativa. Os sintomas são mais intensos pela manhã, logo ao acordar, mas sua marcha melhora ao longo do dia. A criança não apresentou febre, erupções cutâneas ou outros sintomas constitucionais. A hipótese diagnóstica justificada mais provável neste caso é:`,
        alternativas: [
            { id: "A", texto: `Artrite idiopática juvenil, diante da faixa etária e tempo de afecção do quadro clínico.`, correta: true, resolucao: `Por que está correta? O quadro preenche todos os critérios: idade (< 16 anos), duração da artrite (> 6 semanas), início insidioso, rigidez matinal típica e padrão monoarticular (joelho). A ausência de sintomas constitucionais (febre, rash) direciona o diagnóstico para as formas não sistêmicas da AIJ.` },
            { id: "B", texto: `Osteocondrite dissecante do joelho, diante da dor não significativa.`, correta: false, resolucao: `O erro: Esta condição é mais comum em adolescentes e adultos jovens ativos. Caracteriza-se por dor relacionada com a atividade física e sintomas mecânicos (bloqueio articular ou sensação de "corpo solto"). Não explica a rigidez matinal nem o edema crônico insidioso numa criança de 3 anos.` },
            { id: "C", texto: `Artrite reativa, diante da afecção em padrão monoarticular.`, correta: false, resolucao: `O erro: A artrite reativa surge geralmente 1 a 4 semanas após uma infecção gastrointestinal ou urinária (que os pais negam). Embora possa ser monoarticular, o tempo de 2 meses de evolução e a marcante rigidez matinal favorecem fortemente a natureza crônica da AIJ em vez de um quadro reativo.` },
            { id: "D", texto: `Dermatomiosite juvenil, diante da persistência de claudicação por várias semanas.`, correta: false, resolucao: `O erro: A dermatomiosite juvenil caracteriza-se primordialmente por fraqueza muscular proximal (dificuldade em subir escadas ou levantar da cadeira) e alterações cutâneas patognomônicas (hélitropo e pápulas de Gottron). O caso clínico descreve um problema articular localizado, sem queixas de força muscular ou lesões na pele.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para este caso baseia-se na cronicidade, no padrão de acometimento e na ausência de sinais sistêmicos.
<br>  • Tempo de Evolução: Os sintomas persistem há mais de 2 meses (8 semanas). O critério fundamental para o diagnóstico de Artrite Idiopática Juvenil (AIJ) é a presença de artrite por pelo menos 6 semanas em crianças com menos de 16 anos.
<br>  • Padrão Inflamatório: A rigidez matinal que melhora ao longo do dia é o "sinal de ouro" da dor inflamatória. Ao contrário da dor mecânica (que piora com o esforço), a dor inflamatória da AIJ apresenta o chamado fenômeno de gel (rigidez após períodos de repouso).
<br>  • Apresentação "Indolor": É muito comum na AIJ que a criança apresente edema articular importante sem queixar-se de dor intensa. Os pais notam a claudicação (mancar) ou a recusa em realizar certas atividades, mas a criança raramente chora de dor.
<br>  • Epidemiologia: A forma oligoarticular (acometimento de até 4 articulações) é a mais comum, afetando tipicamente meninas entre os 2 e 4 anos de idade, tendo o joelho como a articulação mais frequentemente atingida.
<br><br>📚 Embasamento Científico
<br>De acordo com os critérios da ILAR (International League of Associations for Rheumatology) e da Sociedade Brasileira de Pediatria (SBP):
<br>  • Definição de AIJ: Artrite de causa desconhecida, com início antes dos 16 anos e duração mínima de 6 semanas, após exclusão de outras causas.
<br>  • Subtipo Oligoarticular: Afeta 1 a 4 articulações nos primeiros 6 meses de doença. É a forma com maior associação a Uveíte Anterior Assintomática, o que exige rastreio obrigatório com exame de lâmpada de fenda pelo oftalmologista, especialmente se o anticorpo antinuclear (ANA/FAN) for positivo.
<br>  • Diferencial de Dor:
<br>    - Inflamatória (AIJ): Pior de manhã, melhora com movimento, edema presente.
<br>    - Mecânica/Crescimento: Pior à noite, melhora com repouso, sem edema articular.`
    },
    {
        id: "Q14",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DISFUNÇÃO MICCIONAL",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) A enurese noturna, caracterizada pela micção involuntária durante o sono, é uma condição que ocorre com maior frequência em meninos e possui causas heterogêneas, além de múltiplos diagnósticos diferenciais. Dentre as alternativas apresentadas, selecione aquela que contém premissas corretas em relação à abordagem do tratamento da enurese noturna:`,
        alternativas: [
            { id: "A", texto: `A terapia de primeira escolha para todas as crianças afetadas pela enurese noturna são medidas educacionais e comportamentais ativas, tais quais, treinamento de hábitos miccionais regulares e limitação de ingestão de líquidos antes de dormir.`, correta: true, resolucao: `Por que está correta? De acordo com a Sociedade Brasileira de Pediatria (SBP) e a International Children's Continence Society (ICCS), a Uroterapia Padrão é o primeiro passo para todos os pacientes. Envolve reeducação miccional e dietética. Muitas crianças atingem a continência apenas com essas mudanças de hábito.` },
            { id: "B", texto: `Para crianças menores de 7 anos é recomendada terapia de alarme, visando o treinamento de hábitos miccionais, dispositivo que produz um som alto assim que um sensor de umidade detecta uma pequena quantidade de urina, entretanto, não é amplamente acessível.`, correta: false, resolucao: `O erro: Embora o alarme seja eficaz, ele exige um alto grau de maturação e motivação, tanto da criança quanto da família. Geralmente, é reservado para crianças acima de 6 ou 7 anos que já falharam nas medidas iniciais e que desejam ativamente parar de molhar a cama.` },
            { id: "C", texto: `Para crianças maiores de 7 anos com falha nas medidas ativas e terapia de alarme, e que tenham diagnóstico de disfunção vesical ou bexiga hiperativa, pode ser considerado o tratamento medicamentoso com desmopressina.`, correta: false, resolucao: `O erro: A desmopressina atua reduzindo a produção de urina durante a noite (indicada para poliúria noturna). Se o problema é disfunção vesical ou bexiga hiperativa (baixa capacidade da bexiga ou contrações involuntárias do detrusor), a desmopressina isoladamente costuma falhar. Nesses casos, a preferência é por antimuscarínicos.` },
            { id: "D", texto: `Medicamentos antimuscarínicos, que relaxam o músculo detrusor, constituem-se como terapia de primeira escolha, sendo indicados para as crianças a partir dos 7 anos, independente da história pregressa e da existência de sinais de alarme.`, correta: false, resolucao: `O erro: Antimuscarínicos (como a oxibutinina) nunca são a primeira escolha para enurese monossintomática (apenas noturna). Eles são reservados para casos de disfunção miccional diurna ou como terapia adjuvante em casos refratários, sempre após a tentativa de medidas comportamentais.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O tratamento da enurese noturna (perda involuntária de urina durante o sono em crianças com 5 anos ou mais) segue uma hierarquia de evidências baseada na motivação da criança e na fisiopatologia do quadro.
<br>Uroterapia Padrão (Medidas Iniciais): Antes de qualquer medicamento ou alarme, o tratamento deve começar com a "uroterapia". Isso inclui orientações sobre a ingestão de líquidos (aumentar durante o dia e reduzir 2h antes de dormir), evitar cafeína à noite, estabelecer uma rotina de micção regular durante o dia (a cada 2-3 horas) e tratar a constipação intestinal, que frequentemente está associada à enurese.
<br>O Alarme e a Desmopressina: São terapias de segunda linha, indicadas quando as medidas comportamentais falham após alguns meses. O alarme é excelente para condicionamento, enquanto a desmopressina (análogo da vasopressina) é eficaz para crianças com poliúria noturna.
<br>Disfunção Vesical: Se a criança apresenta sintomas diurnos (urgência, frequência), o diagnóstico muda para enurese não monossintomática, o que pode exigir medicações que atuam no músculo detrusor.
<br><br> 📚 Embasamento Científico
<br> De acordo com o Consenso da ICCS e as diretrizes da SBP:
<br>  • Definição: A enurese só é diagnosticada após os 5 anos de idade cronológica e de desenvolvimento.
<br>  • Abordagem Inicial: Diário miccional, tratamento de constipação e orientações comportamentais (Uroterapia).
<br>  • Terapia Médica:
<br>    - Desmopressina: Melhor para crianças com grandes volumes de urina à noite e bexiga de capacidade normal.
<br>    - Alarme Noturno: Melhor para crianças com bexigas de pequena capacidade e para aquelas que não conseguem acordar com o estímulo da bexiga cheia.
<br>    - Anticolinérgicos: Indicados especificamente para hiperatividade do detrusor.`
    },
    {
        id: "Q15",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DIABETES MELLITUS",
        especialidade: "ENDOCRINOLOGIA",
        enunciado: `(TEMFC 35 – 2024) A causa mais comum da doença renal crônica (DRC) é a diabetes, dados do censo da Sociedade Brasileira de Nefrologia de 2023 indicam que 32% dos casos de DRC em diálise, no Brasil, são pessoas com diabetes. Neste cenário epidemiológico, a instituição de tratamento adequado da hiperglicemia visa evitar a progressão para doença renal terminal, intervir nos eventos cardiovasculares e reduzir a mortalidade. Sobre o tratamento da hiperglicemia no contexto da doença renal crônica, pode-se afirmar que:`,
        alternativas: [
            { id: "A", texto: `A glibenclamida pode ser utilizada como estratégia de tratamento da hiperglicemia, independentemente da taxa de filtração glomerular estimada.`, correta: false, resolucao: `O erro: A glibenclamida é uma sulfonilureia de segunda geração com metabólitos ativos de excreção renal. Em pacientes com DRC, esses metabólitos se acumulam, causando hipoglicemias graves e prolongadas. Ela é contraindicada se a TFG < 60 mL/min/1,73m².` },
            { id: "B", texto: `A insulina é recomendada tratamento da hiperglicemia em indivíduos com diabetes tipo 2 com taxa de filtração glomerular estimada menor que 30 mL/min/1,73m², quando a hemoglobina glicada estiver acima da meta.`, correta: true, resolucao: `Por que está correta? Conforme a diretriz da Sociedade Brasileira de Diabetes (SBD 2025), no estágio 4 da DRC (TFG < 30), a maioria dos antidiabéticos orais deve ser suspensa (como a metformina) ou não tem potência suficiente para reduzir a HbA1c (como os iSGLT-2). A insulina torna-se a terapia de escolha para alcançar as metas glicêmicas, embora exija monitoramento rigoroso pelo risco de hipoglicemia.` },
            { id: "C", texto: `A metformina não pode ser indicada para início do tratamento da hiperglicemia para indivíduos com a taxa de filtração glomerular estimada menor que 60ml/min/1.73m².`, correta: false, resolucao: `O erro: A metformina pode ser iniciada com segurança em pacientes com TFG entre 45 e 60 mL/min/1,73m². A recomendação de não iniciar a droga geralmente aplica-se quando a TFG está abaixo de 45, e ela deve ser obrigatoriamente suspensa se a TFG cair abaixo de 30 mL/min/1,73m².` },
            { id: "D", texto: `A dapaglifozina é indicada como tratamento da hiperglicemia aos indivíduos com taxa de filtração glomerular estimada abaixo 45 mL/min/1,73m², cujas as metas de hemoglobina glicada não foram alcançadas com o uso de insulina e metformina.`, correta: false, resolucao: `O erro: Esta alternativa inverte a prioridade. Os inibidores de SGLT-2 (como a dapagliflozina) são indicados precocemente para proteção cardiorrenal em pacientes com DRC, muitas vezes independentemente do controle da HbA1c ou do uso de insulina. Além disso, sua capacidade de reduzir a glicose diminui conforme a TFG cai, não sendo a droga de escolha para "resgate glicêmico" em TFGs muito baixas.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>  • O tratamento do paciente diabético com DRC mudou de um foco puramente "glicocêntrico" para um foco de proteção orgânica. No entanto, à medida que a função renal declina (especialmente abaixo de 30 mL/min/1,73m²), o arsenal terapêutico para controle da glicemia (HbA1c) reduz-se drasticamente.
<br>  • Metabolismo da Insulina: Os rins são responsáveis por cerca de 30-80% da depuração da insulina. Na DRC avançada, a meia-vida da insulina aumenta, exigindo ajustes de dose, mas ela permanece como a ferramenta mais eficaz e segura quando outros agentes orais são contraindicados.
<br>  • Limitações dos Orais: Muitas drogas dependem da excreção renal ou perdem a eficácia glicosúrica (como os iSGLT-2) quando a filtração glomerular está muito baixa.
<br>  • Segurança: O principal objetivo na DRC avançada é evitar a hipoglicemia, que é particularmente perigosa nesta população.
<br><br> 📚 Embasamento Científico (SBD 2025 / KDIGO 2024)
<br>  • Metformina: Dose total até TFG 45; meia dose (máximo 1000mg) entre 30-45; suspender se < 30.
<br>  • iSGLT-2: Devem ser iniciados para proteção renal se TFG > 20-25 mL/min/1,73m². No entanto, se o objetivo for apenas controle de hiperglicemia, sua eficácia é mínima abaixo de 45.
<br>  • Insulina: Não tem contraindicação por faixa de TFG, mas requer redução de dose (frequentemente em 25% quando TFG < 50 e em 50% quando TFG < 10) para evitar hipoglicemia.`
    },
    {
        id: "Q16",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "CARDIOPATIA CHAGÁSICA",
        especialidade: "CARDIOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Pedro, 52 anos, morador da zona rural de uma região endêmica da Doença de Chagas, vem a consulta na UBS com queixa de dispneia aos pequenos esforços, edema de membros inferiores além de tontura e cansaço. Você conduz uma consulta centrada na pessoa, realiza o exame físico cuidadoso e diante da suspeita de Doença de Chagas na forma cardíaca crônica, solicita um Eletrocardiograma imediatamente. Assinale a alternativa com as possíveis alterações eletrocardiográficas que fortaleceriam as suspeitas diagnósticas:`,
        alternativas: [
            { id: "A", texto: `Frequência cardíaca maior que 130bpm ou menor que 50bpm.`, correta: false, resolucao: `Por que está errada? Embora a bradicardia sinusal (< 50 bpm) seja comum em chagásicos devido à disfunção do nó sinusal, e taquiarritmias possam ocorrer, esses achados são inespecíficos. Muitas outras condições (como uso de betabloqueadores ou ansiedade) podem causar essas alterações. O BRD é muito mais sugestivo da etiologia chagásica especificamente.` },
            { id: "B", texto: `Ritmo sinusal, QRS estreito, segmento ST isoelétrico.`, correta: false, resolucao: `Por que está errada? Esta descrição descreve um ECG normal ou sem distúrbios de condução/repolarização significativos. Em um paciente com dispneia e edema por suspeita de cardiopatia chagásica crônica, espera-se encontrar alterações de condução; um ECG normal tornaria o diagnóstico de CCC menos provável.` },
            { id: "C", texto: `QRS alargado (duração = 140 ms) com morfologia de bloqueio de ramo direito.`, correta: true, resolucao: `Por que está correta? O Bloqueio de Ramo Direito (BRD) é a alteração mais típica da Doença de Chagas. A presença de um QRS alargado (> 120 ms) confirma que o sistema de condução está severamente comprometido, o que corrobora a suspeita clínica de cardiopatia estrutural crônica pelo Chagas.` },
            { id: "D", texto: `Ritmo Sinusal, FC 88bpm, QRS estreito,elevação do segmento ST.`, correta: false, resolucao: `Por que está errada? A elevação do segmento ST (supradesnivelamento) é o sinal clássico de lesão miocárdica aguda (Infarto Agudo do Miocárdio) ou pericardite. Embora pacientes com Chagas possam infartar, o "supradesnivelamento" não é uma característica definidora da forma cardíaca crônica da doença. Além disso, o QRS estreito afasta os bloqueios de ramo típicos da doença.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>  • O Pedro apresenta sinais clássicos de Insuficiência Cardíaca (IC) — dispneia, edema de membros inferiores e cansaço — associados a sintomas de baixo débito ou arritmia (tontura). Em uma área endêmica, a Doença de Chagas deve ser a primeira hipótese.
<br>  • O Alvo do Parasita: O Trypanosoma cruzi tem uma predileção pelo sistema de condução cardíaco, causando fibrose e destruição de fibras nervosas e musculares.
<br>  • O Achado "Assinatura": O Bloqueio de Ramo Direito (BRD) é a alteração eletrocardiográfica mais comum e característica da CCC. Quando associado ao Bloqueio Divisional Anterossuperior Esquerdo (BDAS), a suspeita de Chagas torna-se altíssima.
<br>  • Alargamento do QRS: Um QRS com duração >= 120 ms (no caso da questão, 140 ms) indica um bloqueio completo de ramo, refletindo o atraso na condução intraventricular devido à fibrose miocárdica.
<br><br>📚 Embasamento Científico
<br>De acordo com o II Consenso Brasileiro em Doença de Chagas:
<br>  • Rastreio: Todo paciente com sorologia positiva para Chagas deve realizar um ECG.
<br>  • Alterações Sugestivas: Além do BRD (isolado ou com BDAS), outras alterações comuns incluem extrassístoles ventriculares, bloqueios atrioventriculares (BAV) de diversos graus e zonas de inatividade elétrica (fibrose).
<br>  • Prognóstico: A presença de bloqueios de ramo e o alargamento do QRS são marcadores de maior gravidade e risco de progressão para insuficiência cardíaca e morte súbita.
<br><br>Termos Técnicos para o seu Prontuário:
<br>  • - BRD (Bloqueio de Ramo Direito): Atraso na despolarização do ventrículo direito.
<br>  • - BDAS (Bloqueio Divisional Anterossuperior Esquerdo): Desvio do eixo para a esquerda (além de -30°).
<br>  • - QRS Alargado: Duração do complexo QRS >= 120 ms.`
    },
    {
        id: "Q17",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "TOSSE",
        especialidade: "PNEUMOLOGIA",
        enunciado: `(TEMFC 35 – 2024) João, 48 anos, vem em consulta de retorno mostrar os exames solicitados diante de uma queixa de tosse seca, falta de ar, perda de peso e cansaço iniciada há alguns meses e piorada desde que houve mudança de tempo com a entrada do inverno. João é tabagista (70 anos-maço), usa de bebidas alcoólicas nos finais de semana, trabalha como pedreiro e mora em uma pequena cidade no interior do estado Rio de Janeiro. O resultado dos exames demonstrou: Radiografia de Tórax: aumento dos espaços intercostais, retificação das cúpulas diafragmáticas bilateralmente, aumento do espaço retroesternal. Análise de Escarro: ausência de BAAR, TRM-Tb negativo. Espirometria: VEF1/CVF< 0,70% e VEF1< 80% do predito. Diante do caso e dos exames apresentados, assinale a alternativa com o diagnóstico mais provável:`,
        alternativas: [
            { id: "A", texto: `Tuberculose extrapulmonar.`, correta: false, resolucao: `O erro: Embora a perda de peso e o cansaço sejam comuns na tuberculose, os exames de escarro (BAAR e TRM-Tb) foram negativos, afastando a forma pulmonar. A espirometria com obstrução fixa e os achados de hiperinsuflação no Raio-X são específicos de doenças obstrutivas, não de tuberculose.` },
            { id: "B", texto: `Insuficiência Cardíaca.`, correta: false, resolucao: `O erro: A insuficiência cardíaca (IC) pode causar dispneia e cansaço, mas o Raio-X de tórax mostraria, tipicamente, cardiomegalia ou sinais de congestão venocapilar (como linhas B de Kerley), e não os sinais de pulmão enfisematoso/hiperinsuflado descritos. Além disso, a IC não causa a obstrução fixa no VEF1/CVF vista na espirometria.` },
            { id: "C", texto: `Doença Pulmonar Obstrutiva Crônica.`, correta: true, resolucao: `Por que está correta? Une o principal fator de risco (tabagismo pesado), os sinais radiológicos de aprisionamento aéreo e o critério espirométrico definidor (VEF1/CVF < 0,70). É a hipótese que explica todos os achados do caso, incluindo a piora sazonal.` },
            { id: "D", texto: `Pneumonia comunitária.`, correta: false, resolucao: `O erro: A pneumonia é um quadro agudo (dias), enquanto João apresenta sintomas há meses. No Raio-X, esperaríamos encontrar uma consolidação (opacidade) e não sinais de hiperinsuflação bilateral crônica.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O diagnóstico do Sr. João é fundamentado em três pilares clássicos da pneumologia:
<br>  • Fator de Risco e Clínica: A carga tabágica de 70 anos-maço é extremamente elevada (o risco aumenta significativamente acima de 20 anos-maço). A clínica de dispneia progressiva e tosse, que piora no inverno (período de maior exacerbação), é a apresentação típica. A perda de peso pode ocorrer em fenótipos de enfisema grave devido ao alto gasto energético respiratório.
<br>  • Radiografia de Tórax (Sinais de Hiperinsuflação): Aumento dos espaços intercostais e retificação diafragmática: Indicam que o pulmão está "aprisionando ar", perdendo a elasticidade natural. Aumento do espaço retroesternal: Visto no perfil, confirma o aumento do volume residual pulmonar.
<br>  • Espirometria (O Padrão Ouro): O diagnóstico de DPOC é confirmado pela presença de uma relação VEF1/CVF < 0,70 (pós-broncodilatador), que indica uma obstrução ao fluxo aéreo que não é totalmente reversível. O valor de VEF1 < 80% do predito, associado aos sintomas, ajuda a classificar o paciente conforme os estágios GOLD.
<br><br>📚 Embasamento Científico
<br>De acordo com o relatório GOLD (Global Initiative for Chronic Obstructive Lung Disease) 2025:
<br>  • Diagnóstico: Deve ser considerado em qualquer paciente com dispneia, tosse crônica ou produção de escarro e história de exposição a fatores de risco (tabagismo é o principal). A espirometria é mandatória para confirmar o diagnóstico.
<br>  • Radiologia: O Raio-X de tórax tem baixa sensibilidade para o diagnóstico precoce, mas em casos estabelecidos, é útil para identificar hiperinsuflação e excluir diagnósticos diferenciais (como câncer de pulmão ou IC).
<br>  • Classificação: O caso de João (VEF1 < 80%) seria classificado espirometricamente como uma obstrução de grau GOLD 2 (Moderada).`
    },
    {
        id: "Q18",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "ALERGIA ALIMENTAR",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Priscila traz seu bebê para consulta de puericultura de 2 anos, ao exame físico você constata assaduras e pergunta à mãe o padrão evacuatório. Ela conta que sua filha fica a maior parte do dia com a vizinha para que ela trabalhe e que a vizinha havia comentado sobre diarreia quando a criança toma iogurte e que tem dias que a criança fica com o abdome estufado e muito chorosa. A criança também apresenta placas na face e nas dobras dos pezinhos, sugestivas de uma dermatite atópica. O padrão alimentar é mingau de aveia pela manhã, almoço, mamadeira a tarde, e jantar a noite seguido de outra mamadeira, sempre preparada com leite de vaca em pó. Diante do quadro clínico acima, assinale a alternativa correta:`,
        alternativas: [
            { id: "A", texto: `As assaduras podem estar relacionadas a maus tratos, negligência da mãe, e uso de fraldas molhadas por tempo prolongado e o caso pode acender um alerta para acionar o conselho tutelar.`, correta: false, resolucao: `O erro: Embora a dermatite de fraldas possa ocorrer por higiene inadequada, no contexto desta criança, há uma explicação médica clara (diarreia recorrente por provável alergia). Acionar o conselho tutelar sem evidências de negligência real e com um quadro clínico sugestivo de patologia seria uma conduta precipitada e equivocada.` },
            { id: "B", texto: `As assaduras podem estar relacionadas ao padrão evacuatório diarreico, deve-se prescrever Albendazol 40mg/mL 10mL/dia por 5 dias.`, correta: false, resolucao: `O erro: O Albendazol é um antiparasitário. Embora parasitoses possam causar diarreia, elas não explicam as lesões de pele com padrão de dermatite atópica. Além disso, a dose mencionada (10mL/dia por 5 dias) não é o esquema padrão para as parasitoses comuns na infância.` },
            { id: "C", texto: `As lesões de pele podem corresponder a escabiose, não tendo relação com a alimentação, devendo ser prescritas a Ivermectina 6mg (oral) e a Permetrina 5% (tópica).`, correta: false, resolucao: `O erro: A escabiose (sarna) caracteriza-se por pápulas extremamente pruriginosas, sulcos na pele e acometimento de espaços interdigitais e punhos, não placas em face e dobras típicas de dermatite. Além disso, a escabiose não justificaria os sintomas gastrointestinais.` },
            { id: "D", texto: `As lesões de pele juntamente com a diarreia ácida sinalizam provável alergia à proteína do leite da vaca, devendo ser feita orientação para redução da ingesta de derivados do leite.`, correta: true, resolucao: `Por que está correta? Esta alternativa faz a correlação clínica correta entre os dois sistemas afetados (pele e trato gastrointestinal). A presença de dermatite atópica associada a sintomas digestivos após ingestão de lácteos é o "cartão de visitas" da APLV. A conduta inicial é a exclusão diagnóstica da proteína do leite de vaca da dieta para observar a remissão dos sintomas.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O diagnóstico da filha de Priscila baseia-se na correlação entre a dieta e os sintomas observados em dois sistemas diferentes:
<br>  • Manifestações Gastrointestinais: A ocorrência de diarreia especificamente após a ingestão de iogurte, associada a distensão abdominal ("abdome estufado") e irritabilidade, sugere uma reação adversa às proteínas do leite (como a caseína ou lactoalbumina). A diarreia ácida resultante da má absorção causa a irritação perianal (assaduras) observada no exame físico.
<br>  • Manifestações Cutâneas: A presença de placas sugestivas de dermatite atópica na face e dobras é uma associação clássica. A dermatite atópica faz parte da "marcha atópica" e, em crianças pequenas, pode ser desencadeada ou agravada por alérgenos alimentares, sendo a proteína do leite de vaca o principal culpado.
<br>  • Padrão Alimentar: A criança consome leite de vaca em pó em múltiplas refeições (mingau e mamadeiras), o que mantém o estímulo antigênico constante, explicando a persistência dos sintomas.
<br><br>📚 Embasamento Científico (Guia Prático de APLV - ASBAI/SBP)
<br>  • Definição: A APLV é uma reação imunológica às proteínas do leite de vaca. Pode ser mediada por IgE (reações imediatas), não-IgE (reações tardias, como diarreia e proctocolitis) ou mista (como a dermatite atópica).
<br>  • Dermatite de Fraldas: A diarreia ácida e frequente altera o pH da pele perianal e rompe a barreira cutânea, facilitando a inflamação e infecções secundárias.
<br>  • Tratamento: O padrão-ouro é a dieta de isenção total das proteínas do leite de vaca (e muitas vezes da soja, por reação cruzada). Em crianças não amamentadas, utilizam-se fórmulas especiais (extensamente hidrolisadas ou de aminoácidos).`
    },
    {
        id: "Q19",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "PARESTESIA",
        especialidade: "NEUROLOGIA",
        enunciado: `(TEMFC 35 – 2024) Carlos é uma pessoa de 45 anos, sem comorbidades, que trabalha em Home Office com carga horária de 8 a 9 horas por dia no computador, está mais intenso há um semestre pela carga de trabalho e estressores. Ele vem a consulta de rotina relatando que há 3 semanas vem sentindo uma dor tipo formigamento na região do antebraço e da mão em região medial, com alguns dias, quando mais intenso, irradiando até o terço médio do braço, sendo o lado acometido o direito apenas. No exame físico você realizou o Teste de Adson, ocorrendo uma redução da amplitude do pulso radial à direita durante o teste. Também percebeu uma contratura em escaleno médio, com um ponto que amplifica a dor do Carlos. Frente a clínica e aos achados, qual a melhor proposta dos planos terapêuticos?`,
        alternativas: [
            { id: "A", texto: `Carlos apresenta um quadro de síndrome do manguito rotador, com indicação de ultrassom de ombro direito.`, correta: false, resolucao: `O erro: O manguito rotador envolve os tendões do ombro (supraespinal, infraespinal, etc.). Embora Carlos possa ter dor no ombro pela postura, o teste de Adson positivo e o formigamento até a mão medial são sinais específicos de compressão neurovascular extra-articular (no pescoço/tórax), e não de lesão tendínea do ombro.` },
            { id: "B", texto: `Carlos apresenta um quadro de síndrome do manguito rotador, com indicação de fisioterapia e analgesia.`, correta: false, resolucao: `O erro: Assim como na alternativa A, o diagnóstico está incorreto. O quadro é de compressão do plexo braquial/artéria subclávia, não uma tendinopatia do ombro.` },
            { id: "C", texto: `Carlos apresenta um quadro de desfiladeiro torácico, com indicação de fisioterapia e analgesia.`, correta: true, resolucao: `Por que está correta? O diagnóstico clínico está bem fundamentado pelo teste de Adson e pela palpação dos escalenos. Na ausência de déficits neurológicos graves ou evidência de isquemia aguda, o tratamento inicial é sempre conservador. A fisioterapia é essencial para alongar os escalenos, corrigir a postura e liberar o espaço do desfiladeiro, enquanto a analgesia auxilia no controle dos sintomas durante o processo.` },
            { id: "D", texto: `Carlos apresenta um quadro de desfiladeiro torácico, com indicação de ultrassom de cervical direita.`, correta: false, resolucao: `O erro: Embora o diagnóstico esteja correto, o ultrassom cervical não é o plano terapêutico e, na maioria das vezes, não é o exame de escolha inicial para SDT neurogênica funcional. O diagnóstico é predominantemente clínico e o foco imediato deve ser o tratamento reabilitador.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico deve integrar a queixa neurológica (formigamento) com o achado vascular do exame físico:
<br>  • A Patologia: A Síndrome do Desfiladeiro Torácico ocorre pela compressão do feixe neurovascular (plexo braquial e vasos subclávios) na sua passagem do pescoço para a axila.
<br>  • O Triângulo Interescalênico: Carlos apresenta uma contratura no músculo escaleno médio. O desfiladeiro é delimitado pelos escalenos anterior e médio. Quando esses músculos estão tensos ou hipertrofiados (comum em má postura ao computador), eles "estrangulam" as estruturas que passam entre eles.
<br>  • Teste de Adson: É o teste padrão para avaliar o desfiladeiro torácico. A redução do pulso radial durante a manobra (extensão e rotação do pescoço para o lado afetado acompanhada de inspiração profunda) indica compressão da artéria subclávia.
<br>  • Sintomas Mediais: O formigamento na região medial da mão e antebraço sugere o acometimento das raízes inferiores do plexo braquial (C8-T1), que são as mais vulneráveis à compressão nessa região.
<br><br>📚 Revisão Técnica para o seu Estudo
<br>  • Manobra de Adson: O objetivo é diminuir o espaço interescalênico e verificar se há compressão da artéria subclávia (pelo pulso) ou do plexo braquial (pela reprodução dos sintomas).
<br>  • Fatores de Risco: O trabalho prolongado em computador (Home Office) favorece a protusão cefálica (cabeça para frente), o que encurta e tensiona os músculos escalenos e o peitoral menor.
<br>  • Diagnóstico Diferencial: Deve-se diferenciar de radiculopatias cervicais (hérnia de disco) e síndrome do túnel do carpo. O teste de Adson positivo é a chave para localizar o problema no desfiladeiro.`
    },
    {
        id: "Q20",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "HÉRNIA UMBILICAL",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Jaqueline traz seu filho Henrique de 1 ano e 3 meses para consulta de acompanhamento (rotina/puericultura). A principal demanda da mãe é que há uma bolinha que apareceu na região umbilical quando ele estava resfriado, ocorrendo principalmente quando tossia muito. Ao exame físico, na inspeção não havia nenhuma alteração, mas a palpação era percebido um anel herniário menor que 1 cm de diâmetro na região da cicatriz umbilical. Frente ao caso, qual o plano de acompanhamento mais adequado?`,
        alternativas: [
            { id: "A", texto: `Encaminhar à cirurgia pediátrica para correção de hérnia umbilical.`, correta: false, resolucao: `O erro: A indicação cirúrgica imediata aos 15 meses para uma hérnia de < 1 cm é precoce. A cirurgia é reservada para casos onde não houve fechamento após os 4-5 anos, hérnias muito grandes (> 2 cm) com pouca chance de fechamento, ou se houver complicações (encarceramento), o que é raro nessa região.` },
            { id: "B", texto: `Seguir a evolução da hérnia umbilical até aproximadamente 2 anos de idade.`, correta: true, resolucao: `Por que está correta? A conduta expectante é o padrão-ouro. Seguir a evolução até os 2 anos permite observar se o anel está diminuindo. Muitas bancas de prova utilizam o marco de 2 anos como o primeiro ponto de reavaliação importante, embora na prática clínica se possa aguardar mais tempo antes da decisão cirúrgica.` },
            { id: "C", texto: `Sugerir o uso de um esparadrapo um enfaixamento quando a criança tossir muito.`, correta: false, resolucao: `O erro: Esta é uma prática antiga e contraindicada. O uso de faixas, moedas ou esparadrapos não auxilia no fechamento da hérnia e pode causar irritação na pele, dermatites e até infecções graves (onfalite).` },
            { id: "D", texto: `Solicitar um exame de imagem para confirmar o diagnóstico de hérnia umbilical.`, correta: false, resolucao: `O erro: O diagnóstico da hérnia umbilical é puramente clínico, baseado na inspeção e palpação do anel herniário. Exames de imagem (como ultrassonografia) são desnecessários e não mudam a conduta inicial.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O diagnóstico do Henrique é uma hérnia umbilical redutível. O raciocínio para o plano de acompanhamento baseia-se em três pontos fundamentais:
<br>  • História Natural: A grande maioria das hérnias umbilicais na infância fecha-se espontaneamente. O fechamento ocorre devido ao fortalecimento e aproximação dos músculos retos abdominais à medida que a criança cresce e se torna mais ativa.
<br>  • Tamanho do Anel Herniário: Henrique apresenta um anel herniário menor que 1 cm. Hérnias com anéis menores que 1,5 cm a 2,0 cm têm uma probabilidade muito alta de resolução espontânea sem qualquer intervenção.
<br>  • Idade do Paciente: Com 1 ano e 3 meses, Henrique ainda está em uma fase de pleno desenvolvimento da parede abdominal. As diretrizes pediátricas recomendam a observação clínica, já que a maior parte das hérnias fecha até os 2 anos de idade, podendo-se aguardar até os 4 ou 5 anos antes de considerar a cirurgia.
<br><br>📚 Embasamento Científico (Sociedade Brasileira de Pediatria / Cirurgia Pediátrica)
<br>De acordo com o consenso da Sociedade Brasileira de Pediatria (SBP) e da Associação Brasileira de Cirurgia Pediátrica (CIPE):
<br>Critérios para Cirurgia (Herniorrafia):
<br>  • Persistência da hérnia após os 4 ou 5 anos de idade.
<br>  • Anel herniário muito largo (geralmente > 2 cm) após os 2 anos de idade.
<br>  • Hérnias associadas a derivação ventriculoperitoneal (DVP).
<br>  • Sintomas de encarceramento ou estrangulamento (emergência).
<br>Prognóstico: Mais de 80% das hérnias umbilicais que medem menos de 1 cm no primeiro ano de vida fecharão espontaneamente.`
    },
    {
        id: "Q21",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "INSUFICIÊNCIA CARDÍACA",
        especialidade: "CARDIOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Elza é uma mulher de 62 anos, portadora de hipertensão arterial sistêmica e doença arterial coronariana, Hoje vem em consulta de rotina (seguimento) na unidade de saúde da família com queixa de fadiga progressiva, dispneia aos esforços mínimos e edema nos tornozelos. Realizou um eletrocardiograma de repouso na unidade e tem uma alteração sugestiva de sobrecarga de ventrículo esquerdo. Qual das alternativas a seguir descreve de forma mais adequada uma estratégia terapêutica recomendada para Elza?`,
        alternativas: [
            { id: "A", texto: `O uso de digitálicos é a primeira linha de tratamento para dona Elza, pois melhoram a mortalidade e a qualidade de vida.`, correta: false, resolucao: `Por que está errada? A digoxina não é mais droga de primeira linha. Ela é reservada para controle de sintomas em pacientes que permanecem sintomáticos apesar da terapia tripla/quádrupla otimizada ou para controle de frequência na Fibrilação Atrial. Diferente dos pilares principais, os digitálicos não reduzem a mortalidade na IC.` },
            { id: "B", texto: `Os antagonistas da aldosterona devem ser evitados nesse caso devido ao risco aumentado de hiperpotassemia.`, correta: false, resolucao: `Por que está errada? Pelo contrário, a Espironolactona é uma recomendação de Classe I para pacientes como Elza. Embora o risco de hiperpotassemia exista (exigindo monitoramento de potássio e função renal), o benefício na redução de fibrose miocárdica e mortalidade supera os riscos na maioria dos pacientes.` },
            { id: "C", texto: `Ela nunca deverá utilizar betabloqueadores, uma vez que esses medicamentos diminuem a função contrátil do miocárdio e podem agravar a insuficiência cardíaca.`, correta: false, resolucao: `Por que está errada? Este é um conceito antigo. Embora os betabloqueadores tenham efeito inotrópico negativo agudo, o uso crônico é fundamental para proteger o coração contra o excesso de catecolaminas, reduzir o remodelamento cardíaco e diminuir drasticamente a mortalidade. Eles devem ser iniciados quando a paciente estiver euvolêmica (sem edema agudo).` },
            { id: "D", texto: `A combinação de inibidores da neprilisina e bloqueadores dos receptores de angiotensina (ARNI) é uma opção de tratamento para Elza, pois reduz a mortalidade e hospitalizações.`, correta: true, resolucao: `Por que está correta? A alternativa reflete a evidência mais robusta da cardiologia atual (estudo PARADIGM-HF). Os ARNI (Sacubitril/Valsartana) atuam inibindo a degradação dos peptídeos natriuréticos (via neprilisina) e bloqueando o sistema renina-angiotensina. A DBHA 2025 cita essa combinação como preferencial em hipertensos com insuficiência cardíaca sintomática.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O tratamento moderno da ICFER baseia-se nos "quatro pilares" que demonstraram redução de mortalidade e hospitalização. A estratégia terapêutica deve focar no bloqueio neuro-hormonal.
<br>Os Quatro Pilares:
<br>  • Inibidores da Neprilisina e do Receptor de Angiotensina (ARNI): Sacubitril/Valsartana.
<br>  • Betabloqueadores: (Carvedilol, Succinato de Metoprolol ou Bisoprolol).
<br>  • Antagonistas do Receptor de Mineralocorticoide: (Espironolactona).
<br>  • Inibidores da SGLT2: (Dapagliflozina ou Empagliflozina).
<br>Transição para ARNI: A substituição de um IECA (como Enalapril) ou BRA por um ARNI (Sacubitril/Valsartana) é recomendada pela DBHA 2025 e pelas diretrizes de IC, pois essa classe mostrou superioridade em reduzir mortes cardiovasculares em comparação com a terapia isolada.
<br><br>📚 Embasamento Científico (DBHA 2025)
<br>De acordo com a diretriz que você enviou:
<br>  • Indicação de ARNI: É recomendada para pacientes com ICFER para reduzir o risco de morte cardiovascular e hospitalização.
<br>  • Comorbidade Coração-Rim: Em pacientes com hipertensão e cardiopatia isquêmica (como Elza, que tem DAC), o controle pressórico rigoroso (meta < 130/80 mmHg) é crucial para prevenir a progressão da disfunção ventricular.`
    },
    {
        id: "Q22",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "RASTREAMENTO",
        especialidade: "MEDICINA PREVENTIVA",
        enunciado: `(TEMFC 35 – 2024) Regina, mulher cisgenero, preta, 34 anos, comparece à Unidade Básica de Saúde para uma consulta de rotina com a médica de família e comunidade de sua área após busca ativa de Lucia, agente comunitária de saúde, pois é nova no bairro e não fazia acompanhamento anteriormente. Durante a anamnese, ela informa que nunca realizou o exame de Papanicolau e, quando questionada, diz não ter informações sobre o HPV e seu papel no desenvolvimento do câncer de colo de útero. Ela relata também que possui três filhas adolescentes, que nunca foram vacinadas contra o HPV. A equipe de saúde aproveita a consulta para orientá-la sobre a importância do rastreamento regular, da vacinação e do acompanhamento de possíveis lesões precursoras, explicando as ações realizadas na Atenção Primária. Considerando-se o papel da Atenção Primária à Saúde na prevenção do câncer de colo de útero e a situação de Regina, qual das alternativas descreve corretamente uma medida essencial que deve ser adotada neste nível de atenção?`,
        alternativas: [
            { id: "A", texto: `A equipe deve orientar Regina sobre a importância de iniciar o rastreamento com o exame de Papanicolau para detectar possíveis lesões precursoras para mulheres de 25 a 64 anos, a cada 3 anos, após dois exames anuais consecutivos negativos. Orientar sobre a vacinação contra o HPV para suas filhas e oferecer educação em saúde para esclarecer a relação entre HPV e câncer de colo de útero.`, correta: true, resolucao: `Por que está correta? Esta alternativa reflete exatamente o protocolo do Ministério da Saúde: faixa etária correta (25-64 anos), periodicidade correta (trienal após dois negativos anuais), importância da vacinação para as filhas e o papel da educação em saúde na APS.` },
            { id: "B", texto: `O câncer de colo uterino é passível de prevenção secundária (rastreamento), e não é passível de prevenção primária (redução de alguns fatores de risco), já que esse tumor é causado pelo papilomavírus humano (HPV) e têm grande probabilidade de progredir para neoplasia intraepitelial cervical (NIC).`, correta: false, resolucao: `O erro: O câncer de colo de útero é passível de prevenção primária através da vacinação contra o HPV, do uso de preservativos e da cessação do tabagismo (fator de risco importante).` },
            { id: "C", texto: `A causa primária das lesões precursoras e do câncer do colo uterino é a infecção persistente ou crônica por um ou mais tipos de HPV “de alto risco” (ou oncogênicos), sendo os subtipos 6 e 11 mais comuns dentre os oncogênicos.`, correta: false, resolucao: `O erro: Os subtipos 6 e 11 são considerados de baixo risco e estão associados a verrugas genitais (condilomas). Os subtipos de alto risco (oncogênicos) mais comuns e responsáveis pela maioria dos casos de câncer são o 16 e o 18.` },
            { id: "D", texto: `O prognóstico do câncer de colo uterino depende da extensão da doença no momento do diagnóstico, estando sua mortalidade fortemente associada a mulheres acima de 25 anos e menores que 64 anos, com alta taxa de letalidade nesta faixa etária.`, correta: false, resolucao: `O erro: Embora a incidência seja alta nessa faixa (daí o rastreamento), a mortalidade por câncer de colo de útero no Brasil ainda é alta em mulheres que nunca rastrearam ou que são diagnosticadas em estágios avançados, muitas vezes fora dessa faixa etária ou no limite superior dela devido ao efeito acumulado da infecção persistente.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para o caso de Regina deve integrar as ações de prevenção primária (vacinação) e secundária (rastreamento citopatológico):
<br>  • Público-Alvo do Rastreamento: A diretriz brasileira recomenda a realização do exame citopatológico (Papanicolau) para mulheres e pessoas com colo do útero na faixa etária de 25 a 64 anos que já tiveram atividade sexual. Regina, com 34 anos, está inserida nessa recomendação.
<br>  • Periodicidade: Os dois primeiros exames devem ser realizados com intervalo anual. Se ambos forem negativos, os próximos exames devem ser realizados a cada 3 anos. Como Regina nunca realizou o exame, ela deve iniciar o ciclo anual agora.
<br>  • Prevenção Primária (Vacina HPV): A vacina é a medida mais eficaz para prevenir a infecção pelos subtipos oncogênicos do HPV. No Brasil, o Programa Nacional de Imunizações (PNI) oferece a vacina quadrivalente para meninas e meninos de 9 a 14 anos. As filhas adolescentes de Regina devem ser encaminhadas para vacinação imediata.
<br>  • Educação em Saúde: Explicar a relação causal entre o HPV e o câncer é essencial para a adesão ao tratamento e às medidas preventivas, especialmente em populações com menor acesso prévio à informação.
<br>Embora a base do rastreio (citopatológico dos 25 aos 64 anos) se mantenha estável, as novas notas técnicas enfatizam a transição para os testes de biologia molecular (DNA-HPV) como rastreio primário em vez da citologia, devido à sua maior sensibilidade.
<br><br>📚 Resumo Técnico para o seu estudo
<br>  • Prevenção Primária: Vacina HPV (9-14 anos), uso de preservativos, controle do tabagismo.
<br>  • Prevenção Secundária: Rastreamento citopatológico (Papanicolau).
<br>  • Lesões Precursoras: O objetivo do rastreio é detectar a NIC (Neoplasia Intraepitelial Cervical) de alto grau antes que ela se torne invasora.`
    },
    {
        id: "Q23",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "FIBRILAÇÃO ATRIAL",
        especialidade: "CARDIOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Dona Joana, de 77 anos, é uma senhora que você acompanha há alguns anos e nos últimos meses as consultas foram bastante centradas na desorganização familiar que estava ocorrendo em sua casa e suas preocupações. Ela já teve um quadro de infarto agudo do miocárdio e tem um átrio direito aumentado em ecocardiograma de 2 anos atrás. Hoje ela vem em consulta em demanda espontânea com sensação de sufocamento, dispneia e palpitações, associado a um “aperto no peito”. Logo no acolhimento, foram realizados os sinais vitais e um eletrocardiograma de repouso. Todos os resultados vieram normais, exceto por uma frequência cardíaca de 160 bpm, com características de Fibrilação Atrial. Exame físico geral sem outras alterações significativas. Frente ao caso, assinale a alternativa que descreve a melhor condução clínica para o caso da dona Joana.`,
        alternativas: [
            { id: "A", texto: `A fibrilação atrial necessita de controle de frequência com digoxina e anticoagulante com heparina.`, correta: false, resolucao: `Porquê está errada? A digoxina tem um início de ação lento (pico de efeito em horas) e não é a droga de escolha para o controle rápido da frequência em situações de urgência. Embora a heparina possa ser usada na fase aguda hospitalar, a alternativa ignora a necessidade de monitorização e o contexto de instabilidade clínica.` },
            { id: "B", texto: `A fibrilação atrial necessita de controle de frequência com metoprolol e anticoagulante com varfarina.`, correta: false, resolucao: `Porquê está errada? Esta alternativa descreve um plano de tratamento crônico (betabloqueador + varfarina). Contudo, Dona Joana apresenta-se com 160 bpm e dor precordial; tratá-la apenas com medicação oral ambulatorial seria negligenciar o risco de um novo infarto ou edema agudo de pulmão.` },
            { id: "C", texto: `A fibrilação atrial necessita de controle de frequência e anticoagulação em nível hospitalar.`, correta: true, resolucao: `Porquê está correta? A presença de sintomas de insuficiência cardíaca (dispneia) e isquemia (aperto no peito) em uma idosa com FC de 160 bpm classifica o quadro como uma urgência/emergência cardiovascular. O nível hospitalar é obrigatório para estabilização hemodinâmica e início seguro da anticoagulação, conforme as recomendações da diretriz de 2025 para FA aguda sintomática/instável.` },
            { id: "D", texto: `A fibrilação atrial necessita de controle de frequência com metoprolol e antiplaquetário com ácido acetilsalicílico (AAS).`, correta: false, resolucao: `Porquê está errada? Esta é a "alternativa de erro clássico". A Diretriz de 2025 reforça que o AAS não deve ser utilizado para a prevenção de tromboembolismo na FA (Recomendação Classe III: Malefício), pois não previne AVC de forma eficaz e aumenta o risco de hemorragias graves.` }
        ],
        resolucaoGeral: `💡 Raciocínio Clínico e Análise do Caso
<br>O quadro da Dona Joana apresenta sinais de alerta ("red flags") que exigem uma conduta imediata em ambiente de urgência/emergência:
<br>  • Instabilidade e Gravidade: Joana apresenta uma frequência cardíaca de 160 bpm. Esse valor é crítico, pois acima de 150 bpm o tempo de enchimento diastólico é severamente reduzido, o que justifica a sensação de sufocamento e dispneia (sinais de IC aguda) e o aperto no peito (potencial isquemia miocárdica secundária à taquicardia em uma paciente com infarto prévio).
<br>  • Ambiente de Tratamento: Devido aos sintomas agudos de desconforto respiratório e precordialgia em uma paciente idosa e cardiopata, o controle da frequência ventricular e o início da anticoagulação devem ser feitos sob monitorização em nível hospitalar. Ela pode necessitar de medicação intravenosa ou até mesmo cardioversão elétrica.
<br><br>📚 Pilares do Tratamento (Diretriz Brasileira de Fibrilação Atrial - 2025 SBC/SOBRAC)
<br>De acordo com as atualizações mais recentes da Diretriz, o manejo crônico seguirá o protocolo ABC:
<br>  • A (Anticoagulação): Essencial para Joana. Calculamos o risco de AVC pelo Escore CHA₂DS₂-VASc (Idade 77 = 2 pts; Infarto prévio = 1 pt; Sexo Feminino = 1 pt. Total: 4 pontos). Pacientes com escore ≥ 3 para mulheres têm indicação Classe I de anticoagulação oral. Deve-se preferir os Anticoagulantes Orais Diretos (DOACs).
<br>  • B (Bom controle de sintomas): Focado no controle da frequência (objetivo inicial < 110 bpm) ou controle do ritmo.
<br>  • C (Comorbidades e Risco Cardiovascular): Joana já tem DAC (infarto prévio), o que exige controle rigoroso da pressão e lipídios.`
    },
    {
        id: "Q24",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "FIBROMIALGIA",
        especialidade: "REUMATOLOGIA",
        enunciado: `(TEMFC 35 – 2024) O tratamento da fibromialgia pode ser realizado na Atenção Primária à Saúde, e seu cuidado integral inclui a abordagem não farmacológica e farmacológica. As medidas não farmacológicas são fundamentais e devem ser reforçadas e implementadas durante os encontros clínicos de acordo com plano terapêutico compartilhado com pessoa. Qual das alternativas é inadequada como recomendação de medida não farmacológica para o tratamento da fibromialgia?`,
        alternativas: [
            { id: "A", texto: `Realizar Terapia Cognitivo Comportamental.`, correta: false, resolucao: `Por que é adequada? A TCC tem evidência robusta para ajudar o paciente a lidar com a dor crônica, reduzir a incapacidade funcional e melhorar o humor.` },
            { id: "B", texto: `Orientar higiene do sono.`, correta: false, resolucao: `Por que é adequada? Distúrbios do sono são onipresentes na fibromialgia. Sem tratar a qualidade do sono, dificilmente se obtém sucesso no controle da dor.` },
            { id: "C", texto: `Educar o paciente sobre fibromialgia.`, correta: false, resolucao: `Por que é adequada? É o primeiro passo de qualquer guia clínico. A educação reduz a ansiedade e capacita o paciente para o autocuidado.` },
            { id: "D", texto: `Exercício físico resistido, de alto impacto e alta intensidade até 2-3 vezes na semana.`, correta: true, resolucao: `Por que é inadequada? Embora o exercício resistido (fortalecimento) e aeróbico sejam recomendados, eles devem ser de intensidade leve a moderada e de baixo impacto, progredindo conforme a tolerância. Prescrever alta intensidade e alto impacto para um paciente com sensibilização central aumenta o risco de crises de dor intensa.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>  • O tratamento da fibromialgia é focado na redução da sensibilização central e na melhora da funcionalidade. As diretrizes nacionais e internacionais (como EULAR e a SBR) enfatizam que as medidas não farmacológicas devem ser a primeira linha de cuidado.
<br>  • Educação e Autocuidado: O paciente precisa entender que a dor é real, mas que não indica dano tecidual contínuo. Isso reduz a catastrofização e melhora a adesão.
<br>  • Exercício Físico: É a intervenção com maior nível de evidência. No entanto, o segredo é o gradualismo. Pacientes com fibromialgia possuem um limiar de dor reduzido; exercícios de alta intensidade no início do tratamento costumam causar exacerbação da dor ("flares"), levando ao abandono da terapia.
<br><br>📚 Pilares do Tratamento (EULAR / SBR)
<br>Ao montar o Plano Terapêutico Singular (PTS) na UBS, siga este fluxo:
<br>  • Etapa 1: Educação do paciente e orientações sobre higiene do sono e exercícios leves.
<br>  • Etapa 2: Avaliar necessidade de terapias psicológicas (como TCC) se houver transtornos de humor.
<br>  • Etapa 3: Tratamento farmacológico (Ciclobenzaprina, Amitriptilina, Pregabalina) apenas como adjuvante, nunca como terapia isolada.`
    },
    {
        id: "Q25",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "INFECÇÃO DO TRATO URINÁRIO",
        especialidade: "NEFROLOGIA",
        enunciado: `(TEMFC 35 – 2024) Mulher de 62 anos, última menstruação há 10 anos, procurou a UBS devido a disúria de início há 2 dias, sem outros sintomas. Relata uso contínuo de nitrofurantoína 100mg por dia há 9 meses, prescrito pelo serviço de ginecologia onde possui acompanhamento, após 3 episódios de cistite no ano anterior. “Este remédio deve ser fraco ou meu corpo se acostumou”. Interrompeu atividade sexual também há 9 meses. Qual a conduta mais adequada pelo/a médico/a de família e comunidade?`,
        alternativas: [
            { id: "A", texto: `Explorar o impacto da doença na vida sexual da paciente e prescrever estrogênio tópico vaginal que também tem ação comprovada na prevenção da recorrência da infecção urinária.`, correta: true, resolucao: `Por que está correta? Esta alternativa contempla a abordagem biopsicossocial (vida sexual) e a evidência clínica. O estrogênio tópico reverte a atrofia, normaliza o pH e a flora, reduzindo drasticamente a recorrência de cistites sem os riscos sistêmicos da reposição hormonal oral.` },
            { id: "B", texto: `Explicar o mecanismo de resistência bacteriana em contraposição à explicação do “remédio fraco” e substituir o fármaco profilático por norfloxacino ou ciprofloxacino que possuem perfil de resistência menor.`, correta: false, resolucao: `O erro: Substituir a profilaxia por quinolonas é desaconselhado. Elas devem ser reservadas para infecções graves ou pielonefrites devido ao alto risco de indução de resistência e efeitos colaterais graves. Além disso, não trata a causa base (atrofia).` },
            { id: "C", texto: `Devido ao grande potencial preventivo da mudança de hábitos, identificar e corrigir comportamentos que possam estar facilitando a infecção recorrente utilizando a habilidade do/a MFC em abordar mudança de hábitos.`, correta: false, resolucao: `O erro: Embora mudanças de hábito sejam orientações padrão, estudos mostram que, isoladamente, elas têm menor impacto na prevenção de ITUs na pós-menopausa do que a correção do hipoestrogenismo local.` },
            { id: "D", texto: `Solicitar urocultura e somente considerar positivo caso haja presença de contagem de colônias de bactérias > 100.000 UFC/ml. Caso contrário, investigar outras causas de disúria.`, correta: false, resolucao: `O erro: Em mulheres sintomáticas, contagens menores (como 10.000 ou 1.000 UFC/ml) já podem ser consideradas clinicamente significativas. O corte de 100.000 UFC/ml é mais rígido para bacteriúria assintomática.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O caso descreve uma paciente de 62 anos (pós-menopausa há 10 anos) com falha na profilaxia medicamentosa (Nitrofurantoína). O raciocínio clínico deve focar na causa base da recorrência:
<br>  • Hipoestrogenismo: Após a menopausa, a queda dos níveis de estrogênio leva à atrofia urogenital. Isso causa a diminuição dos lactobacilos vaginais e o aumento do pH vaginal, o que facilita a colonização da região por enterobactérias (como a E. coli).
<br>  • Eficácia do Estrogênio Tópico: Evidências robustas demonstram que o uso de estrogênio vaginal é altamente eficaz na prevenção de ITUs recorrentes em mulheres na pós-menopausa, pois restaura a microbiota protetora.
<br>  • Abordagem Centrada na Pessoa: A paciente interrompeu a vida sexual há 9 meses, possivelmente por dispareunia (dor na relação) decorrente da atrofia vaginal, o que reforça a necessidade de abordar o impacto na saúde sexual.`
    },
    {
        id: "Q26",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "EPILEPSIA",
        especialidade: "NEUROLOGIA",
        enunciado: `(TEMFC 35 – 2024) Paula, 31 anos, negra, G2P1A0, encontra-se no primeiro trimestre de gestação. Ela é portadora de epilepsia desde a infância, controlada com o uso regular de carbamazepina e valproato de sódio; não apresentando comorbidades ou complicações do quadro clínico principal. Ao iniciar o pré-natal na unidade de saúde da família, Lucas, seu médico de família e comunidade informou que iria avaliar a pertinência do uso das medicações antiepilépticas durante a gestação, trazendo-lhe a possibilidade de modificação do tratamento, caso fosse necessário. Foi-lhe esclarecido também que essa decisão seria compartilhada com o neurologista de referência oportunamente. Considerando-se a adoção de uma conduta baseada em evidências, qual deverá ser a conduta mais adequada pelo médico de família e comunidade?`,
        alternativas: [
            { id: "A", texto: `Suspender o uso da carbamazepina e do valproato de sódio, substituindo-os por lamotrigina, levetiracetam ou oxcarbazepina.`, correta: true, resolucao: `Por que está correta? Esta conduta visa migrar a paciente da politerapia de alto risco (com valproato) para fármacos de primeira linha na gestação. O benefício de remover o valproato e a carbamazepina em favor de lamotrigina ou levetiracetam é a conduta padrão baseada em evidências para reduzir riscos fetais.` },
            { id: "B", texto: `Suspender o valproato de sódio, mantendo a carbamazepina e associada à fenitoína ou fenobarbital.`, correta: false, resolucao: `O erro: O fenobarbital e a fenitoína também são conhecidamente teratogênicos e estão associados a riscos cognitivos e malformações. Substituir um fármaco ruim por outro perigoso não é adequado.` },
            { id: "C", texto: `Substituir a carbamazepina pela oxcarbazepina, mantendo o valproato de sódio com dose diária maior que 1500 mg/dia.`, correta: false, resolucao: `O erro: Manter o valproato é o maior erro terapêutico neste cenário. Além disso, doses acima de 700-1000 mg/dia aumentam exponencialmente o risco de malformações.` },
            { id: "D", texto: `Manter a carbamazepina e substituir o valproato de sódio pela lamotrigina associada à fenitoína ou fenobarbital.`, correta: false, resolucao: `O erro: Novamente, a introdução de fenobarbital ou fenitoína é contraindicada pelo perfil de segurança. O objetivo deve ser a monoterapia com a menor dose eficaz de um fármaco seguro.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O manejo da Paula deve ser guiado pela segurança fetal, uma vez que ela já está no primeiro trimestre, período crítico da organogênese.
<br>  • O Problema do Valproato: O Valproato de Sódio é o fármaco antiepiléptico (FAE) com maior potencial teratogênico conhecido. Ele está associado a altas taxas de malformações congênitas (defeitos do tubo neural) e a prejuízos no desenvolvimento cognitivo (redução de QI). As diretrizes modernas recomendam evitar o valproato em qualquer mulher em idade fértil.
<br>  • O Problema da Politerapia: Paula está em uso de dois fármacos. O risco de malformações aumenta de forma sinérgica na politerapia, sendo a combinação que inclui o valproato a de maior risco.
<br>  • Escolha de Fármacos Mais Seguros: Registros de gravidez (como o EURAP) indicam que a Lamotrigina e o Levetiracetam são as opções com as menores taxas de malformação. A oxcarbazepina também apresenta um perfil de segurança superior.
<br>  • Dica para a prática: Toda gestante em uso de anticonvulsivantes deve receber suplementação de Ácido Fólico (5mg/dia), idealmente iniciada antes da concepção.`
    },
    {
        id: "Q27",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "SÍNDROMES GERIÁTRICAS",
        especialidade: "GERIATRIA",
        enunciado: `(TEMFC 35 – 2024) Maria de Lourdes, 80 anos, vem à consulta com sua médica de família e comunidade queixando-se de tonturas ao ficar de pé e dificuldade para caminhar. Por causa disso, relata que apresentou dois episódios de queda em casa nos últimos seis meses, o que a restringiu de sair de casa. É moradora de uma região de favela, precisando subir vários lances de escada para chegar em sua casa, que é pequena e mal iluminada. Fica sozinha durante a maior parte do tempo, pois seus filhos trabalham e ela é viúva há cinco anos. É portadora de diabetes melito, hipertensão arterial, hipotireoidismo, obesidade e depressão. Ex-tabagista. Faz uso de metformina, insulina NPH, hidroclorotiazida, losartana, anlodipino, levotiroxina, fluoxetina, clonazepam e omeprazol. Ao exame físico, apresenta marcha lenta em pequenos passos. Quando fica de pé, com olhos fechados, se desequilibra. Percebe-se crepitação dos joelhos à movimentação e reflexos aquileus abolidos. Pressão arterial, sentada, de 140x80 mmHg, e em pé, após 3 minutos, de 100x70 mmHg. <br><br> Julgue as proposições e marque qual alternativa apresenta as condutas mais adequadas para o manejo deste caso.

<br><br>I. Controle da hipotensão ortostática, com orientação de medidas comportamentais e desprescrição ou revisão da posologia dos medicamentos potencialmente hipotensores prescritos.
<br>II. Suspensão do uso da insulina e das medicações psicotrópicas, optando-se pela prescrição de dois antidiabéticos orais e fitoterápicos, uma vez que se trata de pessoa idosa octogenária.
<br>III. Indicação de melhorias no ambiente domiciliar, intervindo-se sobre a iluminação da casa e removendo-se obstáculos internos que podem dificultar a deambulação ou causar quedas.
<br>IV. Controle do diabetes melito, hipertensão arterial, hipotireoidismo e obesidade, comorbidades que em conjunto contribuem para agravar o quadro de desequilíbrio e tontura.`,
        alternativas: [
            { id: "A", texto: `Apenas as afirmativas I, II e III estão corretas.`, correta: false, resolucao: `Incorreta. A afirmativa II está errada pois a suspensão da insulina sem avaliar a HbA1c e a substituição de psicotrópicos por fitoterápicos não possuem respaldo científico para depressão estabelecida em idosos frágeis.` },
            { id: "B", texto: `Apenas as afirmativas I, II e IV estão corretas.`, correta: false, resolucao: `Incorreta. Mesma justificativa acima (a II está errada).` },
            { id: "C", texto: `Apenas as afirmativas II, III e IV estão corretas.`, correta: false, resolucao: `Incorreta. A afirmativa I (desprescrição e revisão da hipotensão ortostática) é essencial e verdadeira, enquanto a II é falsa.` },
            { id: "D", texto: `Apenas as afirmativas I, III e IV estão corretas.`, correta: true, resolucao: `Correta. A proposição I ataca a iatrogenia e a hipotensão, a III ataca os riscos extrínsecos do ambiente e a IV foca no controle das doenças de base que pioram a propriocepção.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O caso da Dona Maria de Lourdes (80 anos) é complexo e exige uma visão multidimensional, integrando clínica, farmacologia e ambiente.
<br>  • Hipotensão Ortostática: O exame físico é definitivo. Ao levantar, a PA sistólica cai de 140 para 100 mmHg (queda de 40 mmHg). O critério para hipotensão ortostática é uma queda ≥ 20 mmHg na sistólica ou ≥ 10 mmHg na diastólica após 3 minutos de pé. Isso explica a tontura e é um fator de risco direto para quedas.
<br>  • Polifarmácia e Iatrogenia: Ela usa 9 medicamentos. O clonazepam (benzodiazepínico) aumenta o risco de quedas por sedação e ataxia. Diuréticos (hidroclorotiazida) e outros anti-hipertensivos contribuem para a hipotensão ortostática. A fluoxetina pode causar hiponatremia e tontura em idosos.
<br>  • Fatores Extrínsecos e Intrínsecos:
<br>      • Extrínsecos: Casa mal iluminada e escadas (ambiente de risco, afirmativa III correta).
<br>      • Intrínsecos: Diabetes (provável neuropatia periférica — Romberg instável e reflexos abolidos), obesidade e osteoartrite (crepitação nos joelhos), o que valida a afirmativa IV. A iatrogenia valida a afirmativa I.`
    },
    {
        id: "Q28",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DOR OSTEOARTICULAR",
        especialidade: "REUMATOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Maria, 45 anos, trabalha como diarista e é tabagista. Procurou atendimento para relatar um quadro de dores articulares já há cerca de dois meses. Na anamnese, apresenta uma poliartralgia simétrica nas mãos e pés associada a rigidez articular que melhora ao longo do dia e piora em repouso chegando a durar mais de uma hora pela manhã. Ao exame, foi possível perceber um empastamento das articulações metacarpofalangeanas e interfalangeanas proximais associada a dor. Diante do caso relatado, qual a conduta mais adequada?`,
        alternativas: [
            { id: "A", texto: `Prescrever corticoides sistêmicos em dose de 20 mg ao dia e programar acompanhamento clínico com retorno após seis meses.`, correta: false, resolucao: `O erro: O tempo de retorno é absurdo. Um paciente com suspeita de AR deve ser avaliado e iniciado em medicamentos modificadores do curso da doença (como Metotrexato) o mais rápido possível. Seis meses é tempo suficiente para ocorrer erosão óssea permanente.` },
            { id: "B", texto: `Solicitar exames laboratoriais como hemograma, ácido úrico, função hepática e renal, fator reumatoide, PCR, VHS e anti-CCP, além de radiografia das articulações afetadas.`, correta: true, resolucao: `Por que está correta? Esta é a conduta padrão para investigação de poliartrite. Os marcadores (VHS e PCR) avaliam a inflamação; o Fator Reumatoide e o anti-CCP auxiliam no diagnóstico; o hemograma e as funções renal/hepática servem como base para a escolha segura do tratamento futuro. A radiografia é essencial para buscar erosões.` },
            { id: "C", texto: `Aconselhar repouso das articulações afetadas, utilizar talas de imobilização e recomendar afastamento temporário do trabalho, visando diminuir a sobrecarga articular.`, correta: false, resolucao: `O erro: Na dor inflamatória, o repouso prolongado piora a rigidez e a dor (fenômeno de gel). O movimento leve e a fisioterapia são preferíveis. Imobilizar articulações inflamadas pode levar a atrofias.` },
            { id: "D", texto: `Solicitar avaliação de ácido úrico, anticorpos antinucleares (ANA) e cultura do líquido sinovial para investigação diagnóstica.`, correta: false, resolucao: `O erro: O ANA (FAN) é triagem para Lúpus, mas a clínica de Maria é muito mais específica para AR. A cultura do líquido sinovial é indicada para suspeita de artrite séptica (aguda, com febre), o que não condiz com poliartrite simétrica de dois meses.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O raciocínio clínico para o caso da Maria baseia-se na identificação do padrão de dor e no tempo de evolução:
<br>  • Padrão Inflamatório: A dor que piora com o repouso e apresenta rigidez matinal prolongada (> 1 hora) é o marcador de dor inflamatória. Isso a diferencia da osteoartrite (desgaste), onde a rigidez costuma durar menos de 30 minutos e melhora com o repouso.
<br>  • Distribuição e Simetria: O acometimento simétrico de pequenas articulações (metacarpofalangeanas e interfalangeanas proximais) das mãos e pés é a apresentação "assinatura" da Artrite Reumatoide.
<br>  • Cronicidade: Os sintomas duram há cerca de dois meses (> 6 semanas), preenchendo o critério de tempo para as doenças reumáticas crônicas.
<br>  • Exame Físico: O "empastamento" descrito é a tradução clínica da sinovite (inflamação da membrana sinovial), que confere uma consistência de "borracha" ou "esponja" à palpação das articulações.
<br><br>📚 Embasamento Científico (Protocolos de Reumatologia)
<br>  • Objetivo do Tratamento: "Treat to Target" (tratar visando a remissão ou baixa atividade).
<br>  • Diagnóstico Precoce: A janela de oportunidade terapêutica ocorre nos primeiros meses. O atraso no diagnóstico está ligado à incapacidade funcional.
<br>  • Fatores de Risco: O tabagismo (presente no caso da Maria) é o principal fator de risco ambiental, pois aumenta a citrulinização de proteínas, elevando a chance de positividade para o anti-CCP e gravidade da doença.`
    },
    {
        id: "Q29",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "AMAMENTAÇÃO",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Dra Renata divide seu horário de trabalho como Médica de Família entre atividades assistenciais, apoio à gerência da unidade e preceptoria de estudantes em diversas fases do curso de medicina. Hoje um dos estudantes, atualmente no internato, está discutindo o caso de uma paciente com duas importantes hérnias discais lombares significativas, que se encontra em crise aguda agravada pela rotina com sua filha de apenas dois meses. A preocupação do estudante é que a paciente está amamentando e não respondeu clinicamente à terapêutica inicial com paracetamol, AINEs e medidas não farmacológicas. Ele comenta que, conforme a escada analgésica da dor proposta pela OMS, o próximo passo seria considerar a prescrição de um opioide, mas tem dúvidas devido orientações sobre o uso restrito desses medicamentos durante a amamentação. <br><br>Qual seria a melhor orientação que Dra Renata pode oferecer ao acadêmico nesse momento?`,
        alternativas: [
            { id: "A", texto: `Explicar ao estudante que o uso de opioides é contraindicação absoluta na amamentação e sugerir que mantenha os analgésicos intensificando as medidas não farmacológicas.`, correta: false, resolucao: `O erro: Opioides não são contraindicações absolutas. Em casos de dor aguda intensa (como uma crise de hérnia discal), o uso criterioso por curto período é permitido, desde que escolhido o fármaco com melhor perfil de segurança.` },
            { id: "B", texto: `Orientar ao estudante que prescreva codeína ou tramadol e realize o desmame da criança, oferecendo fórmulas infantis de 0 a 6 meses.`, correta: false, resolucao: `O erro: O desmame nunca deve ser a primeira opção para tratar uma condição aguda materna que possui alternativas compatíveis com a amamentação. Além disso, a codeína e o tramadol carregam risco metabólico perigoso (mães metabolizadoras ultrarrápidas).` },
            { id: "C", texto: `Informar ao estudante que morfina pode ser prescrita com cautela, pois sua excreção no leite materno é baixa desde que sua dose seja controlada e o bebê seja observado.`, correta: true, resolucao: `Por que está correta? A morfina é classificada como "Risco Muito Baixo" no portal e-lactancia.org. Sua passagem para o leite é pequena e o risco para o bebê é minimizado se a dose for controlada e houver observação de sinais de sedação no lactente.` },
            { id: "D", texto: `Instruir o estudante a prosseguir para analgésicos opioides como codeína, sem restrições, já que esse é o único opioide que se provou não ser excretado no leite materno.`, correta: false, resolucao: `O erro: Afirmar que a codeína não é excretada no leite é um erro técnico grave. Ela é excretada e, devido à variabilidade genética da mãe, pode gerar níveis altíssimos de morfina no bebê.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>  • O desafio clínico é progredir na Escada Analgésica da OMS (de analgésicos simples/AINEs para opioides) sem comprometer a segurança do lactente de dois meses.
<br>  • O Perigo da Codeína (Dica de Ouro): Antigamente, a codeína era a primeira escolha. No entanto, hoje sabemos que a codeína é um pró-fármaco convertido em morfina pelo fígado. Algumas mulheres são metabolizadoras ultrarrápidas, produzindo níveis perigosamente altos de morfina no leite, o que pode causar depressão respiratória grave e óbito no bebê. Por isso, a codeína é evitada na amamentação.
<br>  • A Segurança da Morfina: Paradoxalmente, a morfina é considerada mais segura que a codeína para lactantes. Isso ocorre porque sua farmacocinética é mais previsível e sua biodisponibilidade oral no lactente é muito baixa. O sistema digestivo do bebê absorve muito pouco do que passa para o leite.
<br><br>📚 Embasamento Científico (Ministério da Saúde / e-lactancia)
<br>  • Critérios de Escolha: Deve-se preferir opioides com meia-vida curta e evitar o uso prolongado.
<br>  • Monitoramento do Bebê: Independentemente do opioide, a mãe deve ser orientada a observar no bebê: sonolência excessiva, dificuldade de sucção, relaxamento muscular excessivo ou pausas respiratórias.`
    },
    {
        id: "Q30",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "TRANSTORNO NEUROBIOLÓGICO",
        especialidade: "NEUROLOGIA",
        enunciado: `(TEMFC 35 – 2024) Criança de 8 anos em consulta para renovação de receita de metilfenidato. Diagnóstico recente de Transtorno de déficit de atenção e hiperatividade, com apresentação predominante desatenta. Devido a dificuldades financeiras, a família procurou a UBS para continuidade do cuidado. O uso foi iniciado há 3 meses com relato de melhora importante do desempenho escolar. A medicação não é tomada aos finais de semana. A criança está no ano escolar adequado para idade, em escola nova “mais exigente” desde que a família mudou para o bairro. Diante desta situação, qual a conduta do/a médico/a de família e comunidade?`,
        alternativas: [
            { id: "A", texto: `Pesquisar os efeitos colaterais da medicação entre eles ganho de peso, sonolência e cefaleia e estimular atividades extraescolares.`, correta: false, resolucao: `O erro: O metilfenidato é um estimulante. Seus efeitos colaterais mais comuns são perda de apetite/peso (anorexia), insônia e taquicardia. A alternativa descreve efeitos opostos (ganho de peso e sonolência).` },
            { id: "B", texto: `Acionar a equipe multiprofissional, explorar o contexto da criança e sua família e reavaliar o diagnóstico para confirmação ou diagnóstico diferencial.`, correta: true, resolucao: `Por que está correta? Esta conduta respeita o princípio da Prevenção Quaternária. Explorar se a "desatenção" não é, na verdade, uma dificuldade de adaptação à nova escola exigente é o papel fundamental do MFC antes de assumir a prescrição crônica.` },
            { id: "C", texto: `Encaminhar ao matriciamento de psiquiatria que deverá renovar a receita, mas orientar a tomada diária e regular da medicação.`, correta: false, resolucao: `O erro: As "férias medicamentosas" (não tomar nos finais de semana) são uma estratégia clínica válida e recomendada em muitos casos para mitigar efeitos colaterais como o atraso no crescimento e a perda de peso.` },
            { id: "D", texto: `Renovar a receita diante da melhora do comportamento que confirma o diagnóstico e encaminhar ao serviço especializado.`, correta: false, resolucao: `O erro: A melhora do comportamento com psicoestimulantes não serve como critério diagnóstico, pois estimulantes aumentam o foco mesmo em quem não tem TDAH. A renovação automática sem avaliação fere o cuidado integral.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
<br>O diagnóstico de TDAH é clínico e deve considerar o impacto dos sintomas em múltiplos ambientes. No caso desta criança, há "confundidores" importantes que precisam ser explorados:
<br>  • Mudança de Contexto: A criança mudou de bairro e está em uma escola "mais exigente" há pouco tempo. Dificuldades de adaptação escolar ou expectativas pedagógicas excessivas da nova instituição podem mimetizar sintomas de desatenção.
<br>  • O "Teste Terapêutico" Inexistente: O fato de a criança ter melhorado com o metilfenidato não confirma o diagnóstico. Estimulantes aumentam o foco e o desempenho acadêmico mesmo em pessoas que não possuem TDAH (o que explica o uso indevido por concurseiros).
<br>  • Abordagem Biopsicossocial: Na APS, antes de manter uma medicação controlada de longo prazo, é essencial envolver a equipe multiprofissional (psicólogo, assistente social, NASF) para entender a dinâmica familiar e escolar.
<br><br>📚 Prática Baseada em Evidências (TDAH na APS)
<br>  • Avaliação Longitudinal: O diagnóstico exige que os sintomas estejam presentes em pelo menos dois ambientes (ex: casa e escola) por mais de 6 meses.
<br>  • Diagnósticos Diferenciais: Deficiências sensoriais (audição/visão), distúrbios do sono, ansiedade, bullying ou inadequação da metodologia de ensino devem ser descartados.`
    },
{
        id: "Q31",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "ALTERAÇÕES GASTROINTESTINAIS",
        especialidade: "GERIATRIA",
        enunciado: `(TEMFC 33 – 2023) O Sr. Pedro, 82 anos, é portador de neoplasia de cólon com metástases hepáticas e vem apresentando quadro de astenia, distensão abdominal, evacuações líquidas em pequena quantidade, várias vezes ao dia, associado à inapetência e náuseas há uma semana, sem febre. Refere uso de codeína para controle da dor oncológica. Qual suspeita diagnóstica é provável neste caso?`,
        alternativas: [
            { id: "A", texto: `Gastroenterocolite bacteriana.`, correta: false, resolucao: `Porquê? Embora cause diarreia, a ausência de febre e o contexto de uso de opioides tornam esta hipótese menos provável. Além disso, a gastroenterite bacteriana costuma apresentar-se com dores abdominais em cólica mais agudas e um quadro de prostração mais súbito.` },
            { id: "B", texto: `Colite pseudomembranosa.`, correta: false, resolucao: `Porquê? Esta condição é causada pela toxina do Clostridioides difficile, geralmente após o uso de antibióticos de largo espetro. Cursa tipicamente com febre, leucocitose e diarreia profusa com odor característico, o que não condiz com a "pequena quantidade" e a ausência de febre do Sr. Pedro.` },
            { id: "C", texto: `Insuficiência pancreática.`, correta: false, resolucao: `Porquê? A insuficiência exócrina do pâncreas manifesta-se por esteatorreia (fezes volumosas, gordurosas e que flutuam), decorrente da má absorção de gorduras. Não costuma causar a distensão abdominal aguda e náuseas associadas ao padrão de "pequenas quantidades líquidas" visto na obstrução.` },
            { id: "D", texto: `Diarreia paradoxal.`, correta: true, resolucao: `Porquê? É a hipótese que melhor integra todos os dados: idade (82 anos), causa de base (neoplasia de cólon que já reduz o lúmen), fator farmacológico (codeína induzindo obstipação) e o padrão de evacuação (líquida por transbordamento).` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O quadro clínico do Sr. Pedro é um exemplo clássico de como a polifarmácia e a progressão de doenças crónicas podem criar sintomas confusos. A chave para este diagnóstico reside na combinação de três fatores: a patologia de base (cancro de cólon), a medicação (codeína) e a idade avançada.<br><br> &nbsp;• <strong>O Efeito dos Opioides:</strong> A codeína, tal como outros opioides, atua nos recetores MU do trato gastrointestinal, reduzindo drasticamente a motilidade e as secreções. Isto leva invariavelmente à obstipação. Num doente de 82 anos, o risco de formação de um fecaloma (massa fecal endurecida e impactada) é muito elevado.<br> &nbsp;• <strong>Mecanismo de Transbordamento:</strong> Quando ocorre uma impacção fecal no reto ou no cólon sigmoide, a massa endurecida obstrui a passagem das fezes normais. No entanto, as fezes líquidas das porções superiores do cólon e as secreções mucosas produzidas pela irritação da parede intestinal conseguem "contornar" essa massa sólida.<br> &nbsp;• <strong>Apresentação Paradoxal:</strong> O doente apresenta evacuações líquidas frequentes e em pequena quantidade (o que parece diarreia), mas o problema subjacente é uma obstipação grave. A distensão abdominal, as náuseas e a inapetência são sinais de suboclusão intestinal causada pelo fecaloma.<br><br>📚 <strong>Evidência e Conduta Clínica</strong><br>No manejo de doentes oncológicos em uso de opioides:<br> &nbsp;• <strong>Toque Retal:</strong> É o passo diagnóstico imediato e essencial. Se o fecaloma estiver ao alcance do dedo, o diagnóstico é confirmado e a desimpacção manual ou por clisteres deve ser iniciada.<br> &nbsp;• <strong>Regra de Ouro da Prescrição:</strong> Em cuidados paliativos, diz-se que "a mão que prescreve o opioide deve ser a mesma que prescreve o laxante". A profilaxia da obstipação é obrigatória.<br> &nbsp;• <strong>Risco de Loperamida:</strong> Tratar este quadro com antidiarreicos (como a loperamida) seria um erro grave, pois aumentaria a impacção e poderia levar a uma perfuração intestinal ou obstrução completa.`
    },
    {
        id: "Q32",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "DOR OSTEOARTICULAR",
        especialidade: "ORTOPEDIA",
        enunciado: `(TEMFC 33 – 2023) João Raimundo tem 54 anos, é trabalhador rural e é acompanhado pela Estratégia Saúde da Família. Portador de Artrite Reumatoide diagnosticada desde os 32 anos com bom controle dos sintomas, atualmente usando Metotrexato 2,5 mg - 6 comprimidos por semana, seguindo reposição de ácido fólico após dois dias, e Prednisona 5 mg por dia. Vem à consulta trazido por colegas de trabalho, com dor lombar de forte intensidade (escala numérica da dor classificada em 10) e fraqueza nas pernas, iniciada há cerca de uma hora, após carregar um caminhão com sacos de café. A dor irradia para os membros inferiores pela parte posterior das coxas. Diante deste relato, assinale a alternativa correta quanto aos sinais de alarme na dor lombar.`,
        alternativas: [
            { id: "A", texto: `O uso crônico de Metotrexato pode causar osteoporose e é sinal de alerta para gravidade em quadros de lombalgias.`, correta: false, resolucao: `Por que está errada? Embora o Metotrexato (MTX) seja um imunossupressor que exige cautela, ele não é o principal culpado pela osteoporose e risco de fratura em pacientes com Artrite Reumatoide; esse papel pertence ao corticoide. O MTX é sinal de alerta para risco de infecções.` },
            { id: "B", texto: `O paciente não estar repondo cálcio e vitamina D neste caso é sinal de alarme para gravidade da lombalgia.`, correta: false, resolucao: `Por que está errada? A falta de reposição é um fator de risco para o desenvolvimento de osteoporose, mas não é considerada um "sinal de alarme" (red flag) clínico do episódio agudo de dor que exija imagem imediata.` },
            { id: "C", texto: `A intensidade da dor, classificada como a pior dor na escala numérica da dor, é sinal de alarme para gravidade da lombalgia.`, correta: false, resolucao: `Por que está errada? Por mais contra-intuitivo que pareça, a intensidade da dor (mesmo 10/10) isoladamente não é um sinal de alarme para patologia grave. Muitas lombalgias mecânicas inespecíficas são extremamente dolorosas.` },
            { id: "D", texto: `O uso crônico de corticoides é sinal de alarme para gravidade em lombalgias.`, correta: true, resolucao: `Por que está correta? O uso de corticosteroides é um critério universal de "Sinal de Alarme" nas diretrizes. Ele alerta o médico para o risco de fratura por insuficiência vertebral, mesmo na ausência de traumas de grande impacto.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O caso do Sr. João Raimundo apresenta uma combinação clássica de fatores que levantam a suspeita de uma patologia grave subjacente, especificamente uma fratura vertebral por compressão.<br><br> &nbsp;• <strong>Mecanismo de Trauma:</strong> A dor iniciou subitamente após um esforço físico intenso (carregar sacos de café), o que é um gatilho comum para fraturas em ossos fragilizados.<br> &nbsp;• <strong>Sinal de Alarme (Red Flag):</strong> O uso crônico de Prednisona (mesmo em dose baixa como 5 mg) é um dos sinais de alerta mais importantes na avaliação da dor lombar. Os corticoides induzem a reabsorção óssea e inibem a formação de osso novo, levando à osteoporose secundária.<br> &nbsp;• <strong>Gravidade Clínica:</strong> Além da dor intensa, o paciente apresenta fraqueza nas pernas, o que indica um possível comprometimento neurológico associado à lesão vertebral (compressão radicular ou medular).<br><br>📚 <strong>Embasamento Científico (Sinais de Alerta)</strong><br>De acordo com os protocolos de manejo da dor lombar na Atenção Primária, a presença de sinais de alerta (uso de corticoide, trauma, idade avançada, déficits neurológicos) indica a necessidade de exames de imagem imediatos (Raio-X ou Ressonância).`
    },
    {
        id: "Q33",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "PLANEJAMENTO FAMILIAR",
        especialidade: "GINECOLOGIA E OBSTETRÍCIA",
        enunciado: `(TEMFC 33 – 2023) Sobre a inserção de DIU de cobre, assinale a alternativa que corretamente descreve contraindicações e pré-requisitos para a realização do procedimento na atenção primária à saúde em mulheres que optam pelo método.`,
        alternativas: [
            { id: "A", texto: `Ultrassonografia deve estar disponível para realização previamente à inserção, quando necessário, e sempre após a inserção para checagem de posicionamento do dispositivo.`, correta: false, resolucao: `Por que está errada? A OMS e o Ministério da Saúde afirmam que a ultrassonografia (USG) não é um pré-requisito. O posicionamento pode ser checado clinicamente através da visualização dos fios do DIU no colo uterino.` },
            { id: "B", texto: `Mulheres nulíparas podem optar pelo método, porém devem ser avaliadas com ultrassonografia transvaginal devido ao maior risco de perfuração uterina.`, correta: false, resolucao: `Por que está errada? Nuliparidade não é contraindicação e não exige USG rotineira. O risco de perfuração está associado à habilidade do profissional e à posição do útero, não ao fato de a mulher nunca ter parido.` },
            { id: "C", texto: `Os corrimentos contraindicam a inserção do dispositivo e devem ser tratados conforme etiologia. Pode-se adotar a prática de antibioticoterapia profilática a fim de prevenir doença inflamatória pélvica.`, correta: false, resolucao: `Por que está errada? Apenas a cervicite purulenta (infecção ativa) é contraindicação absoluta. Vaginose bacteriana ou candidíase não impedem a inserção, e o uso de antibióticos profiláticos não é recomendado para baixo risco.` },
            { id: "D", texto: `A anestesia com bloqueio paracervical com lidocaína é facultativa e o uso de analgésicos antes do procedimento não se mostrou útil na prevenção ou redução da dor associada ao procedimento.`, correta: true, resolucao: `Por que está correta? Reflete os consensos atuais da FEBRASGO. O bloqueio paracervical é opcional e a analgesia prévia demonstrou pouca eficácia na dor aguda do procedimento de inserção propriamente dito.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O manejo da inserção do DIU (Dispositivo Intrauterino) na Atenção Primária deve seguir protocolos baseados em evidências para garantir o acesso e desmistificar barreiras técnicas desnecessárias.<br><br> &nbsp;• <strong>Pré-requisitos e Exames:</strong> O principal pré-requisito é o exame físico ginecológico (inspeção e toque bimanual) para avaliar a posição, o tamanho e a mobilidade do útero. Exames de imagem não são mandatórios para pacientes com exame físico normal.<br> &nbsp;• <strong>Manejo da Dor:</strong> Evidências científicas demonstram que analgésicos comuns (como paracetamol ou dipirona) ou AINEs administrados 30-60 minutos antes da inserção não reduzem significativamente a dor durante a passagem do histerômetro ou do DIU, embora possam ajudar com as cólicas após o procedimento.<br> &nbsp;• <strong>Anestesia:</strong> O bloqueio paracervical com lidocaína pode ser oferecido, mas não é uma obrigatoriedade técnica para a realização do procedimento na APS.<br><br>📚 <strong>Critérios de Elegibilidade (OMS) - DIU de Cobre</strong><br> &nbsp;• <strong>Categoria 1 (Sem restrição):</strong> Nulíparas, fumantes, hipertensas, diabéticas, amamentando e mulheres com histórico de câncer de mama.<br> &nbsp;• <strong>Categoria 4 (Contraindicação absoluta):</strong> Gravidez, sepse puerperal imediata, sangramento vaginal de causa desconhecida, câncer de colo atual, e cervicite mucopurulenta.`
    },
    {
        id: "Q34",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "DOR PÉLVICA",
        especialidade: "GINECOLOGIA E OBSTETRÍCIA",
        enunciado: `(TEMFC 35 – 2024) Simone, 39 anos, procura atendimento devido a desejo de gravidez (G0P0A0). Relata uso de anticoncepcional oral combinado (AOC) desde os 22 anos para anticoncepção e também para controle de cólicas. Em todos os períodos em que suspendeu o uso, como o atual, surgiram dor cíclica (ciclos regulares) e dispareunia. O exame físico é inocente. Simone mostra-se muito apreensiva por temer infertilidade e acredita que não consegue conviver com as cólicas. Diante do desejo de gravidez, utilizando-se dos conhecimentos do método clínico centrado na pessoa, assinale a alternativa que descreve a melhor conduta profissional e a correta intervenção diagnóstica.`,
        alternativas: [
            { id: "A", texto: `Evitar qualquer tratamento hormonal, buscar manejo com medicações sintomáticas e solicitar ultrassonografia transvaginal.`, correta: true, resolucao: `Por que está correta? Respeita o desejo de gravidez (evitando hormônios contraceptivos), maneja a dor de forma não hormonal (sintomáticos) e inicia a investigação da causa da dor e da possível infertilidade (endometriose) pelo exame de imagem de escolha inicial.` },
            { id: "B", texto: `Prescrever AOC enquanto realiza a investigação com solicitação de laparoscopia diagnóstica.`, correta: false, resolucao: `O erro: Prescrever AOC impede a gravidez, que é o objetivo principal de Simone. Além disso, a laparoscopia diagnóstica não é mais o primeiro passo; deve-se tentar a ultrassonografia antes.` },
            { id: "C", texto: `Prescrever androgênico oral para tratamento da dor e solicitar ressonância magnética de pelve.`, correta: false, resolucao: `O erro: Androgênicos (como a gestrinona ou danazol) possuem efeito anovulatório ou interferem no ciclo, o que é contraproducente para quem deseja engravidar.` },
            { id: "D", texto: `Não prescrever AOC, buscar manejo com anti-inflamatórios não-esteroidais e solicitar exames hormonais (FSH, LH, Prolactina e TSH).`, correta: false, resolucao: `O erro: Embora os AINEs estejam corretos, os exames hormonais citados avaliam a reserva ovariana, mas não investigam a causa da dispareunia e da dor cíclica de Simone (endometriose), sendo a imagem pélvica mais prioritária.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O caso de Simone exige uma abordagem que equilibre a necessidade de controle da dor com o desejo imediato de concepção, utilizando os pilares do Método Clínico Centrado na Pessoa (MCCP).<br><br> &nbsp;• <strong>Suspeita Clínica (Endometriose):</strong> A tríade de Simone — dor cíclica (dismenorreia), dispareunia (dor na relação sexual) e melhora com o uso de Anticoncepcionais Orais Combinados (AOC) — é altamente sugestiva de endometriose. O exame físico "inocente" (normal) não exclui o diagnóstico em estágios iniciais.<br> &nbsp;• <strong>O Desejo de Gravidez e o MCCP:</strong> Para engravidar, o uso de AOC deve ser interrompido. O "terreno comum" aqui é aceitar que o tratamento da dor será feito com medicações sintomáticas (como AINEs ou analgésicos) durante as crises, permitindo a tentativa de concepção.<br> &nbsp;• <strong>Investigação Diagnóstica:</strong> A ultrassonografia transvaginal com preparo intestinal (mapeamento para endometriose) é o exame de primeira linha para detectar focos de endometriose profunda e endometriomas.<br><br>📚 <strong>Prática Centrada na Pessoa</strong><br>Aos 39 anos, a fertilidade declina, e a possibilidade de endometriose aumenta a complexidade. É fundamental validar a apreensão de Simone, explicando que a investigação anatômica direcionará o tratamento.`
    },
    {
        id: "Q35",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "NUTRIÇÃO INFANTIL",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 33 – 2023) Ana Maria voltou a residir no território da unidade básica de saúde após passar os primeiros dois meses após o parto a termo de Enzo na casa da Dona Júlia (avó da criança). Neste período teve dificuldades com a amamentação e hoje a criança de dois meses e meio é totalmente alimentada por mamadeira. Assinale a alternativa que descreve a alimentação adequada para a criança.`,
        alternativas: [
            { id: "A", texto: `Diante de dificuldades financeiras graves, pode ser oferecido leite de vaca fluido diluído em água (3:1) acrescido de óleo vegetal e farinha.`, correta: false, resolucao: `Por que está errada? Embora essa recomendação tenha existido em manuais antigos para famílias em pobreza extrema, o leite de vaca integral antes dos 4-6 meses não é a escolha adequada, pois associa-se a anemia ferropriva e sobrecarga de solutos para o rim do bebê.` },
            { id: "B", texto: `A fórmula láctea é uma opção acessível e contém leite de vaca, componentes não-lácteos e aditivos que tornam esse um alimento adequado.`, correta: false, resolucao: `O erro: O termo técnico correto é Fórmula Infantil. Além disso, o termo "acessível" é incorreto, visto que no Brasil as fórmulas infantis são significativamente mais caras que o leite comum, sendo uma barreira para muitas famílias.` },
            { id: "C", texto: `A água não precisa ser ofertada, pois se o número e volume de mamadas estiver adequado a hidratação estará garantida.`, correta: false, resolucao: `O erro: Bebês alimentados com fórmula infantil ou leite de vaca devem receber água nos intervalos das mamadas, devido à maior carga de solutos (proteínas e sais minerais) desses leites em comparação ao leite materno.` },
            { id: "D", texto: `A fórmula infantil é a melhor alternativa, pois se trata de leite de vaca modificado e deve ser diluído seguindo estritamente as recomendações do fabricante.`, correta: true, resolucao: `Por que está correta? A fórmula infantil é o substituto de escolha porque tenta mimetizar a composição do leite humano. A ênfase na diluição correta é um ponto fundamental da segurança alimentar no primeiro semestre de vida.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O caso do Enzo, de 2 meses e meio, exige a escolha do substituto mais seguro para o leite materno. No Brasil, as diretrizes do Ministério da Saúde e da Sociedade Brasileira de Pediatria (SBP) são claras:<br><br> &nbsp;• <strong>O Padrão Ouro:</strong> Aleitamento materno exclusivo até os 6 meses.<br> &nbsp;• <strong>A Melhor Alternativa (Quando não é possível):</strong> A Fórmula Infantil. Diferente do leite de vaca integral, a fórmula infantil é processada industrialmente para adaptar os níveis de proteínas (reduzindo a carga renal), gorduras, carboidratos e micronutrientes (como o ferro) às necessidades de um lactente jovem.<br> &nbsp;• <strong>Diluição:</strong> A diluição correta (geralmente uma medida rasa para cada 30ml de água) é crítica. Uma diluição excessiva pode levar à desnutrição, enquanto uma fórmula muito concentrada pode causar desidratação hipernatrêmica e sobrecarga renal.<br><br>📚 <strong>Embasamento Científico (Guia Alimentar)</strong><br> &nbsp;• <strong>Leite de Vaca Integral:</strong> Desaconselhado antes de 1 ano de idade.<br> &nbsp;• <strong>Água:</strong> Deve ser oferecida para crianças que não estão em aleitamento materno exclusivo.<br> &nbsp;• <strong>Relactação:</strong> Na APS, antes de aceitar o uso da mamadeira, o MFC deve sempre avaliar a possibilidade de relactação (técnica para o bebê voltar ao peito).`
    },
    {
        id: "Q36",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "RASTREAMENTO",
        especialidade: "MEDICINA PREVENTIVA",
        enunciado: `(TEMFC 33 – 2023) Joice tem 55 anos e é uma mulher trans homossexual que iniciou terapia de hormonização (estrógenos e bloqueadores de testosterona) há 15 anos por conta própria. Hoje em dia está satisfeita com as mudanças corporais alcançadas e procurou consulta na unidade básica de saúde para realizar avaliação de rotina. Assinale a alternativa que apresenta os exames de rastreio e conduta correta.`,
        alternativas: [
            { id: "A", texto: `O rastreio de transtornos mentais como depressão, ansiedade, autismo e transtornos de personalidade deve ser realizado oportunamente.`, correta: false, resolucao: `Por que está errada? Ser uma pessoa trans não é um transtorno mental. O rastreio deve ser feito com base em sinais e sintomas clínicos. Presumir a necessidade de rastreio de autismo apenas pela identidade de gênero é uma conduta estigmatizante.` },
            { id: "B", texto: `O rastreio de diabetes com solicitação de hemoglobina glicada, se positivo, contraindica a continuidade da hormonização.`, correta: false, resolucao: `Por que está errada? O diagnóstico de Diabetes não é uma contraindicação absoluta para a hormonização. A conduta correta é otimizar o tratamento metabólico e ajustar a via do estrogênio (ex: transdérmica) se necessário.` },
            { id: "C", texto: `O rastreio de câncer de mama está indicado devido a paciente ter idade maior que 50 anos e fazer uso de estrogênios por pelo menos cinco anos.`, correta: true, resolucao: `Por que está correta? Reflete a conduta de rastreamento preventivo baseada no tempo de exposição do tecido mamário ao estímulo estrogênico e na faixa etária preconizada pelo Ministério da Saúde e pelo INCA (50-69 anos).` },
            { id: "D", texto: `O rastreio de infecções sexualmente transmissíveis deve ser realizado conforme protocolo para homens que fazem sexo com homens.`, correta: false, resolucao: `Por que está errada? Joice é uma mulher trans. Utilizar protocolos de HSH (Homens que fazem sexo com homens) é uma forma de violência institucional e ignora a identidade da paciente. O rastreio deve ser baseado nas práticas sexuais reais.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O cuidado à saúde de pessoas trans na Atenção Primária deve ser despido de preconceitos e focado na redução de danos e rastreamento de riscos específicos associados à terapia hormonal.<br><br> &nbsp;• <strong>Fisiologia e Risco:</strong> A terapia de hormonização feminina (estrogênios) promove o desenvolvimento de tecido mamário. O risco absoluto de câncer de mama em mulheres trans é maior do que em homens cisgênero.<br> &nbsp;• <strong>Protocolo de Rastreio:</strong> As diretrizes recomendam que mulheres trans que realizaram hormonização por um período prolongado (geralmente mais de 5 a 10 anos) sigam o protocolo de rastreamento para mulheres cisgênero.<br> &nbsp;• <strong>O Caso de Joice:</strong> Com 55 anos e 15 anos de uso de estrogênio, ela preenche os dois critérios para o rastreio bienal com mamografia (faixa etária de 50 a 69 anos e tempo de exposição hormonal).<br><br>📚 <strong>Prática Clínica (Redução de Danos)</strong><br> &nbsp;• <strong>Revisão da Hormonização:</strong> Avaliar a dose e a via de administração para minimizar riscos (especialmente o tromboembolismo venoso).<br> &nbsp;• <strong>Saúde da Próstata:</strong> Mulheres trans que não realizaram cirurgia de redesignação ainda possuem próstata. A investigação deve ser feita se houver sintomas urinários.`
    },
    {
        id: "Q37",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "TUBERCULOSE",
        especialidade: "INFECTOLOGIA",
        enunciado: `(TEMFC 33 – 2023) O teste rápido molecular (TRM-TB, GeneXpert) é uma recente opção de exame para a tuberculose e, apesar de ainda não estar disponível em todos os municípios, foi um dos motivos para a revisão do Manual de Recomendações para o Controle da Tuberculose no Brasil em 2019. Supondo que o exame esteja disponível em seu município no âmbito do Sistema Único de Saúde, em qual das seguintes situações o exame estaria melhor indicado, conforme o Manual?`,
        alternativas: [
            { id: "A", texto: `Confirmar suspeita de tuberculose pulmonar em crianças.`, correta: false, resolucao: `Por que está errada? Crianças menores de 10 anos geralmente apresentam a forma paucibacilar e não conseguem expectorar. O diagnóstico nessa faixa etária é prioritariamente baseado no Escore clínico-radiológico, que dispensa a confirmação bacteriológica em muitos casos.` },
            { id: "B", texto: `Pesquisar infecção latente em adultos.`, correta: false, resolucao: `Por que está errada? O TRM-TB detecta a presença de DNA bacteriano ativo na doença. Para o diagnóstico da Infecção Latente (ILTB), os exames utilizados são a Prova Tuberculínica (PPD) ou o IGRA.` },
            { id: "C", texto: `Confirmar suspeita de tuberculose pulmonar em adolescentes.`, correta: true, resolucao: `Por que está correta? Adolescentes, assim como adultos, são o grupo prioritário para o uso do TRM-TB como ferramenta de diagnóstico inicial em amostras de escarro, conforme preconizado pelo manual de 2019 e atualizações posteriores.` },
            { id: "D", texto: `Controle bacteriológico mensal durante o tratamento.`, correta: false, resolucao: `Por que está errada? O TRM-TB nunca deve ser usado para controle. Como ele detecta o DNA da bactéria, o teste pode continuar dando "Detectado" mesmo com bacilos mortos. O controle mensal da cura deve ser feito exclusivamente por Baciloscopia.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O Teste Rápido Molecular para Tuberculose (TRM-TB) revolucionou o diagnóstico da doença no Brasil, detectando simultaneamente o DNA do bacilo e a resistência à rifampicina em cerca de duas horas.<br><br> &nbsp;• <strong>Público-alvo e Diagnóstico:</strong> Segundo o Ministério da Saúde, o TRM-TB é indicado como o <strong>primeiro exame</strong> para o diagnóstico de tuberculose pulmonar e laríngea em adultos e adolescentes ($\ge$ 10 anos), pois conseguem expectorar escarro espontaneamente.<br> &nbsp;• <strong>Vantagens:</strong> Além da rapidez, o TRM-TB possui uma sensibilidade muito superior à baciloscopia (detecta 90% dos casos positivos em cultura contra 60-70% da baciloscopia).<br> &nbsp;• <strong>Resistência:</strong> A detecção de resistência à rifampicina já permite o encaminhamento para tratamento de Tuberculose Multirresistente (TB-MR) de imediato.<br><br>📚 <strong>Atenção ao Tratamento</strong><br>Se o TRM-TB for negativo, mas a suspeita clínica persistir, deve-se prosseguir com cultura e teste de sensibilidade. Reitera-se que o TRM-TB <strong>não tem utilidade no acompanhamento de cura</strong>, devido à leitura de DNA de bacilos mortos.`
    },
    {
        id: "Q38",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "DOENÇA RENAL CRÔNICA",
        especialidade: "NEFROLOGIA",
        enunciado: `(TEMFC 33 – 2023) Um homem portador de diabetes mellitus tipo 2 há mais de dez anos procurou o médico de família e comunidade na Unidade de Saúde da Família (USF) para conferir os resultados de exames solicitados. O médico relata que ele está com uma alteração renal, com taxa de filtração glomerular estimada em 59 ml/min/1.73 m2 e que deve repetir os exames em três meses para confirmar ou não a alteração. Dentre os exames, quais você solicitaria para repetir como rastreio e/ou diagnóstico de doença renal crônica na USF?`,
        alternativas: [
            { id: "A", texto: `Creatinina, sódio e potássio.`, correta: false, resolucao: `Por que está errada? Embora os eletrólitos (sódio e potássio) sejam importantes para monitorar complicações e manejo de fármacos, eles não são marcadores diagnósticos para a definição ou estadiamento da DRC. Falta a albuminúria.` },
            { id: "B", texto: `Creatinina, microalbuminúria e urina rotina.`, correta: true, resolucao: `Por que está correta? Esta combinação cobre todos os critérios necessários para o diagnóstico: a Creatinina permite calcular a TFG, a microalbuminúria avalia o grau de perda proteica, e a Urina Rotina pesquisa sinais de dano no sedimento urinário.` },
            { id: "C", texto: `Creatinina, ureia e hemograma completo.`, correta: false, resolucao: `Por que está errada? A ureia sofre influência de dieta e hidratação, sendo inferior à creatinina para estimativa de TFG. O hemograma avalia a anemia, mas a diretriz foca no binômio TFG + Albuminúria para o diagnóstico inicial e rastreio.` },
            { id: "D", texto: `Creatinina, ureia e urina rotina`, correta: false, resolucao: `Por que está errada? A ureia é redundante e inferior. O erro principal aqui é a ausência da microalbuminúria, que é o exame fundamental para o rastreio da nefropatia diabética e se altera antes da queda da TFG.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O diagnóstico da Doença Renal Crônica (DRC) em pacientes diabéticos exige a demonstração da persistência de alterações funcionais ou estruturais do rim por um período mínimo de três meses.<br><br>Para confirmar o diagnóstico e realizar o estadiamento conforme o KDIGO, são necessários dois eixos de avaliação:<br> &nbsp;• <strong>Avaliação da Função (TFG):</strong> Estimada a partir da Creatinina sérica (utilizando fórmulas como a CKD-EPI).<br> &nbsp;• <strong>Avaliação do Dano Parenquimatoso:</strong><br> &nbsp;&nbsp;&nbsp;&nbsp;- <em>Microalbuminúria:</em> É o marcador mais precoce de lesão renal no diabetes (Razão Albumina/Creatinina Urinária).<br> &nbsp;&nbsp;&nbsp;&nbsp;- <em>Urina Rotina (EAS):</em> Essencial para identificar marcadores como hematúria e cilindrúria.<br><br>📚 <strong>Critérios Diagnósticos (KDIGO)</strong><br>Presença de um dos seguintes critérios por > 3 meses:<br> &nbsp;• TFG < 60 ml/min/1,73 m² (calculada pela Creatinina).<br> &nbsp;• Marcadores de dano: Albuminúria ($\ge$ 30 mg/g) ou anormalidades no sedimento urinário.<br><em>Dica: No DM2, o rastreio deve ser anual e iniciado logo no momento do diagnóstico.</em>`
    },
    {
        id: "Q39",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "INSUFICIÊNCIA CARDÍACA",
        especialidade: "CARDIOLOGIA",
        enunciado: `(TEMFC 33 – 2023) Uma mulher hipertensa e diabética procurou a sua médica de família e comunidade na Unidade de Saúde da Família (USF) com sintomas de dispneia quando tem que ir para o segundo andar da casa com as roupas para guardar. Entretanto, refere que consegue andar no plano. Também relata ortopneia com apenas um travesseiro e edema de membros inferiores ao final do dia. Os sintomas estão ocorrendo há mais de seis meses. A médica indicou e a paciente conseguiu um ecocardiograma rapidamente e o resultado foi de Fração de Ejeção de ventrículo esquerdo (VE) de 45%. Qual medicamento deve ser usado para modificar a evolução da doença a partir do que foi exposto?`,
        alternativas: [
            { id: "A", texto: `Furosemida.`, correta: false, resolucao: `O erro: A Furosemida é um medicamento sintomático (diurético) que alivia a congestão, mas não modifica a sobrevida, o remodelamento cardíaco ou a evolução da doença a longo prazo.` },
            { id: "B", texto: `Atenolol.`, correta: false, resolucao: `O erro: O Atenolol não é um dos betabloqueadores recomendados com evidência para modificar a sobrevida na IC. Os recomendados são o Carvedilol, o Bisoprolol e o Succinato de Metoprolol.` },
            { id: "C", texto: `Losartana.`, correta: true, resolucao: `Por que está correta? A Losartana (um BRA) tem forte recomendação em pacientes com Fração de Ejeção Intermediária (40-49%) para reduzir hospitalizações e atuar como modificadora da doença, sendo amplamente disponível nos protocolos da APS/SUS.` },
            { id: "D", texto: `Dapaglifozina.`, correta: false, resolucao: `O erro: Cuidado com a pegadinha de protocolos! Embora hoje haja evidência da Dapagliflozina para todo o espectro da IC, os Protocolos Clínicos (PCDT) do Ministério da Saúde de onde as bancas costumam extrair essas regras limitam sua prescrição gratuita na APS a pacientes com FEVE < 40%.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>A paciente apresenta Insuficiência Cardíaca com Fração de Ejeção Levemente Reduzida (ICFElr) ou Intermediária (ICFEi), definida por uma FEVE de 45%.<br><br> &nbsp;• <strong>Drogas Modificadoras:</strong> O foco do tratamento é usar medicamentos que bloqueiam o sistema renina-angiotensina-aldosterona. O uso de antagonistas da angiotensina (BRA), como a Losartana, possui recomendação Classe IIa para essa faixa de fração de ejeção, ajudando a reduzir o remodelamento e as hospitalizações.<br> &nbsp;• <strong>A "Pegadinha" Institucional:</strong> A Dapagliflozina (iSGLT2) é uma droga espetacular e já indicada em diretrizes atuais para IC com fração preservada ou levemente reduzida. Contudo, em termos de PCDT do SUS (que pauta o acesso na APS e as bancas de prova), os critérios de inclusão estritos limitam a droga a FEVE < 40%. Portanto, a Losartana torna-se a resposta correta, segura e acessível.<br> &nbsp;• <strong>Sintomáticos vs. Prognóstico:</strong> Diuréticos de alça (Furosemida) são excelentes para o edema e dispneia descritos, mas a pergunta pede especificamente uma droga para "modificar a evolução da doença", o que exclui os diuréticos convencionais.`
    },
    {
        id: "Q40",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "DISTÚRBIO DO SONO",
        especialidade: "GERIATRIA",
        enunciado: `(TEMFC 33 – 2023) Hoje você está atendendo a Ester, que é uma senhora de 63 anos com quadro de zumbido bilateral, de moderada intensidade. A audiometria apresenta perda neurossensorial moderada bilateral em frequências mais agudas. Sua principal demanda é a dificuldade em dormir devido ao zumbido. O que você orientaria para melhorar a qualidade de vida dela?`,
        alternativas: [
            { id: "A", texto: `Orientar o uso de “ruído branco” (ventilador, som de máquina etc.) quando for dormir.`, correta: true, resolucao: `Por que está correta? É a medida não farmacológica de primeira linha com melhor custo-benefício. Ao usar um som de fundo constante, reduz-se o contraste do silêncio e o cérebro deixa de focar no zumbido, facilitando o início do sono e a habituação.` },
            { id: "B", texto: `Orientar o uso de uma droga Z (por exemplo, zolpidem) para induzir o sono.`, correta: false, resolucao: `O erro: O uso de drogas Z ou benzodiazepínicos deve ser evitado ao máximo em idosos. Elas aumentam drasticamente o risco de quedas, fraturas e confusão mental noturna, e não tratam a causa do despertar (o zumbido).` },
            { id: "C", texto: `Orientar o uso de Ginkgo biloba pela noite para reduzir o zumbido na hora de dormir.`, correta: false, resolucao: `O erro: Metanálises robustas (Cochrane) não demonstraram evidência de que o Ginkgo biloba seja eficaz para curar ou reduzir o zumbido. Prescrever algo sem evidência clínica clara não é uma conduta adequada.` },
            { id: "D", texto: `Orientar higiene do sono para a paciente, buscando organizar seu sono e facilitar seu início.`, correta: false, resolucao: `O erro: A higiene do sono é recomendada, mas é insuficiente para o problema específico. Mesmo com uma higiene do sono impecável (sem telas, sem cafeína), o zumbido continuará a ecoar alto no quarto silencioso. A intervenção direta no som é prioritária.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O caso da Dona Ester reflete um problema prevalente: o zumbido (tinnitus) associado à perda auditiva neurossensorial. Ele torna-se muito mais incômodo no silêncio do quarto, sendo uma causa clássica de insônia inicial.<br><br> &nbsp;• <strong>O Fenômeno do Silêncio:</strong> Para quem tem zumbido, o silêncio absoluto é o pior inimigo. Em um ambiente silencioso, o cérebro aumenta o "ganho" auditivo na tentativa de captar estímulos que já não ouve tão bem (devido à perda em frequências agudas), evidenciando o som anômalo interno pelo alto contraste.<br> &nbsp;• <strong>O Mascaramento (Ruído Branco):</strong> O uso de <em>white noise</em> (ventilador, umidificador, aplicativos de chuva) insere um estímulo sonoro externo constante. Isso "mascara" o zumbido ou diminui o contraste, fazendo o cérebro se distrair e permitindo o relaxamento e o sono.<br><br>📚 <strong>Prática Clínica (Tinnitus Retraining Therapy - TRT)</strong><br>A ideia principal do tratamento não é desligar magicamente o som interno, mas promover a "Habituação", onde o cérebro deixa de classificar aquele zumbido como uma ameaça ou foco de atenção. Aparelhos auditivos de amplificação (durante o dia) também são o pilar do tratamento para compensar a perda auditiva de Ester.`
    },
    {
        id: "Q41",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "ANEMIA",
        especialidade: "HEMATOLOGIA",
        enunciado: `(TEMFC 33 – 2023) Uma mulher de 33 anos, sem queixas, busca atendimento com sua equipe de saúde da família após apresentar alteração em resultado de eritrograma realizado por ocasião de um exame admissional, com os seguintes valores: Hemácias: 3,34 milhões/μL; Hemoglobina: 9,5 g/dL; Hematócrito: 30%; VCM: 115 fL; HCM: 32,9 pg. Diante dos resultados apresentados, é correto afirmar que:`,
        alternativas: [
            { id: "A", texto: `por se tratar de uma mulher em idade menstrual, o diagnóstico provável é de anemia ferropriva, permitindo o início do tratamento empírico.`, correta: false, resolucao: `Por que está errada? A anemia ferropriva (por deficiência de ferro) é caracteristicamente microcítica (VCM < 80 fL) e hipocrômica. O VCM de 115 fL da paciente afasta totalmente o ferro como culpado deste padrão.` },
            { id: "B", texto: `deficiência de folato e de B12 e abuso de álcool são causas comuns deste padrão de anemia, devendo ser investigadas inicialmente na anamnese.`, correta: true, resolucao: `Por que está correta? O caso é de uma anemia Macrocítica (VCM > 100 fL). As causas clássicas são a carência de B12 e Folato (megaloblásticas), além de abuso de álcool e hipotireoidismo (não-megaloblásticas). A anamnese alimentar e comportamental é o primeiro passo.` },
            { id: "C", texto: `o próximo passo da investigação deve ser a solicitação da dosagem de ferritina e ferro sérico, bem como a contagem de reticulócitos.`, correta: false, resolucao: `Por que está errada? Ferritina e ferro sérico investigam anemias microcíticas. Para este caso (macrocítica), a dosagem de Vitamina B12, Ácido Fólico séricos, TSH e função hepática seriam os passos adequados.` },
            { id: "D", texto: `o valor da hemoglobina indica a ocorrência de anemia grave, sendo necessário encaminhar ao hematologista para prosseguir a investigação.`, correta: false, resolucao: `Por que está errada? Uma hemoglobina de 9,5 g/dL é classificada como moderada. Além disso, as principais causas de macrocitose podem e devem ser investigadas primariamente pelo MFC na Unidade Básica de Saúde, sem necessidade de encaminhamento imediato.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>A interpretação desta questão depende totalmente da análise dos índices hematimétricos do paciente, com foco no Volume Corpuscular Médio (VCM).<br><br> &nbsp;• <strong>Diagnóstico de Anemia:</strong> A paciente apresenta Hemoglobina de 9,5 g/dL. De acordo com a OMS, valores abaixo de 12 g/dL para mulheres adultas (não gestantes) confirmam o quadro de anemia.<br> &nbsp;• <strong>Classificação Morfológica:</strong> O dado crucial é o VCM de 115 fL (o normal varia de 80 a 100 fL). Isso a classifica imediatamente como uma anemia <strong>Macrocítica</strong> (hemácias muito grandes).<br> &nbsp;• <strong>Causas de Macrocitose:</strong><br> &nbsp;&nbsp;&nbsp;&nbsp;- <em>Megaloblástica:</em> Deficiência de Vitamina B12 ou Ácido Fólico (Folato), que causa uma asincronia entre a maturação do núcleo e do citoplasma.<br> &nbsp;&nbsp;&nbsp;&nbsp;- <em>Não-Megaloblástica:</em> Alcoolismo crônico (efeito tóxico na medula), hipotireoidismo ou doenças hepáticas.<br><br>📚 <strong>Resumo Técnico para Estudo (Classificação pelo VCM)</strong><br><div style="overflow-x:auto; margin-top: 10px;"><table class="table-custom"><tr><th>VCM (fL)</th><th>Classificação</th><th>Principais Causas</th></tr><tr><td>< 80</td><td>Microcítica</td><td>Ferropriva, Talassemias, Doença Crônica (fase tardia).</td></tr><tr><td>80 - 100</td><td>Normocítica</td><td>Doença Crônica (fase inicial), Doença Renal, Hemorragia Aguda.</td></tr><tr><td>> 100</td><td>Macrocítica</td><td>Deficiência de B12/Folato, Álcool, Hipotireoidismo, Medicamentos.</td></tr></table></div>`
    },
    {
        id: "Q42",
        prova: "TEMFC 33",
        ano: "2023",
        tema: "DIABETES MELLITUS",
        especialidade: "ENDOCRINOLOGIA",
        enunciado: `(TEMFC 33 – 2023) Mulher, 32 anos, primigesta, sem história familiar de diabetes, com glicemia de jejum de 80 mg/dL no início do pré-natal, IMC pré-gestacional normal e ganho de peso adequado durante a gestação. Vem em consulta de pré-natal de rotina trazendo o seguinte resultado de teste de tolerância à glicose após sobrecarga com 75 g de glicose (TOTG = 75 g), colhido com idade gestacional de 27 semanas: glicemia em jejum 90 mg/dL; glicemia após 1 hora 200 mg/dL; glicemia após 2 horas: 150 mg/dL. Considerando os critérios atualmente adotados pelo Ministério da Saúde para o diagnóstico de diabetes na gravidez, é correto afirmar que:`,
        alternativas: [
            { id: "A", texto: `dada a ausência de fatores de risco, o exame não deveria ter sido realizado, sendo necessária cautela em sua interpretação.`, correta: false, resolucao: `O erro: O rastreamento de Diabetes Gestacional com TOTG entre a 24ª e 28ª semana é universal no Brasil para todas as gestantes que não tiveram diabetes diagnosticado no 1º trimestre, independentemente de fatores de risco.` },
            { id: "B", texto: `o resultado do TOTG = 75g está dentro dos parâmetros de normalidade, dispensando novas investigações no decorrer da gestação.`, correta: false, resolucao: `O erro: Embora os valores de jejum (90) e 2h (150) estejam normais, o valor da primeira hora (200 mg/dL) está acima do ponto de corte (180 mg/dL).` },
            { id: "C", texto: `o diagnóstico de diabetes gestacional pode ser estabelecido, considerando que há um valor alterado nos resultados apresentados.`, correta: true, resolucao: `Por que está correta? Pelas diretrizes do Ministério da Saúde e da Sociedade Brasileira de Diabetes, o diagnóstico de DMG com o TOTG 75g exige apena um (1) único valor alterado em qualquer uma das três medidas. O pico de 200 mg/dL na 1ª hora confirma a doença.` },
            { id: "D", texto: `a ocorrência de glicemia maior ou igual a 200 mg/dL na primeira hora define o diagnóstico de diabetes mellitus tipo 2.`, correta: false, resolucao: `O erro: Uma glicemia ≥ 200 mg/dL diagnosticaria Diabetes Mellitus Overt (tipo 2 na gravidez) se fosse colhida no exame de JEJUM, no exame CASUAL ou após 2 HORAS no TOTG. O valor isolado de 200 na "primeira hora" é critério exclusivo de DMG.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada<br><br>O rastreamento e diagnóstico do Diabetes Mellitus Gestacional (DMG) é universal e deve ser feito em todas as gestantes que não tenham diagnóstico prévio de diabetes, independentemente da presença de fatores de risco (como a paciente da questão, que possui peso e histórico ótimos).<br><br> &nbsp;• <strong>Critérios Diagnósticos (Ministério da Saúde):</strong> O Teste Oral de Tolerância à Glicose (TOTG) com 75g é realizado, preferencialmente, entre 24 e 28 semanas. Os pontos de corte exatos são:<br> &nbsp;&nbsp;&nbsp;&nbsp;- Jejum: ≥ 92 mg/dL<br> &nbsp;&nbsp;&nbsp;&nbsp;- Após 1 hora: ≥ 180 mg/dL<br> &nbsp;&nbsp;&nbsp;&nbsp;- Após 2 horas: ≥ 153 mg/dL<br><br> &nbsp;• <strong>Interpretação da Curva:</strong> É obrigatório gravar que basta <strong>um único valor alterado</strong> em qualquer momento da curva para confirmar o diagnóstico de DMG. No caso de nossa paciente, a medida da 1ª hora "estourou" o limite. Logo, o diagnóstico está perfeitamente estabelecido.<br><br>📚 <strong>Diferenciação (Por que não DM2?)</strong><br>A classificação de Diabetes Mellitus tipo 2 (ou <em>Overt Diabetes</em> - o diabetes pré-existente diagnosticado na gestação) exige critérios mais graves: Glicemia de Jejum ≥ 126 mg/dL ou Glicemia ≥ 200 mg/dL <strong>após 2 horas</strong> (ou em qualquer momento acompanhada de sintomas clássicos de polidipsia e poliúria). O pico de primeira hora classifica apenas como DMG.`
    }
];

// Adiciona as questões deste lote ao banco principal
window.bancoDeQuestoes = window.bancoDeQuestoes.concat(questoes_lote_1);