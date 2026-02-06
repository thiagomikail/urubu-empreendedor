export type PersonaId = 'solopreneur' | 'visionary' | 'craftsman' | 'orchestrator' | 'connector' | 'specialist' | 'missionary';

export interface Persona {
    id: PersonaId;
    name: string;
    title: string;
    description: string;
    examples: string[];
}

export interface Question {
    id: number;
    text: string;
    block: PersonaId;
}

export interface QuizState {
    currentQuestionIndex: number;
    answers: Record<number, number>; // questionId -> score (1-5)
    isCompleted: boolean;
    scores: Record<PersonaId, number>;
}
