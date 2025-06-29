import React from 'react';
import { ExternalLink, Github, Code, Users, Shield, Layout, Search, Smartphone, Eye, Star } from 'lucide-react';


const ProjectModal = ({ singleData }) => {
    return (
        <dialog id={`my_modal_${singleData.id}`} className="modal w-full">
            <div className="modal-box max-w-5xl">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
                    {/* Hero Image */}
                    <div className="relative">
                        <img
                            src={singleData.image}
                            alt={singleData.title}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">{singleData.title}</h1>
                            <div className="flex gap-3">
                                <a
                                    href={singleData.live}
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                                <a
                                    href={singleData.github.client}
                                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Client
                                </a>
                                <a
                                    href={singleData.github.server}
                                    className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Server
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">{singleData.description}</p>
                            <p className="text-gray-700 leading-relaxed">{singleData.details}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Code className="w-6 h-6 text-gray-600" />
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {singleData.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-full text-sm font-medium border`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Star className="w-6 h-6 text-gray-600" />
                                Key Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-3">
                                {singleData.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Challenges */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-gray-600" />
                                Technical Challenges
                            </h2>
                            <div className="space-y-3">
                                {singleData.challenges.map((challenge, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{challenge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default ProjectModal;