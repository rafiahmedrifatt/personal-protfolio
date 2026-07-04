import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../images/profilePhoto.png';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
        >
            {/* orbs */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-[120px] animate-floaty" />
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-[var(--accent-2)]/10 blur-[120px] animate-floaty" />

            {/* rotating ring */}
            <div className="absolute w-[70vw] h-[70vw] max-w-[720px] max-h-[720px] rounded-full border border-white/5 animate-spin-slow" />
            <div className="absolute w-[45vw] h-[45vw] max-w-[460px] max-h-[460px] rounded-full border border-white/[0.06] animate-spin-slow" style={{ animationDirection: 'reverse' }} />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* text */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-mono text-xs md:text-sm tracking-[0.35em] text-[var(--accent)] mb-6"
                    >
                        &lt;/&gt; FULL STACK DEVELOPER
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="text-5xl md:text-7xl font-semibold tracking-tight text-gradient glow-text leading-[0.95]"
                    >
                        Rafi Ahmed<br />Rifat
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="mt-8 max-w-xl mx-auto md:mx-0 text-[var(--text-dim)] text-base md:text-lg leading-relaxed"
                    >
                        I build fast, scalable web experiences with the MERN stack —
                        engineering clean interfaces and resilient backends for the modern web.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4"
                    >
                        <a
                            href="#work"
                            className="px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-[var(--accent)] transition-colors"
                        >
                            View my work
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-full border border-[var(--border)] text-white font-medium text-sm hover:border-[var(--accent)] transition-colors"
                        >
                            Get in touch
                        </a>
                    </motion.div>
                </div>

                {/* image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-8 rounded-full bg-[var(--accent)]/20 blur-[60px]" />
                        <img
                            src={profilePhoto}
                            alt="Rafi Ahmed Rifat"
                            className="relative w-64 md:w-96 lg:w-[26rem] h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)]">
                <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
                <span className="w-px h-10 bg-gradient-to-b from-[var(--accent)] to-transparent" />
            </div>
        </section>
    );
};

export default HeroSection;
