import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Layout, Star, Eye, X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0F] border border-violet-500/20 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-violet-600/50 text-slate-300 hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
                            {/* Hero Section */}
                            <div className="relative w-full h-64 sm:h-80 md:h-96 flex-shrink-0 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-violet-900/20 mix-blend-overlay"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="px-3 py-1 bg-violet-600/20 backdrop-blur-md rounded-full text-violet-300 text-xs sm:text-sm font-medium border border-violet-500/30">
                                        Featured Project
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                                        {project.title}
                                    </h1>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={project.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Live Demo</span>
                                        </a>
                                        <a
                                            href={project.github.client}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Client</span>
                                        </a>
                                        <a
                                            href={project.github.server}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Server</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-8 bg-[#0A0A0F]">
                                {/* Project Details */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <Layout className="w-6 h-6 text-violet-400" />
                                        <span>Project Overview</span>
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                        {project.details}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                        <Code className="w-6 h-6 text-violet-400" />
                                        <span>Tech Stack</span>
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-[#151520] border border-violet-500/20 rounded-lg text-slate-300 text-sm font-medium hover:border-violet-500/50 hover:text-violet-300 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <Star className="w-6 h-6 text-violet-400" />
                                            <span>Key Features</span>
                                        </h2>
                                        <ul className="space-y-3">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3 text-slate-300 bg-[#151520] p-4 rounded-xl border border-violet-500/10">
                                                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Challenges */}
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <Eye className="w-6 h-6 text-violet-400" />
                                            <span>Technical Challenges</span>
                                        </h2>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-3 text-slate-300 bg-[#151520] p-4 rounded-xl border border-violet-500/10">
                                                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="leading-relaxed">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;