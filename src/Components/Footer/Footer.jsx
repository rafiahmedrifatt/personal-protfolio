import React from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/rafiahmedrifatt', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/rafiahmedrifatt', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/rafiahmedrifatt', label: 'Twitter' },
        { icon: Mail, href: 'mailto:rafiahmed0471@gmail.com', label: 'Email' }
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Rafi Ahmed Rifat
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Full-stack developer passionate about creating beautiful, functional web experiences.
                            Always learning and building something new.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                                >
                                    <span>{link.name}</span>
                                    <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Get In Touch</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400 flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                rafiahmed0471@gmail.com
                            </p>
                            <p className="text-gray-400">
                                Available for freelance work and interesting projects
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                            >
                                Let's Talk
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Rafi Ahmed Rifat. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> and lots of coffee
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;