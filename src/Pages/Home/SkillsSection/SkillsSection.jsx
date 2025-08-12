import React from 'react';

// Simple Marquee component
const Marquee = ({ children, autoFill, pauseOnHover }) => {
    return (
        <div className="overflow-hidden">
            <div className={`flex animate-scroll ${pauseOnHover ? 'hover:animate-pause' : ''}`}>
                {children}
                {autoFill && children}
            </div>
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section id='skills' className="bg-white">
            <div className='mb-40 py-20'>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">
                            I can work <span className="text-blue-600 relative">
                                with
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 mt-4">Continuously learning other Technologies as well</p>
                    </div>

                    {/* Clean marquee */}
                    <div className="relative py-8">
                        <Marquee autoFill={true} pauseOnHover={true}>
                            <img
                                src="https://i.ibb.co/v49XzP5t/js.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                                alt="JavaScript"
                            />
                            <img
                                src="https://i.ibb.co/vxbkQh3F/react.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                                alt="React"
                            />
                            <img
                                src="https://i.ibb.co/4Q0nJ3H/firebase.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                            />
                            <img
                                src="https://i.ibb.co/fdtWjNpm/mongodb.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                                alt="MongoDB"
                            />
                            <img
                                src="https://i.ibb.co/SDZw3Ft8/express.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                                alt="Express"
                            />
                            <img
                                src="https://i.ibb.co/TxWGV4r5/node.png"
                                className='w-auto h-20 object-contain mx-12 hover:scale-110 transition-transform duration-300 filter hover:drop-shadow-lg'
                                alt="Node.js"
                            />
                        </Marquee>

                        {/* Subtle fade edges */}
                        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                
                .animate-pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SkillsSection;