import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-black mb-2">MND</div>
            <p className="text-gray-600">
              © {currentYear} Naga Dinesh Mesaragandla. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/Dineshmnd2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/naga-dinesh-091087339"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:mndinesh379@gmail.com"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://Dineshmnd2004.github.io/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              <ExternalLink size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
