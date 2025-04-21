import React from "react";
import { Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import { constants } from "../constants/constants";

import ProfileIcon from "../assets/kottairaja.jpeg";

const Home = () => {

    return (
        <section id="home" className="min-h-screen flex items-center">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse"></div>
                            <img
                                src={ProfileIcon}
                                alt="Profile"
                                className="absolute top-2 left-2 w-full h-full object-cover rounded-full border-4 border-gray-900"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="block">Hi, I'm</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                    Kottai Raja S
                                </span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-300">
                                Full Stack Web Developer
                            </h2>
                            <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
                                I create engaging, accessible, and high-performance web applications using modern technologies.
                                Leveraging extensive experience in web development to design and deploy innovative solutions that enhance user experiences and drive business growth. I am passionate about continuously refining skills and staying abreast of emerging technologies in the ever-evolving digital realm.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                <button onClick={() => {
                                    window.scrollTo({
                                        top: document.getElementById('contact').offsetTop - 80,
                                        behavior: 'smooth',
                                    });
                                }
                                }
                                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity duration-300 flex items-center gap-2">
                                    <Mail size={18} />
                                    Contact Me
                                </button>
                                <a href={constants.RESUME} className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2">
                                    <ExternalLink size={18} />
                                    View Resume
                                </a>
                            </div>
                            <div className="flex justify-center md:justify-start gap-6 pt-6">
                                {/* <a href={constants.GITHUBURL} className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Github size={24} />
                                </a> */}
                                <a href={constants.LINKEDIN} className="text-gray-400 hover:text-white transition-colors duration-300">
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href={`mailto:${constants.GMAIL}`}
                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;