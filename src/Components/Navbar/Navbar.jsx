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
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.nav
            className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50 transition-all duration-300"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <motion.div
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="./logo.png"
                                alt="Logo"
                                className="bg-transparent w-24 h-16 sm:w-28 sm:h-18 lg:w-32 lg:h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex items-center space-x-1">
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
                                        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 mr-4 sm:mr-6 relative overflow-hidden group cursor-pointer"
                                    >
                                        <span className="relative z-10">{singleLink.display}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </Link>
                                </motion.li>
                            )}
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Resume Button - Desktop */}
                        <motion.a
                            href='https://drive.google.com/uc?export=download&id=1_oazDyk1ny93iQy4RO8UCJ3n8mU_vZKC'
                            className="hidden lg:inline-flex items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <span className="relative z-10">Resume</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="absolute inset-0 bg-white/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                        </motion.a>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <Menu>
                                <MenuButton className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5 sm:size-6 text-gray-300 transition-transform duration-300"
                                        whileHover={{ rotate: 90 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                    </motion.svg>
                                </MenuButton>

                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className="w-48 sm:w-56 origin-top-right rounded-xl border border-gray-700 bg-gray-800/95 backdrop-blur-md p-2 text-sm shadow-xl transition duration-200 ease-out [--anchor-gap:--spacing(1)] focus:outline-none z-50 data-closed:scale-95 data-closed:opacity-0"
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
                                                    className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-gray-300 hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                                >
                                                    <motion.div
                                                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100"
                                                        whileHover={{ scale: 1.2 }}
                                                    />
                                                    <span className="font-medium">{singleLink.display}</span>
                                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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