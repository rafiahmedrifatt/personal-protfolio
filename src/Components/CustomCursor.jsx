import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    // Raw mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth trailing ring
    const ringX = useSpring(mouseX, { stiffness: 250, damping: 25, mass: 0.6 });
    const ringY = useSpring(mouseY, { stiffness: 250, damping: 25, mass: 0.6 });

    const [hovering, setHovering] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setVisible(true);

            // Enlarge over interactive elements
            const target = e.target;
            const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
            setHovering(!!interactive);
        };

        const hideCursor = () => setVisible(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Small solid dot — follows instantly */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-white md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: visible ? 1 : 0,
                }}
            />

            {/* Outer ring — trails with a spring */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-white/70 mix-blend-difference md:block"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: visible ? 1 : 0,
                }}
                animate={{
                    width: hovering ? 48 : 28,
                    height: hovering ? 48 : 28,
                    backgroundColor: hovering ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
