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
<br>O Gatilho: Ele iniciou recentemente o uso de quetiapina (um antipsicótico/neuroléptico) para um quadro psicótico. Embora seja um antipsicótico atípico (com menor afinidade pelos receptores $D_2$), ele ainda pode causar efeitos extrapiramidais, especialmente em idosos.
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
        tema: "SÍNDROME DOS OVÁRIOS POLICÍSTICOS",
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
        tema: "OTITE MÉDIA AGUDA",
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
Para resolver esta questão, precisamos analisar cada dado laboratorial da Joana à luz das diretrizes do Ministério da Saúde (MS) e da FEBRASGO:
Hemoglobina (Hb 11,8 g/dL): Na gestação, define-se anemia como Hb < 11,0 g/dL. Portanto, Joana não está anêmica. O sulfato ferroso profilático (40 mg de ferro elementar) é indicado para todas, mas o termo "anemia leve" e a dose de "120g" (provável erro de digitação para mg, mas ainda assim para tratamento) invalidam a opção.
Toxoplasmose (IgG+ / IgM-): Este resultado indica imunidade. Joana já teve contato com o parasita no passado e possui anticorpos de memória. Ela não corre risco de infecção primária durante esta gestação e, por isso, não precisa de orientações de precaução para "não contrair" a doença.
Glicemia de Jejum (88 mg/dL): O valor está normal (< 92 mg/dL). No entanto, isso não exclui a necessidade de novos exames. Todas as gestantes com glicemia inicial normal devem realizar o TOTG 75g entre a 24ª e 28ª semana para rastrear Diabetes Gestacional.
Urina de Rotina vs. Urocultura: A urina de rotina (tipo I/EAS) normal não exclui a Bacteriúria Assintomática. Na gestação, essa condição aumenta drasticamente o risco de pielonefrite e parto prematuro. Por isso, a Urocultura com antibiograma é obrigatória no primeiro trimestre, independentemente de sintomas ou do resultado do EAS.

