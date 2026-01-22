import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
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

    const socialVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 relative overflow-hidden'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            aria-label="Hero section introducing Rafi Ahmed Rifat"
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-400/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 w-full max-w-7xl mx-auto relative z-10 min-h-screen'>

                {/* Left Content */}
                <motion.article
                    className='lg:w-2/3 space-y-6 sm:space-y-8 text-left'
                    variants={itemVariants}
                >
                    {/* Greeting with animated badge */}
                    <motion.div variants={itemVariants}>
                        <motion.span
                            className='inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-400/20 to-green-500/20 text-cyan-300 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg border border-cyan-400/30'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            👋 Hello there!
                        </motion.span>
                        <motion.p
                            className='text-lg sm:text-xl lg:text-2xl text-slate-300 font-light'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Hi, my name is
                        </motion.p>
                    </motion.div>

                    {/* Animated Name with gradient */}
                    <motion.h1
                        className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight'
                        variants={itemVariants}
                    >
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-green-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            Rafi Ahmed
                        </motion.span>{' '}
                        <motion.span
                            className='text-cyan-400 relative'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                        >
                            Rifat
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h1>

                    {/* Animated tagline */}
                    <motion.h2
                        className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-slate-100'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            Web Developer
                        </motion.span>
                    </motion.h2>

                    {/* Animated Description Card */}
                    <motion.div
                        className='max-w-2xl bg-slate-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-700/50'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        }}
                    >
                        <motion.p
                            className='text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                        >
                            I'm a <span className="font-semibold text-cyan-400">MERN stack developer</span> fueled by curiosity and a passion for clean, purposeful code.
                            I love crafting fast, responsive web apps that solve real problems and leave a lasting impact.
                        </motion.p>
                        <motion.p
                            className='text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mt-3 sm:mt-4'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.8, duration: 0.8 }}
                        >
                            Always building, always learning, because <span className="italic font-medium text-green-500">good enough is never enough.</span>
                        </motion.p>
                    </motion.div>

                    {/* Animated Social Links */}
                    <motion.div
                        className='flex gap-4 sm:gap-6 pt-6 sm:pt-8'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3, duration: 0.8 }}
                    >
                        {[
                            { href: 'https://www.facebook.com/rafiahmedrifatt', icon: 'facebook', color: 'blue' },
                            { href: 'https://github.com/rafiahmedrifatt', icon: 'github', color: 'gray' },
                            { href: 'https://www.linkedin.com/in/rafiahmedrifatt/', icon: 'linkedin', color: 'blue' }
                        ].map((social, index) => (
                            <motion.a
                                key={social.icon}
                                href={social.href}
                                target='_blank'
                                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-slate-800/80 border-2 border-slate-600/50 text-slate-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl backdrop-blur-sm`}
                                variants={socialVariants}
                                whileHover="hover"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 3.2 + index * 0.1, duration: 0.5 }}
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                                    {social.icon === 'facebook' && (
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    )}
                                    {social.icon === 'github' && (
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    )}
                                    {social.icon === 'linkedin' && (
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    )}
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Animated CTA Button */}
                    <motion.div
                        className='pt-6 sm:pt-8'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5, duration: 0.8 }}
                    >
                        <motion.a
                            href='https://drive.google.com/uc?export=download&id=1RN3sJ-M8K_nr09Fr36WDSisajkBE4dYT'
                            className='inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl'
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px -12px rgba(56, 189, 248, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Download CV</span>
                            <motion.svg
                                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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

                {/* Animated Image Section */}
                <motion.figure
                    className='lg:w-1/3 mt-8 sm:mt-12 lg:mt-0 flex justify-center'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        className='relative group'
                        variants={floatingVariants}
                        animate="animate"
                    >
                        {/* Animated layered backgrounds */}
                        <motion.div
                            className='absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-cyan-400/20 to-green-500/20 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl'
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.3, 0.2]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className='absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-400/30 to-green-500/30 rounded-xl sm:rounded-2xl opacity-30'
                            animate={{
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Main image with animated frame */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src="/profilePhoto.jpg"
                                alt="Rafi Ahmed Rifat - Full Stack Developer"
                                className='relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-gray-700/50'
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                loading="eager"
                                decoding="async"
                            />
                        </motion.div>
                    </motion.div>
                </motion.figure>
            </div>
        </motion.section>
    );
};

export default HeroSection;
