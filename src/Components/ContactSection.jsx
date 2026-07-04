import React from 'react';
import { motion } from 'framer-motion';

const socials = [
    { label: 'GitHub', href: 'https://github.com/rafiahmedrifatt' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafiahmedrifatt/' },
    { label: 'Email', href: 'mailto:developer@visiontillion.com' },
];

const ContactSection = () => {
    return (
        <section id="contact" className="relative py-28 px-6 bg-grid">
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="font-mono text-xs text-[var(--accent)]">04 / CONTACT</span>
                    <h2 className="mt-4 text-4xl md:text-6xl font-semibold text-gradient glow-text leading-tight">
                        Let&apos;s build<br />something great
                    </h2>
                    <p className="mt-6 text-[var(--text-dim)] text-lg">
                        Got a project in mind or just want to say hi? My inbox is always open.
                    </p>

                    <a
                        href="mailto:developer@visiontillion.com"
                        className="inline-block mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-[var(--accent)] transition-colors"
                    >
                        Say hello →
                    </a>

                    <div className="mt-12 flex items-center justify-center gap-8 font-mono text-sm">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors relative group"
                            >
                                {s.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
