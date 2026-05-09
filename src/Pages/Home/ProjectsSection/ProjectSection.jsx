import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectModal from '../../../Components/Modal/ProjectModal';

const ProjectSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            y: -10,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

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
            live: "https://volunteer-management-project.web.app/",
            github: {
                client: "https://github.com/yourusername/volunteer-client",
                server: "https://github.com/yourusername/volunteer-server"
            },
            details: "HelpHub is a volunteer coordination platform built to streamline how communities connect with helping hands. With JWT-secured private routes, dynamic layout switching, volunteer tracking, and request management, the app ensures both organizers and volunteers have a smooth, effective experience. Feature-rich and performance-optimized, HelpHub shines in both UX and backend logic, making it a standout project in volunteer tech."
        }
    ];

    return (
        <motion.div
            ref={ref}
            id='projects'
            className="min-h-screen py-8 sm:py-12 lg:py-16"
            style={{ background: 'linear-gradient(135deg, #0C0C1D 0%, #050508 50%, #0F0A1E 100%)' }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                    variants={itemVariants}
                >
                    <motion.span
                        className='inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))',
                            border: '1px solid rgba(139,92,246,0.35)',
                            color: '#C4B5FD',
                            boxShadow: '0 0 20px rgba(124,58,237,0.15)'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        💼 My Projects
                    </motion.span>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Projects{' '}
                        <motion.span
                            className="relative"
                            style={{
                                background: 'linear-gradient(135deg, #C4B5FD 0%, #A78BFA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            I've
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7C3AED, #6366F1)' }}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </motion.span>
                        {' '}worked on
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Here are some of my recent projects that showcase my skills and passion for development
                    </motion.p>
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-8 sm:space-y-12">
                    {demoData.map((singleData, index) => (
                        <motion.div
                            key={singleData.id}
                            className='rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500 group'
                            style={{ background: 'rgba(15,10,30,0.85)', border: '1px solid rgba(139,92,246,0.2)' }}
                            variants={cardVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                        >
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(99,102,241,0.04))' }}></div>

                            {/* Top Row: Image and Description */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 relative z-10'>
                                {/* Image Section */}
                                <motion.div
                                    className='h-64 sm:h-80 lg:h-96 relative overflow-hidden'
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(99,102,241,0.08))' }}></div>
                                    <motion.img
                                        src={singleData.image}
                                        alt={singleData.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                                    />
                                </motion.div>

                                {/* Content Section */}
                                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                                    <div className="space-y-4 sm:space-y-6">
                                        {/* Project Title */}
                                        <motion.div
                                            className="relative"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                                        >
                                            <h3
                                                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-white transition-colors duration-500 leading-tight" style={{ color: 'inherit' }} onMouseEnter={e => e.target.style.color='#C4B5FD'} onMouseLeave={e => e.target.style.color='white'}
                                            >
                                                {singleData.title}
                                            </h3>
                                            <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" style={{ background: 'linear-gradient(180deg, #7C3AED, #6366F1)' }}></div>
                                        </motion.div>

                                        {/* Description */}
                                        <motion.p
                                            className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
                                        >
                                            {singleData.description}
                                        </motion.p>

                                        {/* Technologies */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                                        >
                                            <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-slate-200 flex items-center">
                                                <motion.div
                                                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3"
                                                    style={{ background: 'linear-gradient(135deg, #7C3AED, #6366F1)' }}
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                                Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {singleData.tech.map((singleTech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-default"
                                                        style={{ background: 'rgba(5,5,8,0.8)', border: '1px solid rgba(139,92,246,0.2)', color: '#E2E8F0' }}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                                        transition={{
                                                            delay: 2.2 + index * 0.2 + techIndex * 0.05,
                                                            duration: 0.3
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        {singleTech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Action Buttons */}
                                        <motion.div
                                            className="flex flex-wrap gap-3 sm:gap-4 pt-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 2.4 + index * 0.2, duration: 0.6 }}
                                        >
                                            <motion.a
                                                href={singleData.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative px-3 py-2 sm:px-4 sm:py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 sm:gap-3 overflow-hidden text-xs sm:text-sm"
                                                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)', boxShadow: '0 8px 25px rgba(124,58,237,0.35)' }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0 15px 40px rgba(124,58,237,0.55)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="absolute inset-0 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 100%)' }}></div>
                                                <motion.svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
                                                >
                                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                                                </motion.svg>
                                                <span className="relative z-10">Live Demo</span>
                                            </motion.a>

                                            <motion.a
                                                href={singleData.github.client}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn relative px-3 py-2 sm:px-4 sm:py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 sm:gap-3 overflow-hidden text-xs sm:text-sm"
                                                style={{ background: 'rgba(15,10,30,0.9)', border: '1px solid rgba(139,92,246,0.3)' }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0 10px 30px rgba(124,58,237,0.25)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="absolute inset-0 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(124,58,237,0.2)' }}></div>
                                                <motion.svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
                                                >
                                                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                                </motion.svg>
                                                <span className="relative z-10">Source Code</span>
                                            </motion.a>

                                            <motion.button
                                                onClick={() => document.getElementById(`my_modal_${singleData.id}`).showModal()}
                                                className="group/btn relative px-3 py-2 sm:px-4 sm:py-3 font-semibold rounded-xl transition-all duration-300 shadow-md flex items-center gap-2 sm:gap-3 overflow-hidden text-xs sm:text-sm"
                                                style={{ background: 'rgba(5,5,8,0.8)', border: '2px solid rgba(139,92,246,0.3)', color: '#C4B5FD' }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: "0 10px 25px rgba(124,58,237,0.2)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="absolute inset-0 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" style={{ background: 'rgba(124,58,237,0.15)' }}></div>
                                                <motion.svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
                                                >
                                                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                                </motion.svg>
                                                <span className="relative z-10">View Details</span>
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <ProjectModal singleData={singleData} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div >
    );
};

export default ProjectSection;