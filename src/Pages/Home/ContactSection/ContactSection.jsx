import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const listVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: 'easeOut' }
    }
};

const hoverLift = {
    whileHover: {
        y: -6,
        scale: 1.01,
        transition: { duration: 0.25, ease: 'easeOut' }
    }
};

const contactMethods = [
    {
        label: 'Email',
        value: 'rafiahmedrifat1@gmail.com',
        href: 'mailto:rafiahmedrifat1@gmail.com',
        accent: 'from-blue-500/10 to-blue-600/10',
        border: 'border-blue-500/20',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        label: 'WhatsApp',
        value: '+8801516549414',
        href: 'http://wa.me/+8801516549414',
        accent: 'from-emerald-500/10 to-emerald-600/10',
        border: 'border-emerald-500/20',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        label: 'Location',
        value: 'Dhaka, Bangladesh',
        href: null,
        accent: 'from-purple-500/10 to-purple-600/10',
        border: 'border-purple-500/20',
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

const ContactSection = () => {
    return (
        <motion.section
            id="contact"
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-14 sm:py-16 lg:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-12 -right-16 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl" />
                </div>

                <motion.div className="text-center space-y-4 relative z-10" variants={cardVariants}>
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 shadow-lg">
                        💬 Let&apos;s connect
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                        Ready to collaborate on something exciting?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Whether you have a project in mind or just want to say hi, drop me a line—curious conversations are where the best ideas start.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[2fr_1.5fr] lg:gap-12 relative z-10">
                    <motion.div className="space-y-6" variants={listVariants}>
                        {contactMethods.map((method) => (
                            <motion.div
                                key={method.label}
                                className={`flex items-center gap-4 rounded-3xl border ${method.border} bg-gradient-to-r ${method.accent} p-5 sm:p-6 shadow-xl`}
                                variants={cardVariants}
                                {...hoverLift}
                            >
                                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gray-900/70 border border-gray-700">
                                    {method.icon}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-300">
                                        {method.label}
                                    </p>
                                    {method.href ? (
                                        <a
                                            href={method.href}
                                            className="text-lg font-semibold text-white hover:text-blue-200 transition-colors duration-200"
                                        >
                                            {method.value}
                                        </a>
                                    ) : (
                                        <p className="text-lg font-semibold text-white">{method.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="rounded-3xl border border-gray-700/40 bg-gray-900/80 p-6 sm:p-8 shadow-2xl space-y-5"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-bold text-white">Prefer email?</h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            I typically reply within a day. Include a quick overview of what you&apos;re building, and we can jump straight into ideas.
                        </p>
                        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-4 text-sm text-blue-100">
                            👇 Tap below and your mail client will open with my address prefilled.
                        </div>
                        <a
                            href="mailto:rafiahmedrifat1@gmail.com"
                            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Compose an email
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6l-8 8m-5-3v6h6" />
                            </svg>
                        </a>
                        <div className="text-xs text-gray-500">
                            Not into email? Ping me on WhatsApp—happy to chat there too.
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
