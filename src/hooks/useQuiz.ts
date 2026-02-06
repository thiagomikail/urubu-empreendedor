import { useState } from 'react';
import { QUESTIONS } from '../data/quizData';
import type { QuizState, PersonaId } from '../types/quiz';

const INITIAL_STATE: QuizState = {
    currentQuestionIndex: 0,
    answers: {},
    isCompleted: false,
    scores: {
        solopreneur: 0,
        visionary: 0,
        craftsman: 0,
        orchestrator: 0,
        connector: 0,
        specialist: 0,
        missionary: 0,
    }
};

export function useQuiz() {
    const [state, setState] = useState<QuizState>(INITIAL_STATE);

    const currentQuestion = QUESTIONS[state.currentQuestionIndex];
    const progress = ((state.currentQuestionIndex) / QUESTIONS.length) * 100;

    const handleAnswer = (score: number) => {
        // Determine the block (persona) for the current question
        const questionBlock = currentQuestion.block;

        setState(prev => {
            const newScores = { ...prev.scores };
            newScores[questionBlock] += score;

            const nextIndex = prev.currentQuestionIndex + 1;
            const isFinished = nextIndex >= QUESTIONS.length;

            return {
                ...prev,
                answers: { ...prev.answers, [currentQuestion.id]: score },
                scores: newScores,
                currentQuestionIndex: isFinished ? prev.currentQuestionIndex : nextIndex,
                isCompleted: isFinished
            };
        });
    };

    const resetQuiz = () => {
        setState(INITIAL_STATE);
    };

    const getDominantPersona = (): PersonaId => {
        let maxScore = -1;
        let dominant: PersonaId = 'solopreneur'; // default

        (Object.entries(state.scores) as [PersonaId, number][]).forEach(([id, score]) => {
            if (score > maxScore) {
                maxScore = score;
                dominant = id;
            }
        });

        return dominant;
    };

    // Sort personas by score for the chart/results
    const getSortedResults = () => {
        return (Object.entries(state.scores) as [PersonaId, number][])
            .sort(([, a], [, b]) => b - a);
    };

    return {
        state,
        currentQuestion,
        progress,
        handleAnswer,
        resetQuiz,
        getDominantPersona,
        getSortedResults
    };
}
