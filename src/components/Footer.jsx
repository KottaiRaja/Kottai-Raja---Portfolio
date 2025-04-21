import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { constants } from "../constants/constants";

const Footer = () => {
    return (
        < footer className="bg-gray-900 border-t border-gray-800 py-8" >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            KOTTAI RAJA <span className="text-white">PORTFOLIO</span>
                        </a>
                    </div>
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Kottai Raja S. All rights reserved.
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* <a href={constants.GITHUBURL} className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Github size={20} />
                        </a> */}
                        <a href={constants.LINKEDIN} className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={
                                `mailto:${constants.GMAIL}`
                            }
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;