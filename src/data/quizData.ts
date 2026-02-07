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
    { id: 1, text: "Em trabalhos em grupo, prefiro fazer a parte técnica difícil sozinho do que depender dos outros.", block: 'solopreneur' },
    { id: 2, text: "Meu sonho é trabalhar remotamente, viajando, sem ter um chefe controlando meu horário.", block: 'solopreneur' },
    { id: 3, text: "Acho que a maioria das aulas presenciais poderiam ser substituídas por um PDF ou vídeo gravado.", block: 'solopreneur' },

    // Bloco B - Visionary
    { id: 4, text: "Gosto de propor projetos ou TCCs que os professores acham 'arriscados demais' ou 'impossíveis'.", block: 'visionary' },
    { id: 5, text: "Prefiro criar uma Startup do zero do que entrar em um programa de Trainee concorrido.", block: 'visionary' },
    { id: 6, text: "Tenho facilidade em ver como tecnologias emergentes (IA, Blockchain) vão mudar meu curso.", block: 'visionary' },

    // Bloco C - Craftsman
    { id: 7, text: "Prefiro passar o dia programando ou no laboratório do que organizando o cronograma do grupo.", block: 'craftsman' },
    { id: 8, text: "Fico obcecado em deixar meu código ou projeto perfeito, mesmo que isso custe noites de sono.", block: 'craftsman' },
    { id: 9, text: "Quero ser reconhecido como a referência técnica da minha turma em um assunto específico.", block: 'craftsman' },

    // Bloco D - Orchestrator
    { id: 10, text: "Nos trabalhos em grupo, sou eu quem define prazos, organiza o Drive e cobra as entregas de todo mundo.", block: 'orchestrator' },
    { id: 11, text: "Tenho prazer em criar planilhas e cronogramas para organizar minha vida acadêmica e financeira.", block: 'orchestrator' },
    { id: 12, text: "Gosto mais de coordenar a execução de um evento da faculdade do que ter a ideia inicial.", block: 'orchestrator' },

    // Bloco E - Connector
    { id: 13, text: "Conheço gente de vários cursos e atléticas, e adoro conectar pessoas para criar projetos juntos.", block: 'connector' },
    { id: 14, text: "Sinto que meu networking vale mais do que minhas notas no final do semestre.", block: 'connector' },
    { id: 15, text: "Sou bom em convencer pessoas a entrarem nos meus times para hackathons ou projetos de extensão.", block: 'connector' },

    // Bloco F - Specialist
    { id: 16, text: "Meu objetivo é entrar em um programa de Trainee de uma grande multinacional e construir carreira.", block: 'specialist' },
    { id: 17, text: "Prefiro a estabilidade de um bom estágio em empresa grande do que o risco de empreender agora.", block: 'specialist' },
    { id: 18, text: "Gosto de entender a fundo como funcionam os processos de grandes indústrias ou corporações.", block: 'specialist' },

    // Bloco G - Missionary
    { id: 19, text: "Prefiro trabalhar em uma Startup ou projeto de impacto social, mesmo ganhando menos que no banco.", block: 'missionary' },
    { id: 20, text: "Só consigo me dedicar 100% se eu acreditar que o projeto vai ajudar de verdade as pessoas.", block: 'missionary' },
    { id: 21, text: "Sinto que sou a pessoa que mantem o clima do time lá em cima quando as coisas dão errado.", block: 'missionary' }
];

export const SCORING_LABELS = [
    { value: 1, label: "Discordo Totalmente" },
    { value: 2, label: "Discordo" },
    { value: 3, label: "Neutro" },
    { value: 4, label: "Concordo" },
    { value: 5, label: "Concordo Totalmente" }
];
