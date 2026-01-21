import { useEffect } from 'react';
import { useLocation } from 'react-router';

// SEO Component for managing meta tags and structured data
export const useSEO = ({
    title = 'Rafi Ahmed Rifat - Full Stack Developer',
    description = 'Full Stack Developer portfolio showcasing web development projects, skills in React, Node.js, and modern web technologies.',
    keywords = 'Rafi Ahmed Rifat, Full Stack Developer, React Developer, Web Developer',
    image = 'https://rafiamedrifat.com/profilePhoto.jpg',
    url = 'https://rafiamedrifat.com',
    type = 'website',
    author = 'Rafi Ahmed Rifat'
} = {}) => {
    const location = useLocation();

    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(attribute, name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        // Primary SEO Meta Tags
        updateMetaTag('title', title);
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', author);
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Open Graph
        updateMetaTag('og:type', type, true);
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', image, true);
        updateMetaTag('og:url', url, true);

        // Twitter Card
        updateMetaTag('twitter:card', 'summary_large_image', true);
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:image', image, true);

        // Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = url + location.pathname;

        // Scroll to top on route change for better UX
        window.scrollTo(0, 0);
    }, [title, description, keywords, image, url, type, author, location.pathname]);
};

// Structured Data / JSON-LD Component
export const StructuredData = ({ data }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(data);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [data]);

    return null;
};

// Generate Person Schema
export const generatePersonSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rafi Ahmed Rifat',
    url: 'https://rafiamedrifat.com',
    image: 'https://rafiamedrifat.com/profilePhoto.jpg',
    description: 'Full Stack Developer',
    jobTitle: 'Full Stack Developer',
    sameAs: [
        'https://www.linkedin.com/in/rafi-ahmed-rifat',
        'https://github.com/rafiahmedrifat',
        'https://twitter.com/rafiahmedrifat'
    ],
    email: 'mailto:rafi.ahmed.rifat@example.com'
});

// Generate Website Schema
export const generateWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rafi Ahmed Rifat - Portfolio',
    url: 'https://rafiamedrifat.com',
    description: 'Full Stack Developer portfolio',
    creator: {
        '@type': 'Person',
        name: 'Rafi Ahmed Rifat'
    }
});
