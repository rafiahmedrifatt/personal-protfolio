import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

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

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
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

    return (
        <motion.div
            ref={ref}
            id='projects'
            className="min-h-screen py-16 sm:py-24"
            style={{ background: 'linear-gradient(135deg, #0C0C1D 0%, #050508 50%, #0F0A1E 100%)' }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    className="text-center mb-16 sm:mb-24"
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
                        💼 Selected Works
                    </motion.span>
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Engineered{' '}
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
                            Solutions
                            <motion.div
                                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, #7C3AED, #6366F1)' }}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : { width: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        A selection of my recent engineering projects, demonstrating my expertise in full stack development, system design, and problem solving.
                    </motion.p>
                </motion.div>

                {/* Project Cards (Alternating Layout) */}
                <div className="space-y-24 sm:space-y-32 lg:space-y-40">
                    {demoData.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                            >
                                {/* Image / Browser Mockup */}
                                <div className="w-full lg:w-[55%]">
                                    <motion.div
                                        className="relative rounded-2xl overflow-hidden border border-violet-500/20 bg-[#0A0A0F] shadow-[0_0_30px_rgba(124,58,237,0.1)] group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {/* Browser Header */}
                                        <div className="h-8 sm:h-10 bg-[#151520] border-b border-violet-500/20 flex items-center px-4 gap-2">
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
                                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
                                            <div className="ml-4 flex-1 h-4 sm:h-5 bg-[#0A0A0F] rounded border border-violet-500/10 flex items-center px-2">
                                                <span className="text-[10px] text-slate-500 truncate">{new URL(project.live).hostname}</span>
                                            </div>
                                        </div>
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className={`w-full lg:w-[45%] space-y-6 sm:space-y-8`}>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-[#151520] border border-violet-500/20 rounded-lg text-slate-300 text-xs sm:text-sm font-medium hover:border-violet-500/50 hover:text-violet-300 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-4 pt-4">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="group flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-300 hover:text-violet-400 hover:border-violet-500/30 group"
                                            title="Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </a>
                                        <a
                                            href={project.github.client}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-300 hover:text-violet-400 hover:border-violet-500/30 group"
                                            title="Source Code"
                                        >
                                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </motion.div>
    );
};

export default ProjectSection;