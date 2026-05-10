import React from 'react';
import { motion } from 'framer-motion';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router';
import { Link } from 'react-scroll';

const Navbar = () => {
    const link = [
        { display: 'About', to: 'about' },
        { display: 'Skills', to: 'skills' },
        { display: 'Projects', to: 'projects' },
        { display: 'Contact', to: 'contact' },
    ]

    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            y: -2,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    return (
        <motion.nav
            className="sticky top-0 z-50 backdrop-blur-md shadow-lg transition-all duration-300"
            style={{
                background: 'rgba(5, 5, 8, 0.92)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.5)'
            }}
            initial="hidden"
            animate="visible"
            variants={navVariants}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <motion.div
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="bg-transparent w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(99,102,241,0.15))' }}
                            />
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex items-center space-x-1" role="menubar">
                            {link.map((singleLink, index) =>
                                <motion.li
                                    key={singleLink.to}
                                    className="relative group"
                                    variants={linkVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover="hover"
                                >
                                    <Link
                                        to={singleLink.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold transition-all duration-300 mr-4 sm:mr-6 relative overflow-hidden group cursor-pointer"
                                        style={{ color: '#94A3B8' }}
                                        activeStyle={{ color: '#C4B5FD' }}
                                    >
                                        <span className="relative z-10 hover:text-violet-300 transition-colors duration-200">{singleLink.display}</span>
                                        <div
                                            className="absolute inset-0 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                            style={{ background: 'rgba(124,58,237,0.12)' }}
                                        />
                                        <div
                                            className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                            style={{ background: 'linear-gradient(90deg, #7C3AED, #6366F1)' }}
                                        />
                                    </Link>
                                </motion.li>
                            )}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Resume Button */}
                        <motion.a
                            href='https://drive.google.com/uc?export=download&id=1RN3sJ-M8K_nr09Fr36WDSisajkBE4dYT'
                            className="hidden lg:inline-flex items-center px-4 py-2 sm:px-6 sm:py-2.5 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
                                boxShadow: '0 8px 25px rgba(124,58,237,0.35)'
                            }}
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(124,58,237,0.55)" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            aria-label="Download my resume"
                            title="Download Resume"
                        >
                            <span className="relative z-10">Resume</span>
                            <div
                                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #4F46E5 100%)' }}
                            />
                        </motion.a>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Menu>
                                <MenuButton
                                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none"
                                    style={{
                                        background: 'rgba(15,10,30,0.8)',
                                        border: '1px solid rgba(139,92,246,0.3)',
                                        color: '#94A3B8'
                                    }}
                                >
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5 sm:size-6 transition-transform duration-300"
                                        whileHover={{ rotate: 90 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                    </motion.svg>
                                </MenuButton>

                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className="w-48 sm:w-56 origin-top-right rounded-xl p-2 text-sm shadow-2xl transition duration-200 ease-out [--anchor-gap:--spacing(1)] focus:outline-none z-50 data-closed:scale-95 data-closed:opacity-0"
                                    style={{
                                        background: 'rgba(10, 8, 20, 0.97)',
                                        border: '1px solid rgba(139,92,246,0.3)',
                                        backdropFilter: 'blur(16px)'
                                    }}
                                >
                                    {link.map((singleLink, index) =>
                                        <MenuItem key={singleLink.to} className="mb-1 last:mb-0">
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={singleLink.to}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-80}
                                                    className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 transition-all duration-300 cursor-pointer"
                                                    style={{ color: '#94A3B8' }}
                                                >
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        style={{ background: 'linear-gradient(135deg, #7C3AED, #6366F1)' }}
                                                        whileHover={{ scale: 1.2 }}
                                                    />
                                                    <span className="font-medium group-hover:text-violet-300 transition-colors duration-200">{singleLink.display}</span>
                                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <svg className="w-4 h-4" fill="none" stroke="#8B5CF6" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        </MenuItem>
                                    )}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
