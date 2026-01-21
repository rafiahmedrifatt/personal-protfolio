import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/rafiahmedrifatt', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/rafiahmedrifatt', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/rafiahmedrifatt', label: 'Twitter' },
        { icon: Mail, href: 'mailto:rafiahmedrifat1@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

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

    const socialVariants = {
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
        <motion.footer
            className="bg-gray-900 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            role="contentinfo"
            aria-label="Footer"
        >
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    {/* Brand Section */}
                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Rafi Ahmed Rifat
                        </motion.h3>
                        <motion.p
                            className="text-gray-400 leading-relaxed text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Full-stack developer passionate about creating beautiful, functional web experiences.
                            Always learning and building something new.
                        </motion.p>
                        <div className="flex space-x-3 sm:space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group border border-gray-700 hover:border-blue-500"
                                        aria-label={social.label}
                                        variants={socialVariants}
                                        whileHover="hover"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    >
                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-lg sm:text-xl font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            Quick Links
                        </motion.h4>
                        <nav className="flex flex-col space-y-2 sm:space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <span>{link.name}</span>
                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-4 sm:space-y-6"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-lg sm:text-xl font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            Get In Touch
                        </motion.h4>
                        <div className="space-y-3 sm:space-y-4">
                            <motion.p
                                className="text-gray-400 flex items-center text-sm sm:text-base"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                rafiahmedrifat1@gmail.com
                            </motion.p>
                            <motion.p
                                className="text-gray-400 text-sm sm:text-base"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                            >
                                Available for freelance work and interesting projects
                            </motion.p>
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group text-sm sm:text-base font-semibold"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.8, duration: 0.6 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Talk
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
                        <motion.p
                            className="text-gray-400 text-xs sm:text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.6 }}
                        >
                            © {currentYear} Rafi Ahmed Rifat. All rights reserved.
                        </motion.p>
                        <motion.p
                            className="text-gray-400 text-xs sm:text-sm flex items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.6 }}
                        >
                            Made with{' '}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 text-red-500" />
                            </motion.span>
                            {' '}and lots of coffee
                        </motion.p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
