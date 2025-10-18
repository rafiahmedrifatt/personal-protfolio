import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactSection = () => {
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
            scale: 1.02,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_mjbh57t',
                'template_s2srvyp',
                e.target,
                'N871wuv_mpCTd7wBl'
            )
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'I will get back to you soon.',
                    confirmButtonColor: '#3085d6',
                    background: '#1f2937',
                    color: '#f9fafb'
                });
                e.target.reset();
            })
            .catch((error) => {
                console.error('❌ Failed to send message:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to send message. Please try again.',
                    confirmButtonColor: '#dc2626',
                    background: '#1f2937',
                    color: '#f9fafb'
                });
            });
    };

    return (
        <motion.div
            ref={ref}
            id='contact'
            className='min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"
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
                className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"
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

            <div className='w-full max-w-7xl mx-auto relative z-10'>
                {/* Section Header */}
                <motion.div
                    className='text-center mb-12 sm:mb-16 lg:mb-20'
                    variants={itemVariants}
                >
                    <motion.span
                        className='inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg border border-blue-500/30'
                        whileHover={{ scale: 1.05 }}
                    >
                        💬 Let's connect
                    </motion.span>
                    <motion.h2
                        className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6'
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Get In{' '}
                        <motion.span
                            className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Touch
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
                        Ready to start your next project? Let's connect and discuss how we can work together.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        variants={itemVariants}
                    >
                        <motion.div
                            className='bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700/50'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            >
                                <motion.span
                                    className="text-3xl sm:text-4xl"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    📞
                                </motion.span>
                                Contact Information
                            </motion.h3>

                            <div className="space-y-4 sm:space-y-6">
                                {/* Email */}
                                <motion.div
                                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl sm:rounded-2xl hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 group cursor-pointer border border-blue-500/20"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ delay: 1.4, duration: 0.6 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base sm:text-lg">Email</p>
                                        <a href='mailto:rafiahmedrifat1@gmail.com' className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 text-sm sm:text-base">
                                            rafiahmedrifat1@gmail.com
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl sm:rounded-2xl hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group cursor-pointer border border-green-500/20"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ delay: 1.6, duration: 0.6 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-green-600 group-hover:bg-green-700 transition-colors duration-300">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base sm:text-lg">WhatsApp</p>
                                        <a href='http://wa.me/+8801516549414' className="text-green-400 hover:text-green-300 font-medium transition-colors duration-200 text-sm sm:text-base">
                                            +8801516549414
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Location */}
                                <motion.div
                                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl sm:rounded-2xl hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-300 group cursor-pointer border border-purple-500/20"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ delay: 1.8, duration: 0.6 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base sm:text-lg">Location</p>
                                        <p className='text-purple-400 font-medium text-sm sm:text-base'>Dhaka, Bangladesh</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Response Time Card */}
                        <motion.div
                            className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl'
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: 2, duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                                <motion.span
                                    className="text-2xl sm:text-3xl"
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    ⚡
                                </motion.span>
                                Quick Response
                            </h4>
                            <p className="text-base sm:text-lg opacity-90">
                                I typically respond within <span className="font-bold">24 hours</span> and I'm always excited to discuss new projects and opportunities!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="space-y-6"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="bg-gray-800/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h3
                                className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 2.2, duration: 0.6 }}
                            >
                                <motion.span
                                    className="text-3xl sm:text-4xl"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    ✉️
                                </motion.span>
                                Send a Message
                            </motion.h3>

                            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 2.4, duration: 0.6 }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-700/50 border-2 border-gray-600/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                                            placeholder="Your full name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 2.6, duration: 0.6 }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-700/50 border-2 border-gray-600/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                                            placeholder="your.email@example.com"
                                        />
                                    </motion.div>
                                </div>

                                {/* Phone */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 2.8, duration: 0.6 }}
                                >
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-700/50 border-2 border-gray-600/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                                        placeholder="Your phone number"
                                    />
                                </motion.div>

                                {/* Subject */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 3, duration: 0.6 }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-700/50 border-2 border-gray-600/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                                        placeholder="What's this about?"
                                    />
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 3.2, duration: 0.6 }}
                                >
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-200 mb-2 sm:mb-3">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-gray-700/50 border-2 border-gray-600/50 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-vertical text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                                        placeholder="Tell me about your project or how I can help..."
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    type='submit'
                                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 3.4, duration: 0.6 }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Send Message</span>
                                    <motion.svg
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </motion.svg>
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactSection;