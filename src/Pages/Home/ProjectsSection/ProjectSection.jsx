import React from 'react';

const ProjectSection = () => {
    const demoData = [{
        "id": 2,
        "title": "TaskNest - Productivity App",
        "image": "https://i.ibb.co/v49XzP5t/js.png",
        "description": "A task management app with drag & drop features for organizing daily goals, project deadlines, and team collaboration.",
        "features": [
            "Drag and drop task board (Kanban style)",
            "Real-time updates with Socket.io",
            "Team collaboration with role-based access"
        ],
        "tech": ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
        "live": "https://tasknest.pro",
        "github": "https://github.com/yourname/tasknest",
        "details": "TaskNest boosts productivity with an intuitive UI for task and project organization. It features real-time syncing and secure team collaboration for startups and teams."
    }];

    return (
        <div className="max-w-6xl mx-auto p-8">
            {/* Section Title */}
            <h2 className="text-5xl font-bold mb-12 text-center">
                Projects <span className="text-[oklch(55%_0.3_240)]">I've</span> worked on
            </h2>

            {/* Project Cards */}
            <div className="space-y-8">
                {demoData.map(singleData =>
                    <div key={singleData.id} className='border border-gray-400 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        {/* Top Row: Image and Description */}
                        <div className='grid grid-cols-1 md:grid-cols-2'>

                            {/* Image Section */}
                            <div className='h-fit'>
                                <img
                                    src={singleData.image}
                                    alt={singleData.title}
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* Content Section */}
                            <div className=''>
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-1 text-black">
                                            {singleData.title}
                                        </h3>
                                        <p className="text-lg text-gray-700">
                                            {singleData.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Bottom Section: Features, Tech, Buttons */}
                                <div className='border-gray-200'>
                                    {/* Features */}
                                    <div className='mb-2'>
                                        <h4 className="text-lg font-semibold mb-1 text-black">Key Features:</h4>
                                        <div className='space-y-1'>
                                            {singleData.features.map((singleFeatures, index) =>
                                                <p key={index} className="text-gray-700 flex items-center">
                                                    <span className="text-[oklch(55%_0.3_240)] font-bold mr-2">→</span>
                                                    {singleFeatures}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className='mb-6'>
                                        <h4 className="text-lg font-semibold mb-3 text-black">Technologies Used:</h4>
                                        <div className='flex flex-wrap gap-2'>
                                            {singleData.tech.map((singleTech, index) =>
                                                <span
                                                    key={index}
                                                    className='px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-[oklch(55%_0.3_240)] hover:text-white hover:border-[oklch(55%_0.3_240)] transition-colors duration-200'
                                                >
                                                    {singleTech}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex flex-wrap gap-4'>
                                        <a
                                            href={singleData.live}
                                            className='px-6 py-3 bg-[oklch(55%_0.3_240)] text-white font-semibold rounded-lg hover:bg-[oklch(50%_0.3_240)] transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2'
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                            Live Link
                                        </a>
                                        <a
                                            href={singleData.github}
                                            className='px-6 py-3 border-2 border-black font-semibold rounded-lg bg-black text-white transition-colors duration-200 flex items-center gap-2'
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Github Link
                                        </a>
                                        <a
                                            href={singleData.details}
                                            className='px-6 py-3 bg-gray-100 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2'
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />
                                            </svg>
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectSection;