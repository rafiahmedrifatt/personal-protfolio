import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Preloader from '../Components/Preloader';
import CustomCursor from '../Components/CustomCursor';

const MainLayouts = () => {
    return (
        <div className="relative min-h-screen bg-black bg-glow">
            <CustomCursor />
            <Preloader />
            <div className="relative z-10">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayouts;