import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

// TODO: social icon design need to be changed

const HeroSection = () => {
    return (
        <div className='min-h-[70vh] bg-white flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-12 w-11/12 mx-auto'>
            <div className='lg:w-2/3 space-y-4 text-left'>
                {/* Greeting */}
                <p className='text-xl text-gray-600 font-light'>Hi, my name is</p>

                {/* Name */}
                <h1 className='text-7xl font-bold text-black'>
                    Rafi Ahmed <span className='text-primary'>Rifat</span>
                </h1>

                {/* Tagline */}
                <h2 className='text-5xl font-medium text-gray-700'>
                    <Typewriter
                        words={['Web Developer', 'Tech Enthusiast', 'Continuous Learner']}
                        loop={0} // or true for infinite
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>

                {/* Description */}
                <div className='max-w-xl'>
                    <p className='text-xl text-gray-600 leading-relaxed'>
                        I'm a MERN stack web developer fueled by curiosity and a passion for clean, purposeful code.
                        I love crafting fast, responsive web apps that solve real problems and leave a lasting impact.
                    </p>
                    <p className='text-xl text-gray-600 leading-relaxed mt-4'>
                        Always building, always learning — because good enough is never enough.
                    </p>
                </div>

                {/* Social Links */}
                <div className='flex gap-4 pt-4'>
                    <button
                        className='w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:border-black transition-colors duration-200 flex items-center justify-center'
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'oklch(55% 0.3 240)';
                            e.target.style.color = 'white';
                            e.target.style.borderColor = 'oklch(55% 0.3 240)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#374151';
                            e.target.style.borderColor = '#d1d5db';
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </button>
                    <button
                        className='w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:border-black transition-colors duration-200 flex items-center justify-center'
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'oklch(55% 0.3 240)';
                            e.target.style.color = 'white';
                            e.target.style.borderColor = 'oklch(55% 0.3 240)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#374151';
                            e.target.style.borderColor = '#d1d5db';
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </button>
                    <button
                        className='w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:border-black transition-colors duration-200 flex items-center justify-center'
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'oklch(55% 0.3 240)';
                            e.target.style.color = 'white';
                            e.target.style.borderColor = 'oklch(55% 0.3 240)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#374151';
                            e.target.style.borderColor = '#d1d5db';
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </button>
                </div>

                {/* CTA Button */}
                <div className='pt-6'>
                    <button
                        className='btn btn-primary px-8 py-3 text-white font-medium transition-all duration-200 rounded-sm shadow-sm hover:shadow-md'
                    >
                        Download CV
                    </button>
                </div>
            </div>
            <div className='lg:w-1/3 mt-12 lg:mt-0 flex justify-center'>
                <div className='relative'>
                    <div
                        className='absolute -inset-4 rounded-lg opacity-60 bg-secondary'
                    ></div>
                    <img
                        src="/profilePhoto.jpg"
                        alt="Rafi Ahmed Rifat"
                        className='relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-lg'
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;