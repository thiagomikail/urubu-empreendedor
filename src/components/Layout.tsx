import { clsx } from 'clsx';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function Layout({ children, className }: LayoutProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden font-sans selection:bg-purple-500/30">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <main className={clsx("relative z-10 flex-grow flex flex-col p-6 md:p-12 max-w-7xl mx-auto w-full", className)}>
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="relative z-10 p-6 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Urubu Empreendedor. Descubra seu DNA.</p>
            </footer>
        </div>
    );
}
