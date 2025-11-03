import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
            Naga Dinesh Mesaragandla
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-500 mb-8 font-light">
            Web Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Computer Science student at Jain University, specializing in building scalable web applications and intelligent systems. Passionate about solving real-world problems through code.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-base rounded-md transition-all duration-200"
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-base rounded-md transition-all duration-200"
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/Dineshmnd2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Github size={28} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/naga-dinesh-091087339"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Linkedin size={28} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:mndinesh379@gmail.com"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Mail size={28} strokeWidth={1.5} />
            </a>
            <a
              href="https://Dineshmnd2004.github.io/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <ExternalLink size={28} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
