import React from 'react';
import { motion } from 'framer-motion';

const groups = [
    {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Framer Motion'],
    },
    {
        title: 'Backend',
        items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth'],
    },
    {
        title: 'Database & Tools',
        items: ['MongoDB', 'Firebase', 'Git', 'Vite'],
    },
];

const marquee = ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'Firebase', 'Git', 'Vite'];

const SkillsSection = () => {
    return (
        <section id="skills" className="relative py-28 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <span className="font-mono text-xs text-[var(--accent)]">02 / SKILLS</span>
                    <h2 className="text-2xl md:text-4xl font-semibold text-white">What I work with</h2>
                    <span className="flex-1 h-px bg-[var(--border)]" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {groups.map((g, gi) => (
                        <motion.div
                            key={g.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.12 }}
                            className="panel rounded-2xl p-6 hover:border-[var(--accent)]/40 transition-colors"
                        >
                            <h3 className="font-mono text-sm text-[var(--accent)] mb-5">{g.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {g.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)]/50 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* marquee strip */}
            <div className="mt-16 relative">
                <div className="flex whitespace-nowrap">
                    <div className="flex animate-marquee">
                        {[...marquee, ...marquee].map((m, i) => (
                            <span
                                key={i}
                                className="mx-8 font-mono text-3xl md:text-5xl font-semibold text-white/10 hover:text-[var(--accent)]/40 transition-colors"
                            >
                                {m} <span className="text-[var(--accent)]/30">/</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
