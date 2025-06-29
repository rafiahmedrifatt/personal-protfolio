import React from 'react';

const ProjectSection = () => {
    const demoData = [
        {
            id: 1,
            slug: "plant-care-tracker",
            title: "Plant Care Tracker",
            image: "https://i.ibb.co/JWXScM9N/web10.png", // Replace with a screenshot of your app
            description: "A full-stack plant care management app where users can track watering, fertilizing, and health updates for their plants with real-time reminders and user authentication.",
            features: [
                "User authentication with email & Google login",
                "Add, update, and delete personalized plant records",
                "Track watering schedules, health status, and care level",
                "Responsive UI with dark/light mode support",
                "Protected routes with persistent login state",
                "Sort by watering date or care difficulty",
                "Sweet alert & toast notifications for actions"
            ],
            challenges: [
                "Implemented dark/light theme toggle across the application",
                "Used Lottie animations for visual engagement",
                "Integrated Date-fns to handle time-based reminders and date formatting",
                "Handled 404 routes with a creative Not Found page",
                "Created a loading spinner during async data fetching",
                "Ensured persistent login state without redirecting on private routes"
            ],
            tech: [
                "React",
                "React Router",
                "Firebase Auth",
                "TailwindCSS",
                "Node.js",
                "Express.js",
                "MongoDB"
            ],
            live: "https://sprightly-valkyrie-f311ec.netlify.app",
            github: {
                client: "https://github.com/rafiahmedrifatt/Plant-Care-Project",
                server: "https://github.com/rafiahmedrifatt/plant-care-server"
            },
            details: "Plant Care Tracker is a responsive and theme-based plant management tool that allows plant lovers to track daily plant care activities. Built with a secure authentication system, users can add, view, and manage their own plant collection. The app includes personalized dashboards, sort & filter options, mobile-first design, meaningful error handling, and success feedback using third-party libraries like SweetAlert2. Ideal for plant parents who want to stay on top of their green responsibilities with ease and elegance."
        },
        {
            id: 2,
            slug: "volunteer-management-platform",
            title: "Volunteer Management",
            image: "https://i.ibb.co/0FVmRG2/volunteer-platform-cover.jpg", // Replace with actual screenshot
            description: "A secure and responsive platform where users can post volunteer needs, apply to help others, and manage their own posts and requests efficiently.",
            features: [
                "JWT-based protected authentication system",
                "Add, update, delete volunteer opportunities (CRUD)",
                "Be a Volunteer modal with dynamic form & data binding",
                "Real-time decrement of volunteer count using MongoDB $inc",
                "Sort volunteer posts by deadline",
                "Search functionality for post titles",
                "Layout toggle: card view ⇄ table view",
                "Framer Motion animations on homepage",
                "Protected routes persist after reload using JWT",
                "Toast/SweetAlert2 feedback on all actions",
                "Dynamic page titles for better SEO and UX",
                "Responsive design for mobile, tablet, and desktop",
                "Separate dashboards: My Posts & My Volunteer Requests"
            ],
            challenges: [
                "Implemented dark/light theme toggle across entire app",
                "Integrated JWT token for private route protection and server validation",
                "Added layout switching toggle (card to table view)",
                "Created animated carousel with meaningful slides",
                "Managed volunteer count dynamically with MongoDB $inc operator",
                "Handled 0-volunteer condition to prevent further requests",
                "Included meaningful 404 page and animated loading spinner"
            ],
            tech: [
                "React",
                "React Router",
                "TailwindCSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase Auth",
                "JWT",
                "Framer Motion",
            ],
            live: "https://your-volunteer-app.netlify.app", // Replace with real URL
            github: {
                client: "https://github.com/yourusername/volunteer-client",
                server: "https://github.com/yourusername/volunteer-server"
            },
            details: "HelpHub is a volunteer coordination platform built to streamline how communities connect with helping hands. With JWT-secured private routes, dynamic layout switching, volunteer tracking, and request management, the app ensures both organizers and volunteers have a smooth, effective experience. Feature-rich and performance-optimized, HelpHub shines in both UX and backend logic, making it a standout project in volunteer tech."
        }
    ];


    return (
        <div id='projects' className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
            <div className="max-w-7xl mx-auto p-8">
                {/* Section Title */}
                <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Projects <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">I've</span> worked on
                </h2>

                {/* Project Cards */}
                <div className="space-y-12">
                    {demoData.map(singleData =>
                        <div key={singleData.id} className=' border border-slate-200/60 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-300/60'>
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Top Row: Image and Description */}
                            <div className='grid grid-cols-1 md:grid-cols-2 relative z-10'>

                                {/* Image Section */}
                                <div className='h-90 my-auto relative overflow-hidden'>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={singleData.image}
                                        alt={singleData.title}
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className='space-y-10 p-10 overflow-hidden'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary group-hover:text-blue-700 transition-colors duration-300">
                                                {singleData.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed mb-2">
                                                {singleData.description}
                                            </p>
                                        </div>

                                        {/* Bottom Section: Features, Tech, Buttons */}
                                        <div className='border-slate-100'>
                                            {/* Technologies */}
                                            <div className='mb-3'>
                                                <h4 className="text-lg font-semibold mt-4 mb-2 text-primary flex items-center">
                                                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-secondary rounded-full mr-3"></span>
                                                    Technologies Used:
                                                </h4>
                                                <div className='flex flex-wrap gap-3'>
                                                    {singleData.tech.map((singleTech, index) =>
                                                        <span
                                                            key={index}
                                                            className='px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default'
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
                                                    className='px-4 py-2 bg-gradient-to-r from-blue-600 to-primary text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group/btn'
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:rotate-12 transition-transform duration-300">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                    </svg>
                                                    Live Link
                                                </a>
                                                <a
                                                    href={singleData.github}
                                                    className='px-4 py-2 border-2 border-primary font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group/btn'
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:rotate-12 transition-transform duration-300">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    Github Link
                                                </a>
                                                <a
                                                    href={singleData.details}
                                                    className='px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-3 group/btn'
                                                >
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover/btn:rotate-12 transition-transform duration-300">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                                    </svg>
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;