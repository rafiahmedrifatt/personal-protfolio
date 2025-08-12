import React from 'react';

const AboutSection = () => {
    return (
        <div id='about' className='bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 lg:px-12 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>

            <div className='max-w-6xl mx-auto relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <span className='inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6'>
                        🚀 Get to know me
                    </span>
                    <h2 className='text-5xl lg:text-6xl font-black text-gray-900 mb-4'>
                        About{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative'>
                            Me
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className='grid lg:grid-cols-2 gap-12 items-center'>

                    {/* Left - Text Content */}
                    <div className='space-y-8'>
                        {/* About Text Cards */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100'>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl">💻</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">My Journey</h3>
                            </div>
                            <p className='text-lg text-gray-700 leading-relaxed'>
                                I'm Rafi, a <span className="font-semibold text-blue-600">MERN Stack Developer</span> passionate about building modern, fast, and responsive web applications. My journey into programming started with curiosity — but quickly evolved into a full-on commitment to mastering the JavaScript ecosystem, especially React and backend technologies like MongoDB and Node.js.
                            </p>
                        </div>

                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100'>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl">✈️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Beyond Code</h3>
                            </div>
                            <p className='text-lg text-gray-700 leading-relaxed'>
                                Outside of programming, I'm someone who enjoys <span className="font-semibold text-purple-600">Working Out</span>, <span className="font-semibold text-blue-600">Entrepreneurship</span>, and especially <span className="font-semibold text-green-600">Traveling</span>. Exploring new places helps me reset, gain fresh perspectives, and even sparks creative ideas for projects. Whether it's a short local trip or a long journey, I believe travel fuels personal growth and broadens how I see both people and technology.
                            </p>
                        </div>
                    </div>

                    {/* Right - Skills & Interests */}
                    <div className='space-y-8'>

                        {/* Skills Section */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100'>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🛠️</span>
                                What I Do Best
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">⚛️</div>
                                    <div className="font-semibold text-blue-700">React</div>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">💚</div>
                                    <div className="font-semibold text-green-700">Node.js</div>
                                </div>
                                <div className="bg-yellow-50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">🟨</div>
                                    <div className="font-semibold text-yellow-700">JavaScript</div>
                                </div>
                                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                                    <div className="text-2xl mb-2">🍃</div>
                                    <div className="font-semibold text-emerald-700">MongoDB</div>
                                </div>
                            </div>
                        </div>

                        {/* Interests Section */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100'>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🎯</span>
                                My Interests
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-xl">
                                    <span className="text-2xl">💪</span>
                                    <span className="font-medium text-gray-700">Working Out</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-xl">
                                    <span className="text-2xl">🚀</span>
                                    <span className="font-medium text-gray-700">Entrepreneurship</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-xl">
                                    <span className="text-2xl">🌍</span>
                                    <span className="font-medium text-gray-700">Traveling</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;