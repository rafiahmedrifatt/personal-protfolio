import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import profilePhoto from "../images/profilePhoto.png"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const socialLinks = [
    { href: 'https://www.facebook.com/rafiahmedrifatt', icon: 'facebook' },
    { href: 'https://github.com/rafiahmedrifatt', icon: 'github' },
    { href: 'https://www.linkedin.com/in/rafiahmedrifatt/', icon: 'linkedin' }
];

const socialIcons = {
    facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
};

const HeroSection = () => {
    return (
        <motion.section
            className='min-h-screen relative overflow-hidden'
            style={{ background: 'linear-gradient(135deg, #050508 0%, #0C0C1D 40%, #0F0A1E 70%, #080510 100%)' }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            aria-label="Hero section introducing Rafi Ahmed Rifat"
        >
            {/* ── Ambient Glow Orbs ── */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
                animate={{ scale: [1.15, 1, 1.15], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 65%)', filter: 'blur(80px)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ── Subtle Grid Overlay ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* ── Main Content ── */}
            <div className='flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 w-full max-w-7xl mx-auto relative z-10 min-h-screen'>

                {/* Left Content */}
                <motion.article
                    className='lg:w-2/3 space-y-6 sm:space-y-8 text-left'
                    variants={itemVariants}
                >
                    {/* Greeting Badge */}
                    <motion.div variants={itemVariants}>
                        <motion.span
                            className='inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4'
                            style={{
                                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))',
                                border: '1px solid rgba(139,92,246,0.35)',
                                color: '#C4B5FD',
                                boxShadow: '0 0 20px rgba(124,58,237,0.15)'
                            }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                            👋 Welcome!
                        </motion.span>
                        <motion.p
                            className='text-lg sm:text-xl lg:text-2xl font-light'
                            style={{ color: '#94A3B8' }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Hi, I am
                        </motion.p>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight'
                        variants={itemVariants}
                    >
                        <motion.span
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #C4B5FD 40%, #A78BFA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            Rafi Ahmed
                        </motion.span>{' '}
                        <motion.span
                            className='relative inline-block'
                            style={{ color: '#8B5CF6' }}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            Rifat
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7C3AED, #6366F1)' }}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold'
                        style={{ color: '#E2E8F0' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        Full Stack Software Developer
                    </motion.h2>

                    {/* Description Card */}
                    <motion.div
                        className='max-w-2xl backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl'
                        style={{
                            background: 'rgba(15, 10, 30, 0.75)',
                            border: '1px solid rgba(139,92,246,0.2)',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)'
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.1)" }}
                    >
                        <p className='text-base sm:text-lg leading-relaxed' style={{ color: '#94A3B8' }}>
                            I am a <span className="font-semibold" style={{ color: '#A78BFA' }}>Full Stack Software Developer</span> specializing in scalable architecture and performant applications.
                            I focus on building secure, responsive web platforms that solve complex business challenges.
                        </p>
                        <p className='text-base sm:text-lg leading-relaxed mt-3 sm:mt-4' style={{ color: '#94A3B8' }}>
                            Constantly evolving with modern technologies, because <span className="italic font-medium" style={{ color: '#818CF8' }}>excellence is a continuous journey.</span>
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className='flex gap-4 sm:gap-6 pt-2'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.icon}
                                href={social.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300'
                                style={{
                                    background: 'rgba(15,10,30,0.8)',
                                    border: '1px solid rgba(139,92,246,0.25)',
                                    color: '#94A3B8',
                                    backdropFilter: 'blur(10px)'
                                }}
                                whileHover={{
                                    scale: 1.12,
                                    rotate: 5,
                                    backgroundColor: 'rgba(124,58,237,0.2)',
                                    borderColor: 'rgba(139,92,246,0.7)',
                                    color: '#C4B5FD',
                                    boxShadow: '0 0 25px rgba(124,58,237,0.35)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.7 + index * 0.1, duration: 0.5 }}
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-label={social.icon}>
                                    <path d={socialIcons[social.icon]} />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3, duration: 0.8 }}
                    >
                        <motion.a
                            href='https://drive.google.com/uc?export=download&id=1RN3sJ-M8K_nr09Fr36WDSisajkBE4dYT'
                            className='inline-flex items-center gap-3 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 relative overflow-hidden'
                            style={{
                                background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                                boxShadow: '0 10px 30px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 50px rgba(124,58,237,0.6), inset 0 1px 0 rgba(255,255,255,0.15)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Download CV</span>
                            <motion.svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </motion.svg>
                        </motion.a>
                    </motion.div>
                </motion.article>

                {/* Right — Profile Image */}
                <motion.figure
                    className='lg:w-1/3 mt-8 sm:mt-12 lg:mt-0 flex justify-center'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        className='relative'
                        variants={floatingVariants}
                        animate="animate"
                    >
                        {/* Outer glow ring */}
                        <div
                            className='absolute -inset-4 rounded-3xl pointer-events-none'
                            style={{
                                background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(99,102,241,0.3))',
                                filter: 'blur(20px)',
                                opacity: 0.6
                            }}
                        />
                        {/* Inner border ring */}
                        <div
                            className='absolute -inset-[3px] rounded-2xl sm:rounded-3xl pointer-events-none'
                            style={{
                                background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(99,102,241,0.4), rgba(124,58,237,0.6))',
                                padding: '2px'
                            }}
                        />

                        <motion.img
                            src={profilePhoto}
                            alt="Rafi Ahmed Rifat - Full Stack Developer"
                            className='relative w-70 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover object-top rounded-2xl sm:rounded-3xl shadow-2xl'
                            style={{
                                border: '3px solid rgba(139,92,246,0.5)',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.25)'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            whileHover={{ scale: 1.05 }}
                            loading="eager"
                            decoding="async"
                        />
                    </motion.div>
                </motion.figure>
            </div>
        </motion.section>
    );
};

export default HeroSection;
