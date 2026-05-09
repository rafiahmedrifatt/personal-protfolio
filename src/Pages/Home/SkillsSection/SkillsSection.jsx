import React from 'react';
import { motion } from 'framer-motion';

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

const stats = [
    { label: 'Projects shipped', value: '12+', detail: 'Production deployments spanning dashboards, marketplaces, and internal tools.' },
    { label: 'Main stack', value: 'MERN', detail: 'React + Node.js with TypeScript, MongoDB, and opinionated tooling.' },
    { label: 'Frontend focus', value: 'UX first', detail: 'Motion, accessibility, and performance baked into component systems.' }
];

const skillPillars = [
    {
        title: 'Frontend Experience',
        emoji: '🎨',
        bg: 'rgba(124,58,237,0.12)',
        border: 'rgba(124,58,237,0.25)',
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
        bg: 'rgba(99,102,241,0.12)',
        border: 'rgba(99,102,241,0.25)',
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
        bg: 'rgba(79,70,229,0.12)',
        border: 'rgba(79,70,229,0.25)',
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

const growthAreas = [
    {
        title: 'Testing depth',
        detail: 'Expanding coverage with component harnesses and contract tests for API consumers.'
    },
    {
        title: 'Edge runtimes',
        detail: 'Exploring serverless patterns for latency-sensitive features and personalization.'
    }
];

const SkillsSection = () => {
    return (
        <motion.section
            id='skills'
            className="min-h-screen py-14 sm:py-16 lg:py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0C0C1D 0%, #050508 50%, #0F0A1E 100%)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            {/* Glow orbs */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

                {/* Header */}
                <motion.div className="text-center space-y-4" variants={cardVariants}>
                    <span
                        className='inline-block px-6 py-3 rounded-full text-sm font-medium shadow-lg'
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))',
                            border: '1px solid rgba(139,92,246,0.35)',
                            color: '#C4B5FD',
                            boxShadow: '0 0 20px rgba(124,58,237,0.15)'
                        }}
                    >
                        🧰 Skillset Overview
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Crafting full-stack experiences end to end
                    </h2>
                    <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
                        I blend expressive UI engineering with pragmatic backend development so ideas move from concept to production quickly.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div className="grid gap-6 sm:gap-8 md:grid-cols-3" variants={listVariants}>
                    {stats.map((item) => (
                        <motion.div
                            key={item.label}
                            className="rounded-3xl p-6 sm:p-7 shadow-xl text-left space-y-3"
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}
                            variants={cardVariants}
                            {...hoverLift}
                        >
                            <p className="text-3xl font-black text-white">{item.value}</p>
                            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#C4B5FD' }}>{item.label}</p>
                            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{item.detail}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">

                    {/* Skill Pillars */}
                    <motion.div className="space-y-8" variants={listVariants}>
                        {skillPillars.map((pillar) => (
                            <motion.div
                                key={pillar.title}
                                className="rounded-3xl p-6 sm:p-8 shadow-2xl"
                                style={{
                                    background: pillar.bg,
                                    border: `1px solid ${pillar.border}`
                                }}
                                variants={cardVariants}
                                {...hoverLift}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{pillar.emoji}</span>
                                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                                </div>
                                <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#E2E8F0' }}>
                                    {pillar.description}
                                </p>
                                <div className="space-y-3">
                                    {pillar.highlights.map((highlight) => (
                                        <motion.div
                                            key={highlight}
                                            className="flex items-start gap-3 rounded-2xl px-4 py-3"
                                            style={{
                                                background: 'rgba(5,5,8,0.6)',
                                                border: '1px solid rgba(139,92,246,0.15)'
                                            }}
                                            whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.2 } }}
                                        >
                                            <span className="mt-1 h-2 w-2 rounded-full flex-shrink-0" style={{ background: '#8B5CF6' }} />
                                            <span className="text-sm leading-relaxed" style={{ color: '#E2E8F0' }}>
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Sidebar */}
                    <motion.aside className="space-y-8" variants={listVariants}>

                        {/* Toolbox */}
                        <motion.div
                            className="rounded-3xl p-6 sm:p-7 shadow-xl space-y-4"
                            style={{
                                background: 'rgba(124,58,237,0.08)',
                                border: '1px solid rgba(139,92,246,0.25)'
                            }}
                            variants={cardVariants}
                        >
                            <h3 className="text-xl font-semibold text-white">Toolbox I reach for</h3>
                            <p className="text-sm" style={{ color: '#C4B5FD' }}>
                                Picked to accelerate delivery without sacrificing maintainability.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {toolbox.map((tool) => (
                                    <motion.span
                                        key={tool}
                                        className="px-3 py-1.5 rounded-full text-xs font-semibold"
                                        style={{
                                            background: 'rgba(5,5,8,0.8)',
                                            border: '1px solid rgba(139,92,246,0.2)',
                                            color: '#E2E8F0'
                                        }}
                                        whileHover={{ scale: 1.05, borderColor: 'rgba(139,92,246,0.5)' }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Growth Areas */}
                        <motion.div
                            className="rounded-3xl p-6 sm:p-7 shadow-xl space-y-4"
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)'
                            }}
                            variants={cardVariants}
                        >
                            <h3 className="text-xl font-semibold text-white">Active growth areas</h3>
                            <div className="space-y-4">
                                {growthAreas.map((area) => (
                                    <motion.div
                                        key={area.title}
                                        className="rounded-2xl px-4 py-4"
                                        style={{
                                            background: 'rgba(5,5,8,0.6)',
                                            border: '1px solid rgba(139,92,246,0.15)'
                                        }}
                                        whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#C4B5FD' }}>
                                            {area.title}
                                        </p>
                                        <p className="text-sm leading-relaxed mt-2" style={{ color: '#94A3B8' }}>
                                            {area.detail}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Collaboration Style */}
                        <motion.div
                            className="rounded-3xl p-6 sm:p-7 shadow-xl space-y-3"
                            style={{
                                background: 'rgba(99,102,241,0.08)',
                                border: '1px solid rgba(99,102,241,0.25)'
                            }}
                            variants={cardVariants}
                        >
                            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#A5B4FC' }}>
                                Collaboration style
                            </p>
                            <p className="text-base leading-relaxed" style={{ color: '#E2E8F0' }}>
                                I document decisions, keep async stakeholders in the loop, and use motion and prototypes to communicate ideas quickly.
                            </p>
                        </motion.div>
                    </motion.aside>
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