📚 Embasamento Científico (Ministério da Saúde)
Rotina de Exames: A primeira consulta de pré-natal deve incluir: Tipagem sanguínea e fator Rh, Coombs indireto (se Rh negativo), Hb/Ht, Glicemia de jejum, VDRL, Anti-HIV, HBsAg, Sorologia para Toxoplasmose, Urina tipo I e Urocultura.
Bacteriúria Assintomática: Ocorre em 2% a 10% das gestantes. Se não tratada, até 40% evoluem para pielonefrite.
Imunidade à Toxoplasmose: A presença de IgG confere proteção permanente contra a reinfecção que poderia causar danos fetais (exceto em casos raros de imunossupressão grave).`
    },
    {
        id: "Q12",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "VASCULITES",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Uma médica de família e comunidade atua como preceptora de estudantes do internato de graduação de medicina. Recebeu de um dos internos a demanda de discutir o caso de uma criança de 2 anos, que apresenta um quadro de febre alta (>38º C) e persistente há aproximadamente cinco dias, com hiperemia e rachadura nos lábios, associada a um exantema maculopapular escarlatiniforme. Caso você estivesse no lugar dessa médica e dispondo dessas informações iniciais, qual seria a hipótese diagnóstica que você pensaria?`,
        alternativas: [
            { id: "A", texto: `Dengue.`, correta: false, resolucao: `Por que está errada? Embora a dengue cause febre alta e exantema, ela raramente se apresenta com as alterações labiais descritas (rachaduras e hiperemia intensa). O exantema da dengue costuma ser do tipo "ilhas brancas em um mar vermelho" e o quadro clínico é marcado mais por mialgia, dor retro-orbitária e prostração do que por alterações inflamatórias de mucosas.` },
            { id: "B", texto: `Dermatite herpetiforme.`, correta: false, resolucao: `Por que está errada? Esta é uma condição cutânea crônica, intensamente pruriginosa e autoimune, associada à sensibilidade ao glúten (doença celíaca). Ela se apresenta com vesículas e pápulas simétricas, não cursando com febre alta persistente ou quadro sistêmico agudo como o descrito.` },
            { id: "C", texto: `Doença de Kawasaki.`, correta: true, resolucao: `Por que está correta? O quadro preenche os principais critérios: febre por >= 5 dias, alteração de lábios (mucosa oral) e exantema polimorfo. Na presença de febre por 5 dias e 4 dos 5 critérios clássicos, o diagnóstico é fechado. Mesmo em casos incompletos, este conjunto de sinais é altamente sugestivo.` },
            { id: "D", texto: `Mononucleose infecciosa.`, correta: false, resolucao: `Por que está errada? A mononucleose causa febre, faringite e linfonodopatia. Embora possa apresentar exantema (especialmente se o paciente usar amoxicilina inadvertidamente), as rachaduras labiais e a febre alta persistente sem uma faringite exsudativa proeminente tornam o Kawasaki uma hipótese muito mais provável e urgente devido ao risco cardíaco.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
O raciocínio clínico para este caso deve focar na persistência da febre e nas alterações de mucosas/pele em uma criança pequena.
A Febre: O marcador inicial é a febre alta e persistente por 5 dias ou mais. Este é o critério obrigatório para o diagnóstico clássico da Doença de Kawasaki.
Alterações Orais: A descrição de "hiperemia e rachadura nos lábios" é um dos critérios diagnósticos da doença. Outros achados comuns incluem a "língua em morango" e hiperemia difusa da orofaringe.
Exantema: O exantema na Doença de Kawasaki é polimorfo, podendo se apresentar como maculopapular escarlatiniforme (como no caso), morbiliforme ou até semelhante ao eritema multiforme. Ele geralmente se inicia no tronco e extremidades.
A Patologia: A Doença de Kawasaki é uma vasculite de médios vasos que afeta predominantemente crianças menores de 5 anos. Sua maior importância clínica reside no risco de formação de aneurismas de artérias coronárias se não for tratada precocemente com imunoglobulina intravenosa (IVIG).

📚 Embasamento Científico
De acordo com as diretrizes da American Heart Association (AHA) e da Sociedade Brasileira de Pediatria (SBP):
Critérios Diagnósticos: Febre por pelo menos 5 dias associada a 4 dos seguintes critérios:
- Alterações de extremidades (eritema/edema de palmas e plantas ou descamação periungueal).
- Exantema polimorfo.
- Conjuntivite bulbar bilateral não purulenta.
- Alterações de lábios e cavidade oral.
- Linfonodopatia cervical (geralmente unilateral, > 1,5 cm).
Tratamento: A fase aguda deve ser tratada com Imunoglobulina Venosa (IVIG) em dose única alta (2 g/kg) e Ácido Acetilsalicílico (AAS), idealmente até o 10º dia de doença para prevenir os aneurismas coronarianos.
Monitoramento: O ecocardiograma é o exame padrão para rastrear as alterações nas artérias coronárias.`
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
O raciocínio clínico para este caso baseia-se na cronicidade, no padrão de acometimento e na ausência de sinais sistêmicos.
Tempo de Evolução: Os sintomas persistem há mais de 2 meses (8 semanas). O critério fundamental para o diagnóstico de Artrite Idiopática Juvenil (AIJ) é a presença de artrite por pelo menos 6 semanas em crianças com menos de 16 anos.
Padrão Inflamatório: A rigidez matinal que melhora ao longo do dia é o "sinal de ouro" da dor inflamatória. Ao contrário da dor mecânica (que piora com o esforço), a dor inflamatória da AIJ apresenta o chamado fenômeno de gel (rigidez após períodos de repouso).
Apresentação "Indolor": É muito comum na AIJ que a criança apresente edema articular importante sem queixar-se de dor intensa. Os pais notam a claudicação (mancar) ou a recusa em realizar certas atividades, mas a criança raramente chora de dor.
Epidemiologia: A forma oligoarticular (acometimento de até 4 articulações) é a mais comum, afetando tipicamente meninas entre os 2 e 4 anos de idade, tendo o joelho como a articulação mais frequentemente atingida.

📚 Embasamento Científico
De acordo com os critérios da ILAR (International League of Associations for Rheumatology) e da Sociedade Brasileira de Pediatria (SBP):
Definição de AIJ: Artrite de causa desconhecida, com início antes dos 16 anos e duração mínima de 6 semanas, após exclusão de outras causas.
Subtipo Oligoarticular: Afeta 1 a 4 articulações nos primeiros 6 meses de doença. É a forma com maior associação a Uveíte Anterior Assintomática, o que exige rastreio obrigatório com exame de lâmpada de fenda pelo oftalmologista, especialmente se o anticorpo antinuclear (ANA/FAN) for positivo.
Diferencial de Dor:
- Inflamatória (AIJ): Pior de manhã, melhora com movimento, edema presente.
- Mecânica/Crescimento: Pior à noite, melhora com repouso, sem edema articular.`
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
O tratamento da enurese noturna (perda involuntária de urina durante o sono em crianças com 5 anos ou mais) segue uma hierarquia de evidências baseada na motivação da criança e na fisiopatologia do quadro.
Uroterapia Padrão (Medidas Iniciais): Antes de qualquer medicamento ou alarme, o tratamento deve começar com a "uroterapia". Isso inclui orientações sobre a ingestão de líquidos (aumentar durante o dia e reduzir 2h antes de dormir), evitar cafeína à noite, estabelecer uma rotina de micção regular durante o dia (a cada 2-3 horas) e tratar a constipação intestinal, que frequentemente está associada à enurese.
O Alarme e a Desmopressina: São terapias de segunda linha, indicadas quando as medidas comportamentais falham após alguns meses. O alarme é excelente para condicionamento, enquanto a desmopressina (análogo da vasopressina) é eficaz para crianças com poliúria noturna.
Disfunção Vesical: Se a criança apresenta sintomas diurnos (urgência, frequência), o diagnóstico muda para enurese não monossintomática, o que pode exigir medicações que atuam no músculo detrusor.

📚 Embasamento Científico
De acordo com o Consenso da ICCS e as diretrizes da SBP:
Definição: A enurese só é diagnosticada após os 5 anos de idade cronológica e de desenvolvimento.
Abordagem Inicial: Diário miccional, tratamento de constipação e orientações comportamentais (Uroterapia).
Terapia Médica:
- Desmopressina: Melhor para crianças com grandes volumes de urina à noite e bexiga de capacidade normal.
- Alarme Noturno: Melhor para crianças com bexigas de pequena capacidade e para aquelas que não conseguem acordar com o estímulo da bexiga cheia.
- Anticolinérgicos: Indicados especificamente para hiperatividade do detrusor.`
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
O tratamento do paciente diabético com DRC mudou de um foco puramente "glicocêntrico" para um foco de proteção orgânica. No entanto, à medida que a função renal declina (especialmente abaixo de 30 mL/min/1,73m²), o arsenal terapêutico para controle da glicemia (HbA1c) reduz-se drasticamente.
Metabolismo da Insulina: Os rins são responsáveis por cerca de 30-80% da depuração da insulina. Na DRC avançada, a meia-vida da insulina aumenta, exigindo ajustes de dose, mas ela permanece como a ferramenta mais eficaz e segura quando outros agentes orais são contraindicados.
Limitações dos Orais: Muitas drogas dependem da excreção renal ou perdem a eficácia glicosúrica (como os iSGLT-2) quando a filtração glomerular está muito baixa.
Segurança: O principal objetivo na DRC avançada é evitar a hipoglicemia, que é particularmente perigosa nesta população.

📚 Embasamento Científico (SBD 2025 / KDIGO 2024)
Metformina: Dose total até TFG 45; meia dose (máximo 1000mg) entre 30-45; suspender se < 30.
iSGLT-2: Devem ser iniciados para proteção renal se TFG > 20-25 mL/min/1,73m². No entanto, se o objetivo for apenas controle de hiperglicemia, sua eficácia é mínima abaixo de 45.
Insulina: Não tem contraindicação por faixa de TFG, mas requer redução de dose (frequentemente em 25% quando TFG < 50 e em 50% quando TFG < 10) para evitar hipoglicemia.`
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
O Pedro apresenta sinais clássicos de Insuficiência Cardíaca (IC) — dispneia, edema de membros inferiores e cansaço — associados a sintomas de baixo débito ou arritmia (tontura). Em uma área endêmica, a Doença de Chagas deve ser a primeira hipótese.
O Alvo do Parasita: O Trypanosoma cruzi tem uma predileção pelo sistema de condução cardíaco, causando fibrose e destruição de fibras nervosas e musculares.
O Achado "Assinatura": O Bloqueio de Ramo Direito (BRD) é a alteração eletrocardiográfica mais comum e característica da CCC. Quando associado ao Bloqueio Divisional Anterossuperior Esquerdo (BDAS), a suspeita de Chagas torna-se altíssima.
Alargamento do QRS: Um QRS com duração >= 120 ms (no caso da questão, 140 ms) indica um bloqueio completo de ramo, refletindo o atraso na condução intraventricular devido à fibrose miocárdica.

📚 Embasamento Científico
De acordo com o II Consenso Brasileiro em Doença de Chagas:
Rastreio: Todo paciente com sorologia positiva para Chagas deve realizar um ECG.
Alterações Sugestivas: Além do BRD (isolado ou com BDAS), outras alterações comuns incluem extrassístoles ventriculares, bloqueios atrioventriculares (BAV) de diversos graus e zonas de inatividade elétrica (fibrose).
Prognóstico: A presença de bloqueios de ramo e o alargamento do QRS são marcadores de maior gravidade e risco de progressão para insuficiência cardíaca e morte súbita.
Termos Técnicos para o seu Prontuário:
- BRD (Bloqueio de Ramo Direito): Atraso na despolarização do ventrículo direito.
- BDAS (Bloqueio Divisional Anterossuperior Esquerdo): Desvio do eixo para a esquerda (além de -30°).
- QRS Alargado: Duração do complexo QRS >= 120 ms.`
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
O diagnóstico do Sr. João é fundamentado em três pilares clássicos da pneumologia:
Fator de Risco e Clínica: A carga tabágica de 70 anos-maço é extremamente elevada (o risco aumenta significativamente acima de 20 anos-maço). A clínica de dispneia progressiva e tosse, que piora no inverno (período de maior exacerbação), é a apresentação típica. A perda de peso pode ocorrer em fenótipos de enfisema grave devido ao alto gasto energético respiratório.
Radiografia de Tórax (Sinais de Hiperinsuflação): Aumento dos espaços intercostais e retificação diafragmática: Indicam que o pulmão está "aprisionando ar", perdendo a elasticidade natural. Aumento do espaço retroesternal: Visto no perfil, confirma o aumento do volume residual pulmonar.
Espirometria (O Padrão Ouro): O diagnóstico de DPOC é confirmado pela presença de uma relação VEF1/CVF < 0,70 (pós-broncodilatador), que indica uma obstrução ao fluxo aéreo que não é totalmente reversível. O valor de VEF1 < 80% do predito, associado aos sintomas, ajuda a classificar o paciente conforme os estágios GOLD.

📚 Embasamento Científico
De acordo com o relatório GOLD (Global Initiative for Chronic Obstructive Lung Disease) 2024/2025:
Diagnóstico: Deve ser considerado em qualquer paciente com dispneia, tosse crônica ou produção de escarro e história de exposição a fatores de risco (tabagismo é o principal). A espirometria é mandatória para confirmar o diagnóstico.
Radiologia: O Raio-X de tórax tem baixa sensibilidade para o diagnóstico precoce, mas em casos estabelecidos, é útil para identificar hiperinsuflação e excluir diagnósticos diferenciais (como câncer de pulmão ou IC).
Classificação: O caso de João (VEF1 < 80%) seria classificado espirometricamente como uma obstrução de grau GOLD 2 (Moderada).`
    },
    {
        id: "Q18",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "ASSADURA",
        especialidade: "PEDIATRIA",
        enunciado: `(TEMFC 35 – 2024) Priscila traz seu bebê para consulta de puericultura de 2 anos, ao exame físico você constata assaduras e pergunta à mãe o padrão evacuatório. Ela conta que sua filha fica a maior parte do dia com a vizinha para que ela trabalhe e que a vizinha havia comentado sobre diarreia quando a criança toma iogurte e que tem dias que a criança fica com o abdome estufado e muito chorosa. A criança também apresenta placas na face e nas dobras dos pezinhos, sugestivas de uma dermatite atópica. O padrão alimentar é mingau de aveia pela manhã, almoço, mamadeira a tarde, e jantar a noite seguido de outra mamadeira, sempre preparada com leite de vaca em pó. Diante do quadro clínico acima, assinale a alternativa correta:`,
        alternativas: [
            { id: "A", texto: `As assaduras podem estar relacionadas a maus tratos, negligência da mãe, e uso de fraldas molhadas por tempo prolongado e o caso pode acender um alerta para acionar o conselho tutelar.`, correta: false, resolucao: `O erro: Embora a dermatite de fraldas possa ocorrer por higiene inadequada, no contexto desta criança, há uma explicação médica clara (diarreia recorrente por provável alergia). Acionar o conselho tutelar sem evidências de negligência real e com um quadro clínico sugestivo de patologia seria uma conduta precipitada e equivocada.` },
            { id: "B", texto: `As assaduras podem estar relacionadas ao padrão evacuatório diarreico, deve-se prescrever Albendazol 40mg/mL 10mL/dia por 5 dias.`, correta: false, resolucao: `O erro: O Albendazol é um antiparasitário. Embora parasitoses possam causar diarreia, elas não explicam as lesões de pele com padrão de dermatite atópica. Além disso, a dose mencionada (10mL/dia por 5 dias) não é o esquema padrão para as parasitoses comuns na infância.` },
            { id: "C", texto: `As lesões de pele podem corresponder a escabiose, não tendo relação com a alimentação, devendo ser prescritas a Ivermectina 6mg (oral) e a Permetrina 5% (tópica).`, correta: false, resolucao: `O erro: A escabiose (sarna) caracteriza-se por pápulas extremamente pruriginosas, sulcos na pele e acometimento de espaços interdigitais e punhos, não placas em face e dobras típicas de dermatite. Além disso, a escabiose não justificaria os sintomas gastrointestinais.` },
            { id: "D", texto: `As lesões de pele juntamente com a diarreia ácida sinalizam provável alergia à proteína do leite da vaca, devendo ser feita orientação para redução da ingesta de derivados do leite.`, correta: true, resolucao: `Por que está correta? Esta alternativa faz a correlação clínica correta entre os dois sistemas afetados (pele e trato gastrointestinal). A presença de dermatite atópica associada a sintomas digestivos após ingestão de lácteos é o "cartão de visitas" da APLV. A conduta inicial é a exclusão diagnóstica da proteína do leite de vaca da dieta para observar a remissão dos sintomas.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
O diagnóstico da filha de Priscila baseia-se na correlação entre a dieta e os sintomas observados em dois sistemas diferentes:
Manifestações Gastrointestinais: A ocorrência de diarreia especificamente após a ingestão de iogurte, associada a distensão abdominal ("abdome estufado") e irritabilidade, sugere uma reação adversa às proteínas do leite (como a caseína ou lactoalbumina). A diarreia ácida resultante da má absorção causa a irritação perianal (assaduras) observada no exame físico.
Manifestações Cutâneas: A presença de placas sugestivas de dermatite atópica na face e dobras é uma associação clássica. A dermatite atópica faz parte da "marcha atópica" e, em crianças pequenas, pode ser desencadeada ou agravada por alérgenos alimentares, sendo a proteína do leite de vaca o principal culpado.
Padrão Alimentar: A criança consome leite de vaca em pó em múltiplas refeições (mingau e mamadeiras), o que mantém o estímulo antigênico constante, explicando a persistência dos sintomas.

📚 Embasamento Científico (Guia Prático de APLV - ASBAI/SBP)
Definição: A APLV é uma reação imunológica às proteínas do leite de vaca. Pode ser mediada por IgE (reações imediatas), não-IgE (reações tardias, como diarreia e proctocolitis) ou mista (como a dermatite atópica).
Dermatite de Fraldas: A diarreia ácida e frequente altera o pH da pele perianal e rompe a barreira cutânea, facilitando a inflamação e infecções secundárias.
Tratamento: O padrão-ouro é a dieta de isenção total das proteínas do leite de vaca (e muitas vezes da soja, por reação cruzada). Em crianças não amamentadas, utilizam-se fórmulas especiais (extensamente hidrolisadas ou de aminoácidos).`
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
O raciocínio clínico deve integrar a queixa neurológica (formigamento) com o achado vascular do exame físico:
A Patologia: A Síndrome do Desfiladeiro Torácico ocorre pela compressão do feixe neurovascular (plexo braquial e vasos subclávios) na sua passagem do pescoço para a axila.
O Triângulo Interescalênico: Carlos apresenta uma contratura no músculo escaleno médio. O desfiladeiro é delimitado pelos escalenos anterior e médio. Quando esses músculos estão tensos ou hipertrofiados (comum em má postura ao computador), eles "estrangulam" as estruturas que passam entre eles.
Teste de Adson: É o teste padrão para avaliar o desfiladeiro torácico. A redução do pulso radial durante a manobra (extensão e rotação do pescoço para o lado afetado acompanhada de inspiração profunda) indica compressão da artéria subclávia.
Sintomas Mediais: O formigamento na região medial da mão e antebraço sugere o acometimento das raízes inferiores do plexo braquial (C8-T1), que são as mais vulneráveis à compressão nessa região.

📚 Revisão Técnica para o seu Estudo
Manobra de Adson: O objetivo é diminuir o espaço interescalênico e verificar se há compressão da artéria subclávia (pelo pulso) ou do plexo braquial (pela reprodução dos sintomas).
Fatores de Risco: O trabalho prolongado em computador (Home Office) favorece a protusão cefálica (cabeça para frente), o que encurta e tensiona os músculos escalenos e o peitoral menor.
Diagnóstico Diferencial: Deve-se diferenciar de radiculopatias cervicais (hérnia de disco) e síndrome do túnel do carpo. O teste de Adson positivo é a chave para localizar o problema no desfiladeiro.`
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
O diagnóstico do Henrique é uma hérnia umbilical redutível. O raciocínio para o plano de acompanhamento baseia-se em três pontos fundamentais:
História Natural: A grande maioria das hérnias umbilicais na infância fecha-se espontaneamente. O fechamento ocorre devido ao fortalecimento e aproximação dos músculos retos abdominais à medida que a criança cresce e se torna mais ativa.
Tamanho do Anel Herniário: Henrique apresenta um anel herniário menor que 1 cm. Hérnias com anéis menores que 1,5 cm a 2,0 cm têm uma probabilidade muito alta de resolução espontânea sem qualquer intervenção.
Idade do Paciente: Com 1 ano e 3 meses, Henrique ainda está em uma fase de pleno desenvolvimento da parede abdominal. As diretrizes pediátricas recomendam a observação clínica, já que a maior parte das hérnias fecha até os 2 anos de idade, podendo-se aguardar até os 4 ou 5 anos antes de considerar a cirurgia.

📚 Embasamento Científico (Sociedade Brasileira de Pediatria / Cirurgia Pediátrica)
De acordo com o consenso da Sociedade Brasileira de Pediatria (SBP) e da Associação Brasileira de Cirurgia Pediátrica (CIPE):
Critérios para Cirurgia (Herniorrafia):
- Persistência da hérnia após os 4 ou 5 anos de idade.
- Anel herniário muito largo (geralmente > 2 cm) após os 2 anos de idade.
- Hérnias associadas a derivação ventriculoperitoneal (DVP).
- Sintomas de encarceramento ou estrangulamento (emergência).
Prognóstico: Mais de 80% das hérnias umbilicais que medem menos de 1 cm no primeiro ano de vida fecharão espontaneamente.`
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
O tratamento moderno da ICFER baseia-se nos "quatro pilares" que demonstraram redução de mortalidade e hospitalização. A estratégia terapêutica deve focar no bloqueio neuro-hormonal.
Os Quatro Pilares:
- Inibidores da Neprilisina e do Receptor de Angiotensina (ARNI): Sacubitril/Valsartana.
- Betabloqueadores: (Carvedilol, Succinato de Metoprolol ou Bisoprolol).
- Antagonistas do Receptor de Mineralocorticoide: (Espironolactona).
- Inibidores da SGLT2: (Dapagliflozina ou Empagliflozina).
Transição para ARNI: A substituição de um IECA (como Enalapril) ou BRA por um ARNI (Sacubitril/Valsartana) é recomendada pela DBHA 2025 e pelas diretrizes de IC, pois essa classe mostrou superioridade em reduzir mortes cardiovasculares em comparação com a terapia isolada.

📚 Embasamento Científico (DBHA 2025)
De acordo com a diretriz que você enviou:
Indicação de ARNI: É recomendada para pacientes com ICFER para reduzir o risco de morte cardiovascular e hospitalização.
Comorbidade Coração-Rim: Em pacientes com hipertensão e cardiopatia isquêmica (como Elza, que tem DAC), o controle pressórico rigoroso (meta < 130/80 mmHg) é crucial para prevenir a progressão da disfunção ventricular.`
    },
    {
        id: "Q22",
        prova: "TEMFC 35",
        ano: "2024",
        tema: "RASTREAMENTO",
        especialidade: "GINECOLOGIA",
        enunciado: `(TEMFC 35 – 2024) Regina, mulher cisgenero, preta, 34 anos, comparece à Unidade Básica de Saúde para uma consulta de rotina com a médica de família e comunidade de sua área após busca ativa de Lucia, agente comunitária de saúde, pois é nova no bairro e não fazia acompanhamento anteriormente. Durante a anamnese, ela informa que nunca realizou o exame de Papanicolau e, quando questionada, diz não ter informações sobre o HPV e seu papel no desenvolvimento do câncer de colo de útero. Ela relata também que possui três filhas adolescentes, que nunca foram vacinadas contra o HPV. A equipe de saúde aproveita a consulta para orientá-la sobre a importância do rastreamento regular, da vacinação e do acompanhamento de possíveis lesões precursoras, explicando as ações realizadas na Atenção Primária. Considerando-se o papel da Atenção Primária à Saúde na prevenção do câncer de colo de útero e a situação de Regina, qual das alternativas descreve corretamente uma medida essencial que deve ser adotada neste nível de atenção?`,
        alternativas: [
            { id: "A", texto: `A equipe deve orientar Regina sobre a importância de iniciar o rastreamento com o exame de Papanicolau para detectar possíveis lesões precursoras para mulheres de 25 a 64 anos, a cada 3 anos, após dois exames anuais consecutivos negativos. Orientar sobre a vacinação contra o HPV para suas filhas e oferecer educação em saúde para esclarecer a relação entre HPV e câncer de colo de útero.`, correta: true, resolucao: `Por que está correta? Esta alternativa reflete exatamente o protocolo do Ministério da Saúde: faixa etária correta (25-64 anos), periodicidade correta (trienal após dois negativos anuais), importância da vacinação para as filhas e o papel da educação em saúde na APS.` },
            { id: "B", texto: `O câncer de colo uterino é passível de prevenção secundária (rastreamento), e não é passível de prevenção primária (redução de alguns fatores de risco), já que esse tumor é causado pelo papilomavírus humano (HPV) e têm grande probabilidade de progredir para neoplasia intraepitelial cervical (NIC).`, correta: false, resolucao: `O erro: O câncer de colo de útero é passível de prevenção primária através da vacinação contra o HPV, do uso de preservativos e da cessação do tabagismo (fator de risco importante).` },
            { id: "C", texto: `A causa primária das lesões precursoras e do câncer do colo uterino é a infecção persistente ou crônica por um ou mais tipos de HPV “de alto risco” (ou oncogênicos), sendo os subtipos 6 e 11 mais comuns dentre os oncogênicos.`, correta: false, resolucao: `O erro: Os subtipos 6 e 11 são considerados de baixo risco e estão associados a verrugas genitais (condilomas). Os subtipos de alto risco (oncogênicos) mais comuns e responsáveis pela maioria dos casos de câncer são o 16 e o 18.` },
            { id: "D", texto: `O prognóstico do câncer de colo uterino depende da extensão da doença no momento do diagnóstico, estando sua mortalidade fortemente associada a mulheres acima de 25 anos e menores que 64 anos, com alta taxa de letalidade nesta faixa etária.`, correta: false, resolucao: `O erro: Embora a incidência seja alta nessa faixa (daí o rastreamento), a mortalidade por câncer de colo de útero no Brasil ainda é alta em mulheres que nunca rastrearam ou que são diagnosticadas em estágios avançados, muitas vezes fora dessa faixa etária ou no limite superior dela devido ao efeito acumulado da infecção persistente.` }
        ],
        resolucaoGeral: `💡 Resolução Comentada
O raciocínio clínico para o caso de Regina deve integrar as ações de prevenção primária (vacinação) e secundária (rastreamento citopatológico):
Público-Alvo do Rastreamento: A diretriz brasileira recomenda a realização do exame citopatológico (Papanicolau) para mulheres e pessoas com colo do útero na faixa etária de 25 a 64 anos que já tiveram atividade sexual. Regina, com 34 anos, está inserida nessa recomendação.
Periodicidade: Os dois primeiros exames devem ser realizados com intervalo anual. Se ambos forem negativos, os próximos exames devem ser realizados a cada 3 anos. Como Regina nunca realizou o exame, ela deve iniciar o ciclo anual agora.
Prevenção Primária (Vacina HPV): A vacina é a medida mais eficaz para prevenir a infecção pelos subtipos oncogênicos do HPV. No Brasil, o Programa Nacional de Imunizações (PNI) oferece a vacina quadrivalente para meninas e meninos de 9 a 14 anos. As filhas adolescentes de Regina devem ser encaminhadas para vacinação imediata.
Educação em Saúde: Explicar a relação causal entre o HPV e o câncer é essencial para a adesão ao tratamento e às medidas preventivas, especialmente em populações com menor acesso prévio à informação.
Embora a base do rastreio (citopatológico dos 25 aos 64 anos) se mantenha estável, as novas notas técnicas enfatizam a transição para os testes de biologia molecular (DNA-HPV) como rastreio primário em vez da citologia, devido à sua maior sensibilidade.

📚 Resumo Técnico para o seu estudo
Prevenção Primária: Vacina HPV (9-14 anos), uso de preservativos, controle do tabagismo.
Prevenção Secundária: Rastreamento citopatológico (Papanicolau).
Lesões Precursoras: O objetivo do rastreio é detectar a NIC (Neoplasia Intraepitelial Cervical) de alto grau antes que ela se torne invasora.`
    }
];

// Adiciona as questões deste lote ao banco principal
window.bancoDeQuestoes = window.bancoDeQuestoes.concat(questoes_lote_1);