import type { PersonaId, Persona, Question } from '../types/quiz';

export type { PersonaId, Persona, Question };


export const PERSONAS: Persona[] = [
    {
        id: 'solopreneur',
        name: 'Solopreneur',
        title: 'O Maverick da Autonomia',
        description: 'Prioriza a liberdade radical e a agilidade. Prefere construir sistemas automatizados e produtos digitais que escalam sem a necessidade de gerenciar pessoas.',
        examples: ['Pieter Levels', 'Justin Welsh']
    },
    {
        id: 'visionary',
        name: 'Visionário de Monopólio',
        title: 'O Arquiteto do Futuro',
        description: 'Focado no salto "Zero a Um". Não quer competir; quer tornar a competição irrelevante ao criar algo que não existia.',
        examples: ['Peter Thiel', 'Elon Musk']
    },
    {
        id: 'craftsman',
        name: 'Artesão de Elite',
        title: 'O Especialista em Ofício',
        description: 'É o colaborador individual de altíssima performance. Sua lealdade é com a qualidade do trabalho. Ele não quer ser o CEO; quer ser o "Mestre".',
        examples: ['Steve Wozniak']
    },
    {
        id: 'orchestrator',
        name: 'Orquestrador de Sistemas',
        title: 'O Scaler Operacional',
        description: 'O mestre da execução. Transforma a visão caótica em um processo repetível e escalável.',
        examples: ['Gwynne Shotwell', 'Sheryl Sandberg']
    },
    {
        id: 'connector',
        name: 'Conector de Ecossistemas',
        title: 'O Venture Builder',
        description: 'Enxerga o empreendedorismo como um jogo de alocação de recursos e conexões.',
        examples: ['Sam Altman', 'Jack Dorsey']
    },
    {
        id: 'specialist',
        name: 'Especialista de Carreira',
        title: 'O Pilar de Estabilidade',
        description: 'Profissional que busca excelência e crescimento dentro de grandes estruturas. Valoriza a profundidade institucional.',
        examples: []
    },
    {
        id: 'missionary',
        name: 'Missionário Cultural',
        title: 'O Fiel Escudeiro',
        description: 'Trabalha por um propósito maior. A motivação principal é a crença na missão da empresa e o ambiente de equipe.',
        examples: []
    }
];

export const QUESTIONS: Question[] = [
    // Bloco A - Solopreneur
    { id: 1, text: "Prefiro passar 5 horas automatizando uma tarefa do que delegá-la a alguém.", block: 'solopreneur' },
    { id: 2, text: "O sucesso para mim é ter controle total sobre meu tempo e agenda, sem prestar contas.", block: 'solopreneur' },
    { id: 3, text: "Reuniões de alinhamento e síncronas são, na maioria das vezes, obstáculos ao trabalho real.", block: 'solopreneur' },

    // Bloco B - Visionary
    { id: 4, text: "Sinto-me confortável quando as pessoas discordam das minhas ideias sobre o futuro.", block: 'visionary' },
    { id: 5, text: "Prefiro criar algo totalmente novo (do zero) do que melhorar um processo que já existe.", block: 'visionary' },
    { id: 6, text: "Meu foco principal está em identificar 'verdades' que a maioria do mercado ainda não percebeu.", block: 'visionary' },

    // Bloco C - Craftsman
    { id: 7, text: "Sinto frustração quando sou obrigado a gerir pessoas em vez de executar o trabalho técnico.", block: 'craftsman' },
    { id: 8, text: "A qualidade técnica e a 'arte' do que entrego são mais importantes do que prazos agressivos.", block: 'craftsman' },
    { id: 9, text: "Quero ser reconhecido como a maior autoridade técnica ou criativa na minha especialidade.", block: 'craftsman' },

    // Bloco D - Orchestrator
    { id: 10, text: "Sinto prazer em organizar processos caóticos e transformá-los em fluxos previsíveis.", block: 'orchestrator' },
    { id: 11, text: "Minha maior força é pegar algo que já funciona e fazer crescer em escala (10x ou 100x).", block: 'orchestrator' },
    { id: 12, text: "Prefiro definir métricas, prazos e KPIs do que criar a ideia original do produto.", block: 'orchestrator' },

    // Bloco E - Connector
    { id: 13, text: "Prefiro ter participações menores em vários negócios do que focar em apenas uma única empresa.", block: 'connector' },
    { id: 14, text: "Meu maior ativo profissional é a minha rede de contatos e minha capacidade de unir as pessoas certas.", block: 'connector' },
    { id: 15, text: "Tenho facilidade em identificar o potencial de um talento antes que ele se torne óbvio para o mercado.", block: 'connector' },

    // Bloco F - Specialist
    { id: 16, text: "Valorizo a segurança, os recursos e o prestígio que apenas uma grande organização pode oferecer.", block: 'specialist' },
    { id: 17, text: "Prefiro um plano de carreira claro e estabilidade financeira a correr riscos empreendedores.", block: 'specialist' },
    { id: 18, text: "Gosto de navegar pela complexidade política e institucional para realizar projetos de grande escala.", block: 'specialist' },

    // Bloco G - Missionary
    { id: 19, text: "Eu trabalharia com entusiasmo em um projeto pelo qual sou apaixonado, mesmo ganhando menos.", block: 'missionary' },
    { id: 20, text: "A cultura e o propósito da empresa são os fatores decisivos para eu aceitar um desafio.", block: 'missionary' },
    { id: 21, text: "Sinto que sou um embaixador da causa da minha empresa, agindo como a 'cola' da equipe.", block: 'missionary' }
];

export const SCORING_LABELS = [
    { value: 1, label: "Discordo Totalmente" },
    { value: 2, label: "Discordo" },
    { value: 3, label: "Neutro" },
    { value: 4, label: "Concordo" },
    { value: 5, label: "Concordo Totalmente" }
];
