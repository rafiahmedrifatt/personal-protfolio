import React from 'react';

const HeroSection = () => {
    return (
        <div className='min-h-[80vh] bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

            <div className='flex flex-col lg:flex-row items-center justify-between px-6 py-16 lg:px-12 w-10/12 mx-auto relative z-10'>

                {/* Left Content */}
                <div className='lg:w-2/3 space-y-6 text-left'>

                    {/* Greeting with badge */}
                    <div>
                        <span className='inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3'>
                            👋 Hello there!
                        </span>
                        <p className='text-xl text-gray-600 font-light'>Hi, my name is</p>
                    </div>

                    {/* Name with gradient */}
                    <h1 className='text-6xl lg:text-7xl font-black leading-tight'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600">
                            Rafi Ahmed
                        </span>{' '}
                        <span className='text-blue-600 relative'>
                            Rifat
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </span>
                    </h1>

                    {/* Beautiful tagline */}
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-700'>
                        Web Developer
                    </h2>

                    {/* Description in a beautiful card */}
                    <div className='max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100'>
                        <p className='text-xl text-gray-700 leading-relaxed'>
                            I'm a <span className="font-semibold text-blue-600">MERN stack developer</span> fueled by curiosity and a passion for clean, purposeful code.
                            I love crafting fast, responsive web apps that solve real problems and leave a lasting impact.
                        </p>
                        <p className='text-xl text-gray-700 leading-relaxed mt-4'>
                            Always building, always learning — because <span className="italic font-medium">good enough is never enough.</span>
                        </p>
                    </div>

                    {/* Gorgeous Social Links */}
                    <div className='flex gap-4 pt-6'>
                        <a
                            href='https://www.facebook.com/rafiahmedrifatt'
                            target='_blank'
                            className='w-14 h-14 rounded-2xl bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110'
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>

                        <a
                            href='https://github.com/rafiahmedrifatt'
                            target='_blank'
                            className='w-14 h-14 rounded-2xl bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110'
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>

                        <a
                            href='https://www.linkedin.com/in/rafiahmedrifatt/'
                            target='_blank'
                            className='w-14 h-14 rounded-2xl bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110'
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    {/* Stunning CTA Button */}
                    <div className='pt-8'>
                        <a
                            href='https://drive.google.com/uc?export=download&id=1_oazDyk1ny93iQy4RO8UCJ3n8mU_vZKC'
                            className='inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
                        >
                            <span>Download CV</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Stunning Image Section */}
                <div className='lg:w-1/3 mt-12 lg:mt-0 flex justify-center'>
                    <div className='relative group'>
                        {/* Multiple layered backgrounds for depth */}
                        <div className='absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500'></div>
                        <div className='absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-30'></div>

                        {/* Main image with beautiful frame */}
                        <div className="relative">
                            <img
                                src="/profilePhoto.jpg"
                                alt="Rafi Ahmed Rifat"
                                className='relative w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500'
                            />

                            {/* Floating accent */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold">🚀</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;