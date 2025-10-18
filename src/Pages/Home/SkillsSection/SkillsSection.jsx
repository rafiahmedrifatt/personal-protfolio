import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Enhanced Marquee component with Framer Motion
const Marquee = ({ children, autoFill, pauseOnHover }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                className={`flex ${pauseOnHover ? 'hover:animate-pause' : ''}`}
                animate={{
                    x: [0, -50 + '%']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {children}
                {autoFill && children}
            </motion.div>
        </div>
    );
};

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.1,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const skills = [
        { name: 'JavaScript', image: 'https://i.ibb.co/v49XzP5t/js.png', color: 'yellow' },
        { name: 'React', image: 'https://i.ibb.co/vxbkQh3F/react.png', color: 'blue' },
        { name: 'Firebase', image: 'https://i.ibb.co/4Q0nJ3H/firebase.png', color: 'orange' },
        { name: 'MongoDB', image: 'https://i.ibb.co/fdtWjNpm/mongodb.png', color: 'green' },
        { name: 'Express', image: 'https://i.ibb.co/SDZw3Ft8/express.png', color: 'gray' },
        { name: 'Node.js', image: 'https://i.ibb.co/TxWGV4r5/node.png', color: 'green' }
    ];

    return (
        <motion.section
            ref={ref}
            id='skills'
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-8 sm:py-12 lg:py-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    variants={itemVariants}
                >
                    <motion.span
                        className='inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-500/30'
                        whileHover={{ scale: 1.05 }}
                    >
                        🛠️ My Skills
                    </motion.span>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        I can work{' '}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            with
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Continuously learning other Technologies as well
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
                    variants={containerVariants}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="group"
                            variants={skillVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                        >
                            <motion.div
                                className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300"
                                whileHover={{
                                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
                                }}
                            >
                                <motion.img
                                    src={skill.image}
                                    alt={skill.name}
                                    className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain mx-auto mb-3 sm:mb-4 filter drop-shadow-lg'
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 5
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.p
                                    className="text-xs sm:text-sm lg:text-base font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                >
                                    {skill.name}
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Marquee */}
                <motion.div
                    className="relative py-6 sm:py-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-700/50">
                        <Marquee autoFill={true} pauseOnHover={true}>
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={`marquee-${skill.name}`}
                                    className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                                >
                                    <motion.img
                                        src={skill.image}
                                        alt={skill.name}
                                        className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300'
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 10
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </Marquee>
                    </div>

                    {/* Subtle fade edges */}
                    <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;