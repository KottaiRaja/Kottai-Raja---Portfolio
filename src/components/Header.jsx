import React, { useState  } from "react";
import { Home, User, Briefcase, TerminalSquare, Menu, X, Contact } from 'lucide-react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        window.scrollTo({
            top: document.getElementById(sectionId).offsetTop - 60,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            < nav className="fixed top-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 px-6 py-4 border-b border-gray-800" >
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        KOTTAI RAJA <span className="text-white">PORTFOLIO</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {[
                            { id: 'home', label: 'Home', icon: <Home size={18} /> },
                            { id: 'about', label: 'About', icon: <User size={18} /> },
                            { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
                            { id: 'skills', label: 'Skills', icon: <TerminalSquare size={18} /> },
                            { id: 'contact', label: 'Contact', icon: <Contact size={18} /> },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300 ${activeSection === item.id ? 'text-cyan-400' : ''
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-white">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav >

            < div className={`fixed top-16 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
                    {[
                        { id: 'home', label: 'Home', icon: <Home size={18} /> },
                        { id: 'about', label: 'About', icon: <User size={18} /> },
                        { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
                        { id: 'skills', label: 'Skills', icon: <TerminalSquare size={18} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300 ${activeSection === item.id ? 'text-cyan-400' : ''
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div >
        </div>
    )

}
export default Header;