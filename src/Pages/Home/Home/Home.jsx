import React, { Suspense, lazy } from 'react';
import { useSEO, StructuredData, generatePersonSchema, generateWebsiteSchema } from '../../../utils/SEO';
import HeroSection from '../HeroSection/HeroSection';

// Lazy load sections for better performance
const AboutSection = lazy(() => import('../AboutSection/AboutSection'));
const SkillsSection = lazy(() => import('../SkillsSection/SkillsSection'));
const ProjectSection = lazy(() => import('../ProjectsSection/ProjectSection'));
const ContactSection = lazy(() => import('../ContactSection/ContactSection'));
const Footer = lazy(() => import('../../../Components/Footer/Footer'));

// Loading component
const SectionLoader = () => <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800"><div className="animate-pulse">Loading...</div></div>;

const Home = () => {
    // SEO Optimization
    useSEO({
        title: 'Rafi Ahmed Rifat - Full Stack Developer | Portfolio',
        description: 'Full Stack Developer portfolio showcasing innovative web development projects, expertise in React, Node.js, and modern web technologies. Hire Rafi Ahmed Rifat for your next project.',
        keywords: 'Rafi Ahmed Rifat, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, MERN Stack, Web Development',
        image: 'https://rafiamedrifat.com/profilePhoto.jpg',
        url: 'https://rafiamedrifat.com',
        type: 'website',
        author: 'Rafi Ahmed Rifat'
    });

    return (
        <div>
            <StructuredData data={generatePersonSchema()} />
            <StructuredData data={generateWebsiteSchema()} />

            <HeroSection />

            <Suspense fallback={<SectionLoader />}>
                <AboutSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <SkillsSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <ProjectSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <ContactSection />
            </Suspense>

            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Home;