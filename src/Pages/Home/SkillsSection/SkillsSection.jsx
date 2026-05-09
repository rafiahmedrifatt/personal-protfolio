import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../../theme';

const sectionVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" }
    }
};

const hoverLift = {
    whileHover: {
        y: -6,
        scale: 1.01,
        transition: { duration: 0.25, ease: "easeOut" }
    }
};

const skillPillars = [
    {
        title: 'Frontend Experience',
        emoji: '🎨',
        description: 'Building responsive interfaces that feel polished, accessible, and resilient across devices.',
        highlights: [
            'React & modern hooks architecture',
            'Design systems with Tailwind & Radix',
            'State orchestration via RTK / React Query',
            'Framer Motion micro-interactions'
        ]
    },
    {
        title: 'Backend & Data',
        emoji: '🛠️',
        description: 'Stable APIs, clean data models, and real-world auth flows that scale with product needs.',
        highlights: [
            'RESTful APIs in Node.js & Express',
            'MongoDB Atlas, aggregation, indexing',
            'Auth, JWT, and role-based access',
            'Third-party integrations (Stripe, Firebase)'
        ]
    },
    {
        title: 'Product Delivery',
        emoji: '🚀',
        description: 'Shaping roadmaps, unblocking teams, and shipping iteratively with clear documentation.',
        highlights: [
            'TypeScript-first workflow',
            'Testing and QA with Jest & React Testing Library',
            'Project planning & async collaboration',
            'Continuous feedback loops with stakeholders'
        ]
    }
];

const toolbox = [
    'TypeScript', 'Next.js & Vite', 'Redux Toolkit', 'React Query',
    'TailwindCSS', 'Figma', 'Storybook', 'Stripe SDK',
    'Firebase Auth', 'Postman', 'PNPM / NPM', 'GitHub Actions'
];

const SkillsSection = () => {
    return (
        <motion.section
            id='skills'
            className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{ background: theme.bg.page }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            {/* Glow orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div style={{
                    position: 'absolute', top: '20%', left: '-10%', width: '500px', height: '500px',
                    background: theme.gradient.glow1, filter: 'blur(80px)'
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '-5%', width: '600px', height: '600px',
                    background: theme.gradient.glow2, filter: 'blur(80px)'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20">

                {/* Header */}
                <motion.div className="flex flex-col items-center text-center space-y-4" variants={cardVariants}>
                    <span 
                        className="text-sm font-bold tracking-[0.2em] uppercase mb-2 px-4 py-1.5 rounded-full"
                        style={{ 
                            color: theme.color.primary2, 
                            background: theme.gradient.badge,
                            border: `1px solid ${theme.border.subtle}`
                        }}
                    >
                        Skillset Overview
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        <span style={{ color: theme.text.high }}>Crafting full-stack </span>
                        <span style={{ 
                            background: theme.gradient.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>experiences</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: theme.text.low }}>
                        I blend expressive UI engineering with pragmatic backend development so ideas move from concept to production quickly.
                    </p>
                </motion.div>

                {/* Skill Pillars Grid */}
                <motion.div className="grid lg:grid-cols-3 gap-8 lg:gap-10" variants={listVariants}>
                    {skillPillars.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            className="rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group flex flex-col h-full"
                            style={{
                                background: theme.bg.surface,
                                border: `1px solid ${theme.border.default}`,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                            }}
                            variants={cardVariants}
                            {...hoverLift}
                        >
                            {/* Subtle decorative gradient in background of card */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-bl-full pointer-events-none"
                                 style={{ background: `linear-gradient(to bottom left, ${theme.color.primary}, transparent)` }} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                                        style={{ background: theme.gradient.card, border: `1px solid ${theme.border.subtle}` }}>
                                        {pillar.emoji}
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: theme.text.high }}>{pillar.title}</h3>
                                </div>
                                <p className="text-base leading-relaxed mb-8 font-light flex-grow" style={{ color: theme.text.mid }}>
                                    {pillar.description}
                                </p>
                                <div className="space-y-3">
                                    {pillar.highlights.map((highlight) => (
                                        <motion.div
                                            key={highlight}
                                            className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
                                            style={{
                                                background: 'rgba(15, 10, 30, 0.5)',
                                                border: `1px solid ${theme.border.subtle}`
                                            }}
                                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(15, 10, 30, 0.8)', transition: { duration: 0.2 } }}
                                        >
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.8)]" style={{ background: theme.color.primary }} />
                                            <span className="text-sm font-medium leading-relaxed" style={{ color: theme.text.mid }}>
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Toolbox */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 pt-8"
                    variants={cardVariants}
                >
                    {toolbox.map((tool) => (
                        <motion.span
                            key={tool}
                            className="px-5 py-2.5 rounded-2xl text-sm font-bold tracking-wide cursor-default"
                            style={{
                                background: theme.bg.card,
                                border: `1px solid ${theme.border.default}`,
                                color: theme.text.mid,
                                boxShadow: theme.shadow.card
                            }}
                            whileHover={{ scale: 1.05, borderColor: theme.color.primary, color: theme.text.high, boxShadow: `0 8px 25px rgba(124,58,237,0.4)` }}
                        >
                            {tool}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
