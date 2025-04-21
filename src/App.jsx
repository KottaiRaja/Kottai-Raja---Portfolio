import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);



  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className={`pt-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <Home />
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* Skills Section */}
        <Skills />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}