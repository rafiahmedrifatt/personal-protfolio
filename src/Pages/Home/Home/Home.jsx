import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../../SkillsSection/SkillsSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </div>
    );
};

export default Home;