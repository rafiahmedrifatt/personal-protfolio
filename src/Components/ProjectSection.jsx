import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        name: 'Nexus Commerce',
        tag: 'Full Stack',
        desc: 'A MERN e-commerce platform with cart, secure payments, and an admin dashboard for real-time inventory.',
        stack: ['React', 'Node', 'MongoDB', 'Stripe'],
        live: '#',
        code: '#',
    },
    {
        name: 'TaskFlow',
        tag: 'Productivity',
        desc: 'A collaborative task manager with drag-and-drop boards, live updates, and role-based access.',
        stack: ['React', 'Express', 'Firebase'],
        live: '#',
        code: '#',
    },
    {
        name: 'DevHub',
        tag: 'Community',
        desc: 'A developer community with authentication, article publishing, and a personalized content feed.',
        stack: ['React', 'Node', 'JWT'],
        live: '#',
        code: '#',
    },
];

const ProjectSection = () => {
    return (
        <section id="work" className="relative py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <span className="font-mono text-xs text-[var(--accent)]">03 / WORK</span>
                    <h2 className="text-2xl md:text-4xl font-semibold text-white">Selected projects</h2>
                    <span className="flex-1 h-px bg-[var(--border)]" />
                </div>

                <div className="space-y-6">
                    {projects.map((p, i) => (
                        <motion.article
                            key={p.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ delay: i * 0.1 }}
                            className="group panel rounded-2xl p-8 hover:border-[var(--accent)]/40 transition-all relative overflow-hidden"
                        >
                            <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[var(--accent)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative flex flex-col md:flex-row md:items-center gap-6 justify-between">
                                <div className="max-w-2xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-xs text-[var(--accent)]">
                                            0{i + 1}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-widest text-[var(--text-dim)] uppercase border border-[var(--border)] rounded-full px-2 py-0.5">
                                            {p.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-gradient transition-all">
                                        {p.name}
                                    </h3>
                                    <p className="mt-3 text-[var(--text-dim)] leading-relaxed">{p.desc}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {p.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 border border-[var(--border)] text-[var(--text-dim)]"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex md:flex-col gap-3 shrink-0">
                                    <a
                                        href={p.live}
                                        className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium text-center hover:bg-[var(--accent)] transition-colors"
                                    >
                                        Live ↗
                                    </a>
                                    <a
                                        href={p.code}
                                        className="px-5 py-2.5 rounded-full border border-[var(--border)] text-white text-sm font-medium text-center hover:border-[var(--accent)] transition-colors"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
