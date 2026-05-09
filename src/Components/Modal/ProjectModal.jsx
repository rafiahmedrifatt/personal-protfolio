import React from 'react';
import { ExternalLink, Github, Code, Users, Shield, Layout, Search, Smartphone, Eye, Star, X } from 'lucide-react';


const ProjectModal = ({ singleData }) => {
    return (
        <dialog id={`my_modal_${singleData.id}`} className="modal modal-middle w-full h-full flex items-center justify-center p-4">
            <div className="modal-box max-w-4xl md:max-w-6xl w-full max-h-[90vh] p-0 bg-gradient-to-br from-white via-slate-50 to-cyan-50 shadow-2xl border-0 overflow-y-auto rounded-2xl">
                {/* Close Button */}
                <button
                    className="sticky top-4 right-4 float-right z-20 btn btn-sm btn-circle bg-white/90 backdrop-blur-md hover:bg-white border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    onClick={() => document.getElementById(`my_modal_${singleData.id}`).close()}
                >
                    <X className="w-5 h-5 text-slate-700" />
                </button>

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-cyan-600/20 to-cyan-600/20"></div>
                    <img
                        src={singleData.image}
                        alt={singleData.title}
                        className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium border border-white/30">
                            Featured Project
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 text-white">
                        <div className="mb-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent drop-shadow-lg line-clamp-2">
                                {singleData.title}
                            </h1>
                            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed line-clamp-3">
                                {singleData.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <a
                                href={singleData.live}
                                target='_blank'
                                rel='noopener noreferrer'
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                            >
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                                <span>Live Demo</span>
                            </a>
                            <a
                                href={singleData.github.client}
                                target='_blank'
                                rel='noopener noreferrer'
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                            >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                                <span>Client</span>
                            </a>
                            <a
                                href={singleData.github.server}
                                target='_blank'
                                rel='noopener noreferrer'
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                            >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
                                <span>Server</span>
                            </a>
                        </div>
                    </div>
                </div>4 sm:p-6 md:p-8 lg:p-12 space-y-8 md:

                {/* Content */}
                <div className="p-8 md:p-12 space-y-12">
                    {/* Project Details */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Layout className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span>Project Overview</span>
                        </h2>
                        <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed">{singleData.details}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span>Tech Stack</span>
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                            {singleData.tech.map((tech, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 hover:from-cyan-50 hover:to-green-50 border border-slate-200 hover:border-cyan-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                >
                                    <span className="text-xs sm:text-sm text-slate-700 font-medium group-hover:text-cyan-700 transition-colors line-clamp-1">
                                        {tech}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-green-400/0 group-hover:from-cyan-400/10 group-hover:to-green-400/10 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span>Key Features</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {singleData.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 hover:from-yellow-50 hover:to-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                        <span className="text-xs sm:text-sm text-slate-700 group-hover:text-orange-700 transition-colors font-medium leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/5 group-hover:to-orange-400/5 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent flex items-center gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span>Technical Challenges</span>
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                            {singleData.challenges.map((challenge, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 hover:from-red-50 hover:to-pink-50 border-l-3 sm:border-l-4 border-l-red-400 hover:border-l-pink-500 rounded-r-lg sm:rounded-r-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mt-1 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                        <span className="text-xs sm:text-sm text-slate-700 group-hover:text-red-700 transition-colors font-medium leading-relaxed">
                                            {challenge}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 to-pink-400/0 group-hover:from-red-400/5 group-hover:to-pink-400/5 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ProjectModal;