import React from "react";
import Experience from "../assets/experience.jpg";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <p className="text-gray-300 mb-6">
                            I'm a passionate fullstack web developer with 2.5 years of experience building modern web applications.
                            I specialize in React, CSS, NodeJs and NestJs that enhance user experience.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Skilled in front-end and back-end development, proficient in languages such as HTML, CSS, JavaScript, with expertise in frameworks like React, Node.js. Strong problem-solving abilities, adept at creating responsive and visually appealing web applications while ensuring optimal functionality and user engagement.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="font-bold text-xl mb-2">Education</h3>
                                <p className="text-gray-400">BSc in Information Technology<br />karpagam academy of higher education</p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-lg">
                                <h3 className="font-bold text-xl mb-2">Experience</h3>
                                <p className="text-gray-400">2+ Years<br />Fullstack Web Development</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="w-full h-80 bg-gray-700 rounded-lg overflow-hidden">
                                <img
                                    src={Experience}
                                    alt="Working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg border border-gray-700 w-40">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                    2+
                                </div>
                                <div className="text-sm text-gray-400">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;