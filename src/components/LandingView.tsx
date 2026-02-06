import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit } from 'lucide-react';

interface LandingViewProps {
    onStart: () => void;
}

export function LandingView({ onStart }: LandingViewProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-purple-400 text-sm font-medium backdrop-blur-sm"
            >
                <BrainCircuit size={16} />
                <span>Análise de Perfil de Fundador</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 max-w-4xl"
            >
                Descubra o seu <br className="hidden md:block" />
                <span className="text-white">DNA Empreendedor</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
            >
                Solopreneur? Visionário? Orquestrador? Entenda suas forças ocultas e como elas moldam a maneira como você constrói negócios.
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onClick={onStart}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-lg text-lg font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all overflow-hidden"
            >
                <span className="relative z-10">Iniciar Diagnóstico</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.button>

        </div>
    );
}
