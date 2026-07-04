import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [count, setCount] = useState(1);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let current = 1;
        const interval = setInterval(() => {
            // ease-out: fast start, slow finish
            const step = current < 80 ? 2 : 1;
            current = Math.min(current + step, 100);
            setCount(current);
            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => setDone(true), 450);
            }
        }, 22);
        return () => clearInterval(interval);
    }, []);

    // lock scroll while loading
    useEffect(() => {
        document.body.style.overflow = done ? '' : 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [done]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center bg-grid"
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* glow orbs */}
                    <div className="absolute w-80 h-80 rounded-full bg-[var(--accent)]/10 blur-[120px]" />

                    {/* percentage */}
                    <div className="relative flex items-end gap-2 font-mono">
                        <motion.span
                            key={count}
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: 1 }}
                            className="text-7xl md:text-9xl font-semibold text-gradient glow-text tabular-nums leading-none"
                        >
                            {count}
                        </motion.span>
                        <span className="text-2xl md:text-4xl text-[var(--accent)] mb-2 md:mb-3">%</span>
                    </div>

                    {/* progress bar */}
                    <div className="relative mt-8 w-56 md:w-72 h-px bg-white/10 overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
                            animate={{ width: `${count}%` }}
                            transition={{ ease: 'linear' }}
                        />
                    </div>

                    <p className="relative mt-6 font-mono text-[10px] tracking-[0.3em] text-[var(--text-dim)]">
                        LOADING EXPERIENCE
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
