import { useState, useEffect } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { Layout } from './components/Layout';
import { LandingView } from './components/LandingView';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { motion, AnimatePresence } from 'framer-motion';

type ViewSate = 'landing' | 'quiz' | 'analyzing' | 'results';

function App() {
  const [view, setView] = useState<ViewSate>('landing');
  const {
    state,
    currentQuestion,
    progress,
    handleAnswer,
    resetQuiz,
    getDominantPersona
  } = useQuiz();

  const startQuiz = () => {
    setView('quiz');
  };

  const handleQuizAnswer = (score: number) => {
    handleAnswer(score);
    // If we just answered the last question (transitioning from N-1 to N where N is length)
    // Note: useQuiz state update is async, but we can check if isCompleted will be true or check index
    // Actually useQuiz might need a small useEffect to trigger completion, or we check if we are at the end.
    // Let's rely on the state.isCompleted from the hook. But the hook updates on the NEXT render.
    // So let's wrap the logic.
  };

  // Effect to watch for completion
  useEffect(() => {
    if (state.isCompleted && view === 'quiz') {
      setView('analyzing');
      setTimeout(() => {
        setView('results');
      }, 2500); // 2.5s simulated analysis
    }
  }, [state.isCompleted, view]);

  const handleReset = () => {
    resetQuiz();
    setView('landing');
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">

        {view === 'landing' && (
          <motion.div
            key="landing"
            exit={{ opacity: 0, y: -20 }}
            className="flex-grow flex flex-col justify-center"
          >
            <LandingView onStart={startQuiz} />
          </motion.div>
        )}

        {view === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow flex flex-col"
          >
            <QuizView
              currentQuestion={currentQuestion}
              progress={progress}
              onAnswer={handleQuizAnswer}
            />
          </motion.div>
        )}

        {view === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-grow flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-purple-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-medium text-slate-300 animate-pulse">
              Analisando seu perfil...
            </h2>
          </motion.div>
        )}

        {view === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-grow"
          >
            <ResultsView
              scores={state.scores}
              dominantPersonaId={getDominantPersona()}
              onReset={handleReset}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </Layout>
  );
}

export default App;
