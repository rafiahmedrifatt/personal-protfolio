import React from 'react';

const AboutSection = () => {
    return (
        <div id='about' className='bg-white py-40 px-6 lg:px-12'>
            <div className='max-w-4xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-5xl font-bold text-black mb-8'>
                        About <span style={{ color: 'oklch(55% 0.3 240)' }}>Me</span>
                    </h2>

                    {/* About Text */}
                    <div className='space-y-6 text-xl text-gray-600 leading-relaxed max-w-7xl mx-auto text-left'>
                        <p>
                            I'm Rafi, a MERN Stack Developer passionate about building modern, fast, and responsive web applications. My journey into programming started with curiosity — but quickly evolved into a full-on commitment to mastering the JavaScript ecosystem, especially React and backend technologies like MongoDB and Node.js.
                        </p>
                        <p>
                            Outside of programming, I’m someone who enjoys Working Out, Entrepreneurship, and especially Traveling. Exploring new places helps me reset, gain fresh perspectives, and even sparks creative ideas for projects. Whether it’s a short local trip or a long journey, I believe travel fuels personal growth and broadens how I see both people and technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;