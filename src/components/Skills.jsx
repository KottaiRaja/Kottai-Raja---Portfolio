import React from "react";
import { Code, TerminalSquare } from "lucide-react";
const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Code size={20} />
                            <span>Web Devalopment Technologies</span>
                        </h3>

                        <div className="space-y-6">
                            {[
                                { name: "HTML/CSS", level: 95 },
                                { name: "JavaScript", level: 85 },
                                { name: "React", level: 90 },
                                { name: "NodeJs", level: 90 },
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <TerminalSquare size={20} />
                            <span>Other Skills</span>
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                "Express",
                                "MongoDB",
                                "MySQL",
                                "Bootstrap",
                                "Git & GitHub",
                                "RESTful APIs",
                            ].map((skill, index) => (
                                <div key={index} className="bg-gray-900 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
                                    <span className="text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;