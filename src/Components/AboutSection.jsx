import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: '3+', label: 'Years coding' },
    { value: '20+', label: 'Projects built' },
    { value: '10+', label: 'Technologies' },
    { value: '∞', label: 'Curiosity' },
];

const SectionLabel = ({ index, title }) => (
    <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-xs text-[var(--accent)]">{index}</span>
        <h2 className="text-2xl md:text-4xl font-semibold text-white">{title}</h2>
        <span className="flex-1 h-px bg-[var(--border)]" />
    </div>
);

const AboutSection = () => {
    return (
        <section id="about" className="relative py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionLabel index="01 / ABOUT" title="Who I am" />

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                        <div className="space-y-5 text-[var(--text-dim)] text-base md:text-lg leading-relaxed">
                            <p>
                                I&apos;m a full stack developer focused on turning ideas into
                                polished, production-ready products. I care about performance,
                                clean architecture, and interfaces that feel effortless.
                            </p>
                            <p>
                                From designing REST APIs and databases to crafting pixel-tight
                                React front-ends, I enjoy owning the whole journey — the kind of
                                work where engineering meets craft.
                            </p>
                            <p className="text-white">
                                When I&apos;m not shipping, I&apos;m exploring new tech, refining
                                my workflow, and chasing that next clean solution.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="panel rounded-2xl p-6 hover:border-[var(--accent)]/40 transition-colors"
                                >
                                    <div className="text-3xl md:text-4xl font-semibold text-gradient">
                                        {s.value}
                                    </div>
                                    <div className="mt-2 font-mono text-xs text-[var(--text-dim)]">
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
