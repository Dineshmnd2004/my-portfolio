import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Jain University, Bengaluru',
      years: '2022 - 2026',
      score: 'CGPA: 7.8',
    },
    {
      degree: 'Class XII',
      institution: 'Sri Chaitanya Jr College, Andhra Pradesh',
      years: '2021 - 2022',
      score: 'Percentage: 85.5%',
    },
    {
      degree: 'Class X',
      institution: 'Gowtham Concept School, Andhra Pradesh',
      years: '2019 - 2020',
      score: 'Percentage: 100%',
    },
  ];

  const certifications = [
    'Python Basics – Coursera',
    'Building Web Applications in PHP – Coursera',
    'Artificial Intelligence Fundamentals – IBM',
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">Education</h2>
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={32} strokeWidth={1.5} className="text-black" />
            <h3 className="text-3xl font-bold text-black">Academic Background</h3>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200"
              >
                <h4 className="text-xl font-bold text-black mb-2">{edu.degree}</h4>
                <p className="text-gray-600 mb-1">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-500">
                  <span>{edu.years}</span>
                  <span>•</span>
                  <span className="font-medium">{edu.score}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award size={32} strokeWidth={1.5} className="text-black" />
            <h3 className="text-3xl font-bold text-black">Certifications</h3>
          </div>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200"
              >
                <p className="text-lg text-gray-700 font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
