import emailjs from '@emailjs/browser';
import React from 'react';

const ContactSection = () => {

    const handleSubmit = e => {
        e.preventDefault()
        // const form = e.target;
        // const formData = new FormData(form)
        // const formObj = Object.fromEntries(formData)

        emailjs.sendForm('service_aqzkdf8', 'template_s2srvyp', e.target, 'N871wuv_mpCTd7wBl')
            .then(
                () => {
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }


    return (
        <div id='contact' className='w-full max-w-6xl mx-auto px-4 py-16'>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            GET IN TOUCH
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Ready to start your next project? Let's connect and discuss how we can work together.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Email</p>
                                <a href='mailto:rafiahmedrifat1@gmail.com' className="hover:opacity-80 cursor-pointer text-secondary">rafiahmedrifat1@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary" >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Phone</p>
                                <a href='http://wa.me/+8801516549414' className="hover:opacity-80 cursor-pointer text-primary" >+8801516549414</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Location</p>
                                <p className='text-primary'>Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-vertical"
                                    placeholder="Tell me about your project or how I can help..."
                                />
                            </div>

                            <button type='submit' className='w-full bg-primary p-3 rounded text-white'>
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;