import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.03,
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const skillCards = [
        { icon: '⚛️', name: 'React',      bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)',  text: '#C4B5FD' },
        { icon: '💚', name: 'Node.js',    bg: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.3)',  text: '#A5B4FC' },
        { icon: '🟨', name: 'JavaScript', bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)', text: '#DDD6FE' },
        { icon: '🍃', name: 'MongoDB',    bg: 'rgba(79,70,229,0.12)',   border: 'rgba(79,70,229,0.3)',   text: '#A5B4FC' }
    ];

    const interests = [
        { icon: '💪', name: 'Working Out',     bg: 'rgba(124,58,237,0.1)',  border: 'rgba(124,58,237,0.25)' },
        { icon: '🚀', name: 'Entrepreneurship', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
        { icon: '🌍', name: 'Traveling',        bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' }
    ];

    return (
        <motion.div
            ref={ref}
            id='about'
            className='min-h-screen py-8 px-4 sm:px-6 lg:px-12 relative overflow-hidden'
            style={{ background: 'linear-gradient(135deg, #050508 0%, #0C0C1D 50%, #0F0A1E 100%)' }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Ambient glow orbs */}
            <motion.div
                className="absolute top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }}
                animate={{ scale: [1.3, 1, 1.3], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Section Header */}
                <motion.div className='text-center mb-12 sm:mb-16 lg:mb-20' variants={itemVariants}>
                    <motion.span
                        className='inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-8 shadow-lg'
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))',
                            border: '1px solid rgba(139,92,246,0.35)',
                            color: '#C4B5FD',
                            boxShadow: '0 0 20px rgba(124,58,237,0.15)'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        🚀 Get to know me
                    </motion.span>

                    <motion.h2
                        className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6'
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        About{' '}
                        <motion.span
                            className='relative'
                            style={{
                                background: 'linear-gradient(135deg, #C4B5FD 0%, #A78BFA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Me
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7C3AED, #6366F1)' }}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>

                    {/* Left — Text Cards */}
                    <motion.div className='space-y-6 sm:space-y-8 lg:space-y-10' variants={itemVariants}>

                        {/* My Journey */}
                        <motion.div
                            className='backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
                            }}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <motion.div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg"
                                    style={{
                                        background: 'rgba(124,58,237,0.15)',
                                        border: '1px solid rgba(139,92,246,0.3)'
                                    }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="text-xl sm:text-3xl">💻</span>
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">My Journey</h3>
                            </motion.div>
                            <motion.p
                                className='text-base sm:text-lg lg:text-xl leading-relaxed'
                                style={{ color: '#94A3B8' }}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                I'm Rafi, a <span className="font-semibold" style={{ color: '#A78BFA' }}>MERN Stack Developer</span> passionate about building modern, fast, and responsive web applications. My journey into programming started with curiosity — but quickly evolved into a full-on commitment to mastering the JavaScript ecosystem, especially React and backend technologies like MongoDB and Node.js.
                            </motion.p>
                        </motion.div>

                        {/* Beyond Code */}
                        <motion.div
                            className='backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
                            }}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            >
                                <motion.div
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg"
                                    style={{
                                        background: 'rgba(99,102,241,0.15)',
                                        border: '1px solid rgba(99,102,241,0.3)'
                                    }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="text-xl sm:text-3xl">✈️</span>
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Beyond Code</h3>
                            </motion.div>
                            <motion.p
                                className='text-base sm:text-lg lg:text-xl leading-relaxed'
                                style={{ color: '#94A3B8' }}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                            >
                                Outside of programming, I enjoy <span className="font-semibold" style={{ color: '#A78BFA' }}>Working Out</span>, <span className="font-semibold" style={{ color: '#C4B5FD' }}>Entrepreneurship</span>, and especially <span className="font-semibold" style={{ color: '#A78BFA' }}>Traveling</span>. Exploring new places helps me reset, gain fresh perspectives, and spark creative ideas for projects.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Right — Skills & Interests */}
                    <motion.div className='space-y-6 sm:space-y-8 lg:space-y-10' variants={itemVariants}>

                        {/* What I Do Best */}
                        <motion.div
                            className='backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
                            }}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                            >
                                <motion.span
                                    className="text-2xl sm:text-3xl lg:text-4xl"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🛠️
                                </motion.span>
                                What I Do Best
                            </motion.h3>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                {skillCards.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg"
                                        style={{ background: skill.bg, border: `1px solid ${skill.border}` }}
                                        variants={skillVariants}
                                        whileHover="hover"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                        transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                                    >
                                        <motion.div
                                            className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <div className="font-bold text-sm sm:text-base lg:text-lg" style={{ color: skill.text }}>{skill.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* My Interests */}
                        <motion.div
                            className='backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'
                            style={{
                                background: 'rgba(15, 10, 30, 0.8)',
                                border: '1px solid rgba(139,92,246,0.2)',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
                            }}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 2.2, duration: 0.6 }}
                            >
                                <motion.span
                                    className="text-2xl sm:text-3xl lg:text-4xl"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    🎯
                                </motion.span>
                                My Interests
                            </motion.h3>
                            <div className="space-y-4 sm:space-y-6">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={interest.name}
                                        className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg"
                                        style={{ background: interest.bg, border: `1px solid ${interest.border}` }}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                        transition={{ delay: 2.4 + index * 0.2, duration: 0.6 }}
                                        whileHover={{ scale: 1.05, x: 10, transition: { duration: 0.3 } }}
                                    >
                                        <motion.span
                                            className="text-xl sm:text-2xl lg:text-3xl"
                                            animate={{ rotate: [0, 15, -15, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        >
                                            {interest.icon}
                                        </motion.span>
                                        <span className="font-bold text-base sm:text-lg lg:text-xl" style={{ color: '#E2E8F0' }}>{interest.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutSection;