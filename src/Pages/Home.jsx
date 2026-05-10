import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../Components/HeroSection';

// Lazy load below-the-fold components
const AboutSection = lazy(() => import('../Components/AboutSection'));
const SkillsSection = lazy(() => import('../Components/SkillsSection'));
const ProjectSection = lazy(() => import('../Components/ProjectSection'));
const ContactSection = lazy(() => import('../Components/ContactSection'));

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Rafi Ahmed Rifat - Full Stack Developer | Portfolio</title>
                <meta name="description" content="Full Stack Developer portfolio showcasing web development projects, skills in React, Node.js, and modern web technologies. Hire Rafi Ahmed Rifat for your next project." />
                <meta name="keywords" content="Rafi Ahmed Rifat, Full Stack Developer, React Developer, Web Developer, Portfolio, JavaScript, Node.js, MERN Stack, Web Development" />
                <meta name="author" content="Rafi Ahmed Rifat" />
                <meta property="og:title" content="Rafi Ahmed Rifat - Full Stack Developer | Portfolio" />
                <meta property="og:description" content="Full Stack Developer portfolio showcasing web development projects, skills in React, Node.js, and modern web technologies." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rafiamedrifat.com/" />
                <meta property="og:image" content="https://rafiamedrifat.com/profilePhoto.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Rafi Ahmed Rifat - Full Stack Developer | Portfolio" />
                <meta name="twitter:description" content="Full Stack Developer portfolio showcasing web development projects, skills in React, Node.js, and modern web technologies." />
                <meta name="twitter:image" content="https://rafiamedrifat.com/profilePhoto.jpg" />
                <link rel="canonical" href="https://rafiamedrifat.com/" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Rafi Ahmed Rifat",
                            "jobTitle": "Full Stack Developer",
                            "url": "https://rafiamedrifat.com",
                            "sameAs": [
                                "https://github.com/rafiahmedrifatt",
                                "https://www.linkedin.com/in/rafiahmedrifatt/"
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <main>
                <HeroSection />
                <Suspense fallback={null}>
                    <AboutSection />
                </Suspense>
                <Suspense fallback={null}>
                    <SkillsSection />
                </Suspense>
                <Suspense fallback={null}>
                    <ProjectSection />
                </Suspense>
                <Suspense fallback={null}>
                    <ContactSection />
                </Suspense>
            </main>
        </>
    );
};

export default Home;