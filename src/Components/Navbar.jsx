import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? 'panel' : 'bg-transparent border-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#home" className="font-mono text-sm tracking-widest text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                    RAR<span className="text-[var(--accent)]">.dev</span>
                </a>

                <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-[var(--text-dim)]">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="hover:text-white transition-colors relative group">
                                {l.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="hidden md:inline-block font-mono text-xs px-4 py-2 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                >
                    Let&apos;s talk
                </a>

                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-white text-xl"
                    aria-label="Toggle menu"
                >
                    {open ? '✕' : '☰'}
                </button>
            </nav>

            {open && (
                <div className="md:hidden panel border-t border-[var(--border)]">
                    <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm text-[var(--text-dim)]">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.header>
    );
};

export default Navbar;
