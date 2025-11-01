import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const listVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.16 }
    }
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
        tone: 'from-blue-500/20 to-cyan-500/10',
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
        tone: 'from-emerald-500/20 to-lime-500/10',
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
        tone: 'from-purple-500/20 to-indigo-500/10',
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
    'TypeScript',
    'Next.js & Vite',
    'Redux Toolkit',
    'React Query',
    'TailwindCSS',
    'Figma',
    'Storybook',
    'Stripe SDK',
    'Firebase Auth',
    'Postman',
    'PNPM / NPM',
    'GitHub Actions'
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
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-14 sm:py-16 lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <motion.div className="text-center space-y-4" variants={cardVariants}>
                    <span className='inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 shadow-lg'>
                        🧰 Skillset Overview
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Crafting full-stack experiences end to end
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        I blend expressive UI engineering with pragmatic backend development so ideas move from concept to production quickly.
                    </p>
                </motion.div>

                <motion.div className="grid gap-6 sm:gap-8 md:grid-cols-3" variants={listVariants}>
                    {stats.map((item) => (
                        <motion.div
                            key={item.label}
                            className="rounded-3xl border border-gray-700/50 bg-gray-900/70 p-6 sm:p-7 shadow-xl text-left space-y-3"
                            variants={cardVariants}
                            {...hoverLift}
                        >
                            <p className="text-3xl font-black text-white">{item.value}</p>
                            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">{item.label}</p>
                            <p className="text-sm text-gray-300 leading-relaxed">{item.detail}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">
                    <motion.div className="space-y-8" variants={listVariants}>
                        {skillPillars.map((pillar) => (
                            <motion.div
                                key={pillar.title}
                                className={`rounded-3xl border border-gray-700/40 bg-gradient-to-br ${pillar.tone} p-6 sm:p-8 shadow-2xl`}
                                variants={cardVariants}
                                {...hoverLift}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl">{pillar.emoji}</span>
                                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-5">
                                    {pillar.description}
                                </p>
                                <div className="space-y-3">
                                    {pillar.highlights.map((highlight) => (
                                        <motion.div
                                            key={highlight}
                                            className="flex items-start gap-3 rounded-2xl bg-gray-900/50 border border-gray-700/40 px-4 py-3"
                                            whileHover={{ scale: 1.02, x: 4, transition: { duration: 0.2 } }}
                                        >
                                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                                            <span className="text-sm text-gray-100 leading-relaxed">
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.aside className="space-y-8" variants={listVariants}>
                        <motion.div
                            className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6 sm:p-7 shadow-xl space-y-4"
                            variants={cardVariants}
                        >
                            <h3 className="text-xl font-semibold text-white">Toolbox I reach for</h3>
                            <p className="text-sm text-blue-100">
                                Picked to accelerate delivery without sacrificing maintainability.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {toolbox.map((tool) => (
                                    <motion.span
                                        key={tool}
                                        className="px-3 py-1.5 rounded-full bg-gray-900/80 border border-gray-700 text-xs font-semibold text-gray-100"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl border border-gray-700/40 bg-gray-900/70 p-6 sm:p-7 shadow-xl space-y-4"
                            variants={cardVariants}
                        >
                            <h3 className="text-xl font-semibold text-white">Active growth areas</h3>
                            <div className="space-y-4">
                                {growthAreas.map((area) => (
                                    <motion.div
                                        key={area.title}
                                        className="rounded-2xl border border-gray-700/40 bg-gray-800/60 px-4 py-4"
                                        whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                                    >
                                        <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                                            {area.title}
                                        </p>
                                        <p className="text-sm text-gray-300 leading-relaxed mt-2">
                                            {area.detail}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 sm:p-7 shadow-xl space-y-3"
                            variants={cardVariants}
                        >
                            <p className="text-xs font-semibold tracking-wide text-emerald-200 uppercase">
                                Collaboration style
                            </p>
                            <p className="text-base text-gray-100 leading-relaxed">
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
