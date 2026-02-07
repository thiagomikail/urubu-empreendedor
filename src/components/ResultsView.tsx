import { motion } from 'framer-motion';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { PERSONAS } from '../data/quizData';
import type { PersonaId } from '../types/quiz';
import { RefreshCw } from 'lucide-react';

interface ResultsViewProps {
    scores: Record<PersonaId, number>;
    dominantPersonaId: PersonaId;
    onReset: () => void;
}

export function ResultsView({ scores, dominantPersonaId, onReset }: ResultsViewProps) {
    const persona = PERSONAS.find(p => p.id === dominantPersonaId)!;

    // Format data for chart
    const chartData = PERSONAS.map(p => ({
        subject: p.name.split(' ')[0], // Short name for axis
        fullSubject: p.name,
        A: scores[p.id as PersonaId],
        fullMark: 15, // Max score per block
    }));

    return (
        <div className="py-8 w-full max-w-4xl mx-auto space-y-12">

            {/* Header Result */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                    Seu Arquétipo Principal
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{persona.title}</h2>
                <h3 className="text-2xl text-purple-400 font-medium">{persona.name}</h3>
            </motion.div>

            {/* Description Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-6"
            >
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center">
                    {persona.description}
                </p>

                {persona.examples.length > 0 && (
                    <div className="border-t border-slate-800 pt-6">
                        <h4 className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-4 text-center">
                            Referências no Mercado
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {persona.examples.map(ex => (
                                <span key={ex} className="px-4 py-2 bg-slate-800 rounded-lg text-slate-200 font-medium">
                                    {ex}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Chart Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-1 gap-8"
            >
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
                    <h4 className="text-center text-slate-400 mb-6 font-medium">Mapa de Competências</h4>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 15]} tick={false} axisLine={false} />
                                <Radar
                                    name="Pontuação"
                                    dataKey="A"
                                    stroke="#8b5cf6"
                                    strokeWidth={3}
                                    fill="#8b5cf6"
                                    fillOpacity={0.3}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                                    itemStyle={{ color: '#c084fc' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 p-8 rounded-2xl text-center space-y-6"
            >
                <h3 className="text-2xl font-bold text-white mb-2">Próximos Passos</h3>

                <div className="bg-slate-950/50 rounded-xl p-6 border border-white/10">
                    <p className="text-lg md:text-xl font-medium text-white mb-2">
                        Sprint - criação de produtos digitais
                    </p>
                    <p className="text-slate-300 mb-4">
                        Domingos de manhã.
                    </p>
                    <div className="mb-6">
                        <div className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-200 text-sm rounded-full font-medium border border-purple-500/30 mb-4">
                            Exclusivo Uai!rrior: R$ 1,00
                        </div>
                        <a
                            href="https://pay.hotmart.com/F104313592D?off=6u97c38p"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full sm:w-auto px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                        >
                            Garantir Minha Vaga
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Actions */}
            <div className="flex justify-center pt-8">
                <button
                    onClick={onReset}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                    <RefreshCw size={18} />
                    <span>Refazer Teste</span>
                </button>
            </div>

        </div>
    );
}
