import React from 'react';
import axios from 'axios';
import { Mail } from 'lucide-react';

const Contact = () => {
    const sendEmail = async (form) => {
        try {
            form.preventDefault();

            console.log("form", form)

            const name = form?.target?.name?.value;
            const email = form?.target?.email?.value;
            const subject = form?.target?.subject?.value;
            const message = form?.target?.message?.value;

            const result = await axios.post("http://localhost:5000/api/send-email", {
                from: `${name} <${email}>`,
                subject: subject,
                text: message,
            });
            if (result?.status === 200) {
                alert("Email sent Successfully!");
                window.location.reload();
            }
            console.log("result", result)
        } catch (err) {
            console.error("Email failed", err);
        }
    };


    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span>
                        </h2>
                        <p className="text-gray-400 mt-2">Have a project in mind? Let's work together!</p>
                    </div>

                    <form className="space-y-6" onSubmit={sendEmail} >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name='name'
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name='subject'
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                name='message'
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
                                <Mail size={18} />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;