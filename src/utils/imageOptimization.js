// Image optimization utilities
export const getOptimizedImageSrc = (imagePath) => {
    // This function can be extended to use CDN or image optimization services
    return imagePath;
};

export const generateSrcSet = (imagePath, sizes = [320, 640, 960, 1280]) => {
    // For future integration with image optimization services
    return imagePath;
};

// Performance monitoring utilities
export const reportWebVitals = (metric) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
        // Send metrics to analytics service
        const data = {
            name: metric.name,
            value: Math.round(metric.value),
            id: metric.id,
            url: window.location.pathname,
            timestamp: new Date().toISOString()
        };

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Web Vital:', data);
        }
    }
};

// Cache management for service workers
export const cacheVersions = {
    CACHE_NAME: 'portfolio-v1',
    CACHE_ASSETS: [
        '/',
        '/index.html',
        '/profilePhoto.jpg'
    ]
};
