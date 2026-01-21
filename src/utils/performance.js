// Performance monitoring and Web Vitals tracking
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export const initWebVitals = () => {
    if (process.env.NODE_ENV === 'production') {
        // Cumulative Layout Shift
        onCLS(metric => {
            console.log('CLS:', metric.value); // Should be < 0.1
            // Send to analytics
            sendToAnalytics('CLS', metric.value);
        });

        // First Input Delay
        onFID(metric => {
            console.log('FID:', metric.value); // Should be < 100ms
            sendToAnalytics('FID', metric.value);
        });

        // First Contentful Paint
        onFCP(metric => {
            console.log('FCP:', metric.value); // Should be < 1.8s
            sendToAnalytics('FCP', metric.value);
        });

        // Largest Contentful Paint
        onLCP(metric => {
            console.log('LCP:', metric.value); // Should be < 2.5s
            sendToAnalytics('LCP', metric.value);
        });

        // Time to First Byte
        onTTFB(metric => {
            console.log('TTFB:', metric.value); // Should be < 600ms
            sendToAnalytics('TTFB', metric.value);
        });
    }
};

const sendToAnalytics = (name, value) => {
    // Send to your analytics service (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && 'gtag' in window) {
        gtag('event', 'page_view', {
            metric_name: name,
            metric_value: value,
            metric_unit: 'ms'
        });
    }
};

// Resource hints optimization
export const addResourceHints = () => {
    const hints = [
        {
            rel: 'preload',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            as: 'style'
        },
        {
            rel: 'dns-prefetch',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'dns-prefetch',
            href: 'https://fonts.gstatic.com'
        }
    ];

    hints.forEach(hint => {
        const link = document.createElement('link');
        Object.keys(hint).forEach(key => {
            link.setAttribute(key, hint[key]);
        });
        document.head.appendChild(link);
    });
};

// Check performance metrics
export const checkPerformance = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('Page Load Time:', pageLoadTime, 'ms');
        console.log('Connect Time:', connectTime, 'ms');
        console.log('Render Time:', renderTime, 'ms');

        return {
            pageLoadTime,
            connectTime,
            renderTime
        };
    }
};

// Preload critical resources
export const preloadCriticalResources = () => {
    const resources = [
        { href: '/profilePhoto.jpg', as: 'image' }
    ];

    resources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        document.head.appendChild(link);
    });
};
