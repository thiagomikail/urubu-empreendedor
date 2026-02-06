import type { Question } from '../types/quiz';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';

interface QuizViewProps {
    currentQuestion: Question;
    progress: number;
    onAnswer: (score: number) => void;
}

export function QuizView({ currentQuestion, progress, onAnswer }: QuizViewProps) {
    return (
        <div className="flex flex-col flex-grow justify-center py-12">
            <ProgressBar progress={progress} />
            <div className="w-full max-w-4xl mx-auto px-4">
                <div className="mb-8 text-center text-slate-500 text-sm font-medium uppercase tracking-wider">
                    Pergunta {currentQuestion.id}
                </div>
                <QuestionCard
                    question={currentQuestion}
                    onAnswer={onAnswer}
                />
            </div>
        </div>
    );
}
