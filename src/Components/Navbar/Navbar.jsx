import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router';
import { Link } from 'react-scroll';

// Enhanced navbar with improved design while maintaining all functionality
const Navbar = () => {
    const link = [
        { display: 'About', to: 'about' },
        { display: 'Skills', to: 'skills' },
        { display: 'Projects', to: 'projects' },
        { display: 'Contact', to: 'contact' },
    ]

    return (
        <div className="navbar md:sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300 sticky">
            <div className="navbar-start">
                <div className="relative group">
                    <img
                        src="./logo.png"
                        alt="Logo"
                        className="bg-transparent w-32 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link.map(singleLink =>
                        <li key={singleLink.to} className="relative group">
                            <Link
                                to={singleLink.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 mr-6 relative overflow-hidden group cursor-pointer"
                            >
                                <span className="relative z-10">{singleLink.display}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="navbar-end">
                <a
                    href='https://drive.google.com/uc?export=download&id=1_oazDyk1ny93iQy4RO8UCJ3n8mU_vZKC'
                    className="btn hidden lg:flex btn-primary hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transform transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white font-semibold px-6 py-2.5 rounded-lg relative overflow-hidden group"
                >
                    <span className="relative z-10">Resume</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-white/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                </a>

                <div className="lg:hidden">
                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 text-gray-600 transition-transform duration-300 group-hover:rotate-90"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </MenuButton>

                        <MenuItems
                            transition
                            anchor="bottom end"
                            className="w-56 origin-top-right rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md p-2 text-sm shadow-xl transition duration-200 ease-out [--anchor-gap:--spacing(1)] focus:outline-none z-50 data-closed:scale-95 data-closed:opacity-0"
                        >
                            {link.map(singleLink =>
                                <MenuItem key={singleLink.to} className="mb-1 last:mb-0">
                                    <Link
                                        to={singleLink.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100"></div>
                                        <span className="font-medium">{singleLink.display}</span>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Link>
                                </MenuItem>
                            )}
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;