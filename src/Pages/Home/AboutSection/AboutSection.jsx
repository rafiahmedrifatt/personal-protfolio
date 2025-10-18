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
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
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
        <motion.div
            ref={ref}
            id='about'
            className='min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 py-8 px-4 sm:px-6 lg:px-12 relative overflow-hidden'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Animated Section Header */}
                <motion.div
                    className='text-center mb-12 sm:mb-16 lg:mb-20'
                    variants={itemVariants}
                >
                    <motion.span
                        className='inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-8 shadow-lg border border-blue-500/30'
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
                            className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Me
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>
                    {/* Left - Text Content */}
                    <motion.div
                        className='space-y-6 sm:space-y-8 lg:space-y-10'
                        variants={itemVariants}
                    >
                        {/* About Text Cards */}
                        <motion.div
                            className='bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700/50'
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
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg border border-blue-500/30"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="text-xl sm:text-3xl">💻</span>
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">My Journey</h3>
                            </motion.div>
                            <motion.p
                                className='text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed'
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                I'm Rafi, a <span className="font-semibold text-blue-400">MERN Stack Developer</span> passionate about building modern, fast, and responsive web applications. My journey into programming started with curiosity — but quickly evolved into a full-on commitment to mastering the JavaScript ecosystem, especially React and backend technologies like MongoDB and Node.js.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className='bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700/50'
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
                                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg border border-purple-500/30"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="text-xl sm:text-3xl">✈️</span>
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Beyond Code</h3>
                            </motion.div>
                            <motion.p
                                className='text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed'
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                            >
                                Outside of programming, I'm someone who enjoys <span className="font-semibold text-purple-400">Working Out</span>, <span className="font-semibold text-blue-400">Entrepreneurship</span>, and especially <span className="font-semibold text-green-400">Traveling</span>. Exploring new places helps me reset, gain fresh perspectives, and even sparks creative ideas for projects. Whether it's a short local trip or a long journey, I believe travel fuels personal growth and broadens how I see both people and technology.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Right - Skills & Interests */}
                    <motion.div
                        className='space-y-6 sm:space-y-8 lg:space-y-10'
                        variants={itemVariants}
                    >
                        {/* Skills Section */}
                        <motion.div
                            className='bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700/50'
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
                                {[
                                    { icon: '⚛️', name: 'React', color: 'blue' },
                                    { icon: '💚', name: 'Node.js', color: 'green' },
                                    { icon: '🟨', name: 'JavaScript', color: 'yellow' },
                                    { icon: '🍃', name: 'MongoDB', color: 'emerald' }
                                ].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className={`bg-gradient-to-r from-${skill.color}-500/10 to-${skill.color}-600/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-${skill.color}-500/20`}
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
                                        <div className={`font-bold text-${skill.color}-300 text-sm sm:text-base lg:text-lg`}>{skill.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Interests Section */}
                        <motion.div
                            className='bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-700/50'
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
                                {[
                                    { icon: '💪', name: 'Working Out', color: 'red' },
                                    { icon: '🚀', name: 'Entrepreneurship', color: 'blue' },
                                    { icon: '🌍', name: 'Traveling', color: 'green' }
                                ].map((interest, index) => (
                                    <motion.div
                                        key={interest.name}
                                        className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-${interest.color}-500/10 to-${interest.color}-600/10 rounded-xl sm:rounded-2xl shadow-lg border border-${interest.color}-500/20`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                        transition={{ delay: 2.4 + index * 0.2, duration: 0.6 }}
                                        whileHover={{
                                            scale: 1.05,
                                            x: 10,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <motion.span
                                            className="text-xl sm:text-2xl lg:text-3xl"
                                            animate={{ rotate: [0, 15, -15, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        >
                                            {interest.icon}
                                        </motion.span>
                                        <span className="font-bold text-gray-200 text-base sm:text-lg lg:text-xl">{interest.name}</span>
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