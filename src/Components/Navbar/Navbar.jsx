import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

// TODO: ON CLICK RESUME WILL BE DOWNLOADED
// TODO: LOGO NEED TO PLACE

const Navbar = () => {

    const link = [
        { display: 'About', to: 'about' },
        { display: 'Skills', to: 'skills' },
        { display: 'Projects', to: 'projects' },
        { display: 'Contact', to: 'contact' },
    ]

    return (
        <div className="navbar bg-base-100 sticky">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link.map(singleLink =>
                            <li key={singleLink.to}>
                                <a className='inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-semibold  hover:shadow-inner hover:shadow-white/10 data-open:bg-gray-700 mr-10'>{singleLink.display}</a>
                            </li>)
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hidden lg:flex btn-primary hover:shadow-inner hover:shadow-white/10">Resume</a>
                <div className="fixed lg:hidden">
                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-semibold  shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>

                        </MenuButton>

                        <MenuItems
                            transition
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                        >
                            {
                                link.map(singleLink =>
                                    <MenuItem key={singleLink.to} className="bg-white">
                                        <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5">
                                            {singleLink.display}
                                        </button>
                                    </MenuItem>
                                )
                            }

                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;