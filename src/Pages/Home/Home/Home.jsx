import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import ProjectSection from '../ProjectsSection/ProjectSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;