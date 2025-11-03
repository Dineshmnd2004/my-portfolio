import React from 'react';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sweet Delights – ML-Based Sweet Ordering Platform',
      description:
        'Built a full-stack sweet ordering website using Flask, HTML/CSS/JS, and MongoDB. Integrated an Apriori ML model to suggest frequently bought items, improving user experience and increasing cross-selling opportunities.',
      technologies: ['Flask', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Apriori ML'],
      github: null,
    },
    {
      title: 'Mental Health Detection via Facial Expression',
      description:
        'Developed a real-time emotion detection application using Python, CNN, and OpenCV. The system classifies facial expressions into different emotional states to aid early mental health screening and support.',
      technologies: ['Python', 'CNN', 'OpenCV', 'Machine Learning'],
      github: null,
    },
    {
      title: 'ENT Prescription Prediction Using Machine Learning',
      description:
        'Created a prediction model using Random Forest, SVM, and Logistic Regression algorithms. Achieved 89% accuracy using stacking ensemble methods and hyperparameter tuning to support ENT diagnosis.',
      technologies: ['Python', 'Random Forest', 'SVM', 'Logistic Regression'],
      github: null,
    },
    {
      title: 'Afford URL Shortener',
      description:
        'A React-based web application that allows users to shorten long URLs into compact, shareable links. The app provides an intuitive interface for generating and managing shortened URLs, focusing on speed and usability.',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'API Integration'],
      github: 'https://github.com/Dineshmnd2004/afford-url-shortener',
    },
    {
      title: 'GUVI Sign In and Login Pages',
      description:
        'A responsive React project that demonstrates user authentication interface design, featuring clean and modern sign-in and login pages. Built with reusable components and form validation logic to provide a smooth user experience.',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Form Validation'],
      github: 'https://github.com/Dineshmnd2004/guvi-hcl',
    },
    {
      title: 'ToDo List Manager',
      description:
        'A simple yet functional desktop app for managing daily tasks. Implemented using Java, focusing on CRUD operations and file handling. Demonstrates OOP concepts and practical Java programming skills.',
      technologies: ['Java', 'OOP', 'File Handling', 'CRUD Operations'],
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Projects</h2>
        <p className="text-lg text-gray-600 mb-16">
          A selection of projects showcasing my technical skills and problem-solving abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-200 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
