import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profilePhoto from '../../../images/aboutme.png';
import { theme } from '../../../theme';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section
            ref={ref}
            id="about"
            className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ background: theme.bg.page }}
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div style={{
                    position: 'absolute', top: '10%', right: '-5%', width: '600px', height: '600px',
                    background: theme.gradient.glow1, filter: 'blur(80px)'
                }} />
                <div style={{
                    position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px',
                    background: theme.gradient.glow2, filter: 'blur(80px)'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16 sm:mb-24 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span
                        className="text-sm font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
                        style={{
                            color: theme.color.primary2,
                            background: theme.gradient.badge,
                            border: `1px solid ${theme.border.subtle}`
                        }}
                    >
                        About Me
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                        <span style={{ color: theme.text.high }}>Who I </span>
                        <span style={{
                            background: theme.gradient.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Am</span>
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center lg:justify-center relative group"
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="relative z-10">
                            {/* Animated glowing border behind the image */}
                            <motion.div
                                className="absolute -inset-1 rounded-2xl opacity-70 group-hover:opacity-100 transition duration-500 blur-md"
                                style={{ background: theme.gradient.primary }}
                                animate={{ rotate: [0, 5, 0, -5, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />

                            <img
                                src={profilePhoto}
                                alt="Rafi Ahmed Rifat"
                                className="relative z-10 w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                style={{
                                    border: `1px solid ${theme.border.strong}`,
                                    boxShadow: theme.shadow.image
                                }}
                            />

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md"
                                style={{
                                    background: 'rgba(124, 58, 237, 0.8)',
                                    border: `1px solid ${theme.border.strong}`,
                                    boxShadow: theme.shadow.button,
                                    color: theme.text.high
                                }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="text-xl">🚀</span>
                                <span className="font-bold text-sm tracking-wide whitespace-nowrap">
                                    Open to Work
                                </span>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-dashed opacity-50 z-0 pointer-events-none"
                                style={{ borderColor: theme.color.primary }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full border border-dotted opacity-30 z-0 pointer-events-none"
                                style={{ borderColor: theme.color.secondary }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        {/* Intro Card */}
                        <div
                            className="p-8 sm:p-10 rounded-3xl backdrop-blur-xl relative overflow-hidden group"
                            style={{
                                background: theme.bg.card,
                                border: `1px solid ${theme.border.default}`,
                                boxShadow: theme.shadow.card
                            }}
                        >
                            {/* Card Hover Gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: theme.gradient.cardHover }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-3xl sm:text-4xl font-extrabold mb-2" style={{ color: theme.text.high }}>
                                    Rafi Ahmed Rifat
                                </h3>
                                <p className="text-lg font-semibold tracking-wide uppercase mb-6" style={{ color: theme.color.primary2 }}>
                                    MERN Stack Developer
                                </p>

                                <div className="space-y-5 text-base sm:text-lg leading-relaxed font-light" style={{ color: theme.text.low }}>
                                    <p>
                                        I'm a <strong style={{ color: theme.text.high, fontWeight: 600 }}>full-stack developer</strong> based in Dhaka, Bangladesh. I started coding in <strong style={{ color: theme.text.high, fontWeight: 600 }}>2019</strong> out of curiosity and it quickly became my passion.
                                    </p>
                                    <p>
                                        I specialize in the <span className="px-2 py-0.5 rounded-md text-sm font-semibold inline-block" style={{ background: theme.gradient.badge, color: theme.text.primary, border: `1px solid ${theme.border.subtle}` }}>MERN stack</span>, building fast and scalable web apps. I love turning ideas into great products with clean code and thoughtful design.
                                    </p>
                                    <p>
                                        Currently studying <span className="px-2 py-0.5 rounded-md text-sm font-semibold inline-block" style={{ background: theme.gradient.badge, color: theme.text.primary, border: `1px solid ${theme.border.subtle}` }}>Computer Science</span> at the University of the People - always learning, always building.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Info Pills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { icon: '📍', title: 'Location', text: 'Dhaka, Bangladesh' },
                                { icon: '🎓', title: 'Education', text: 'University of the People' },
                                { icon: '💻', title: 'Subject', text: 'Computer Science Student' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                                    style={{
                                        background: theme.bg.surface,
                                        border: `1px solid ${theme.border.default}`
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                >
                                    <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl"
                                        style={{ background: theme.gradient.card, border: `1px solid ${theme.border.subtle}` }}>
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5 truncate" style={{ color: theme.text.low }}>
                                            {item.title}
                                        </p>
                                        <p className="font-bold text-sm sm:text-xs md:text-sm truncate" style={{ color: theme.text.mid }}>
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;