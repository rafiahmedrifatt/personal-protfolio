import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import ProjectModal from '../../../Components/Modal/ProjectModal';

const ProjectSection = () => {
    const demoData = [
        {
            id: 1,
            slug: "hostel-management-system",
            title: "Hostel Management System",
            image: "https://i.ibb.co.com/Z6r3ZThm/Screenshot-2025-08-10-at-2-22-28-AM.png",
            description: "A full-stack MERN platform for managing university hostel meals, upcoming menus, and student reviews with role-based access for students and admins.",
            features: [
                "JWT-secured authentication with Firebase social login support",
                "Persistent private routes with token validation",
                "Meal management with add, update, delete, and like features",
                "Server-side search, filtering, and sorting for meals",
                "Infinite scrolling on the Meals page using React Query",
                "Premium membership packages with Stripe payment integration",
                "Meal request system with status tracking",
                "Review system with edit and delete capabilities",
                "Upcoming meals with premium-like restrictions and admin publish control",
                "Responsive dashboards for both users and admins",
                "SweetAlert2/Toast notifications for all CRUD and authentication actions",
                "Dynamic page titles and SEO-friendly routing"
            ],
            challenges: [
                "Implemented TanStack Query for efficient client-side data fetching and caching",
                "Integrated Stripe checkout flow with backend payment validation",
                "Added server-side pagination for dashboard tables",
                "Used MongoDB indexing for optimized search performance",
                "Managed role-based routes and admin privileges securely",
                "Designed a fully responsive UI for mobile, tablet, and desktop",
                "Handled real-time like counts and review counts across client and server"
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
                "TanStack Query",
                "Stripe"
            ],
            live: "https://dorm-desk.web.app",
            github: {
                client: "https://github.com/rafiahmedrifatt/Dormdesk-full-stack-project/tree/main/client",
                server: "https://github.com/rafiahmedrifatt/Dormdesk-full-stack-project/tree/main/server"
            },
            details: "UniHostel is a MERN-based hostel management platform designed to simplify meal tracking, upcoming meal previews, and student feedback in university hostels. With Stripe-powered memberships, role-based dashboards, persistent authentication, and optimized server-side search & filtering, UniHostel provides both students and admins with a seamless, efficient hostel experience."
        },
        {
            id: 2,
            slug: "plant-care-tracker",
            title: "Plant Care Tracker",
            image: "https://i.ibb.co/JWXScM9N/web10.png",
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
            id: 3,
            slug: "volunteer-management-platform",
            title: "Volunteer Management",
            image: "https://i.ibb.co.com/wh0Q1Njk/web.png",
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
            live: "https://volunteer-management-project.web.app/", // Replace with real URL
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
                                <div className={`p-4 lg:p-8 flex flex-col justify-center `}>
                                    <div className="space-y-3">
                                        {/* Project Title */}
                                        <div className="relative">
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-900 group-hover:text-blue-800 transition-colors duration-500 leading-tight">
                                                {singleData.title}
                                            </h3>
                                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            {singleData.description}
                                        </p>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-slate-800 flex items-center">
                                                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3 animate-pulse"></div>
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {singleData.tech.map((singleTech, techIndex) =>
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200/60 rounded-full text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
                                                        style={{
                                                            animationDelay: `${techIndex * 50}ms`
                                                        }}
                                                    >
                                                        {singleTech}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <a
                                                href={singleData.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300">
                                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                                </svg>
                                                <span className="relative z-10">Live Demo</span>
                                            </a>

                                            <a
                                                href={singleData.github.client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative px-3 py-2 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-slate-800 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300">
                                                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                                </svg>
                                                <span className="relative z-10">Source Code</span>
                                            </a>

                                            <button
                                                onClick={() => document.getElementById(`my_modal_${singleData.id}`).showModal()}
                                                className="group/btn relative px-3 py-2 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-3 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-slate-50 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300">
                                                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                                </svg>
                                                <span className="relative z-10">View Details</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProjectModal singleData={singleData} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ProjectSection;