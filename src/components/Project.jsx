import React from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';

const Project = () => {

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {[
                        {
                            title: "Footprints - AI",
                            description: "The Footprints application has been tailored for shopping malls and retailers, providing a comprehensive solution for operational efficiency, customer engagement, and targeted marketing. Built on a robust tech stack Node.js, ReactJS, MongoDB, and MySQL it integrates seamlessly with essential modules like Retail Analytics, Digital Signage, Campaign Management, and Sales Tracking. With deep integration into key marketing channels such as Facebook , Instagram  and top email marketing platforms, Footprints enables data-driven, high-impact campaigns while optimizing workflows and enhancing lead generation",
                            tech: ["React", "Node.js", "CSS", "MongoDB"],
                            image: "/api/placeholder/600/400"
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-700"
                        >
                            {/* <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div> */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* <div className="flex justify-between">
                                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1">
                                        <Github size={16} />
                                        <span>View Code</span>
                                    </button>
                                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1">
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* /r */}
            </div>
        </section>
    )
}

export default Project;