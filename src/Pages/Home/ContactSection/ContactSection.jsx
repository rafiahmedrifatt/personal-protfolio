import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        emailjs
            .sendForm(
                'service_aqzkdf8',
                'template_s2srvyp',
                e.target,
                'N871wuv_mpCTd7wBl'
            )
            .then(() => {


                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'I will get back to you soon.',
                    confirmButtonColor: '#3085d6'
                });
                e.target.reset(); // Clear the form
            })
            .catch((error) => {
                console.error('❌ Failed to send message:', error);
            });
    };

    return (
        <div id='contact' className='bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"></div>

            <div className='w-full max-w-7xl mx-auto relative z-10'>

                {/* Section Header */}
                <div className='text-center mb-16'>
                    <span className='inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6'>
                        💬 Let's connect
                    </span>
                    <h2 className='text-5xl lg:text-6xl font-black text-gray-900 mb-4'>
                        Get In{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative'>
                            Touch
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your next project? Let's connect and discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100'>
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="text-4xl">📞</span>
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">Email</p>
                                        <a href='mailto:rafiahmedrifat1@gmail.com' className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                                            rafiahmedrifat1@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-green-600 group-hover:bg-green-700 transition-colors duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">WhatsApp</p>
                                        <a href='http://wa.me/+8801516549414' className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200">
                                            +8801516549414
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">Location</p>
                                        <p className='text-purple-600 font-medium'>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response Time Card */}
                        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white'>
                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-3xl">⚡</span>
                                Quick Response
                            </h4>
                            <p className="text-lg opacity-90">
                                I typically respond within <span className="font-bold">24 hours</span> and I'm always excited to discuss new projects and opportunities!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="text-4xl">✉️</span>
                                Send a Message
                            </h3>

                            <form className="space-y-6" onSubmit={handleSubmit} >
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-3">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                                        placeholder="Your phone number"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={6}
                                        required
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none resize-vertical text-gray-700 placeholder-gray-400"
                                        placeholder="Tell me about your project or how I can help..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type='submit'
                                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3'
                                >
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;