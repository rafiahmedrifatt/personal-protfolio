import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import ProjectSection from '../ProjectsSection/ProjectSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
        </div>
    );
};

export default Home;