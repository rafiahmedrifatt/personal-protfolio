import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[var(--border)] py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-dim)]">
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                    Rafi Ahmed Rifat <span className='text-[var(--accent)]'>Full Stack Developer</span>
                </span>
                <span>© {new Date().getFullYear()} · Built with React &amp; Tailwind</span>
            </div>
        </footer>
    );
};

export default Footer;
