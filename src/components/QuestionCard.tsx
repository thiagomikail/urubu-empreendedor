import { motion } from 'framer-motion';
import { SCORING_LABELS } from '../data/quizData';
import type { Question } from '../types/quiz';
import { clsx } from 'clsx';

interface QuestionCardProps {
    question: Question;
    onAnswer: (score: number) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-2xl"
            >
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center leading-snug">
                    {question.text}
                </h3>

                <div className="space-y-3">
                    {SCORING_LABELS.map((option) => (
                        <motion.button
                            key={option.value}
                            whileHover={{ scale: 1.01, backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => onAnswer(option.value)}
                            className={clsx(
                                "w-full p-4 rounded-xl border border-slate-700 text-left transition-all",
                                "hover:border-blue-500/50 flex justify-between items-center group",
                                "focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            )}
                        >
                            <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                                {option.label}
                            </span>
                            <div className={clsx(
                                "w-5 h-5 rounded-full border-2 border-slate-600 transition-colors",
                                "group-hover:border-blue-400"
                            )} />
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
