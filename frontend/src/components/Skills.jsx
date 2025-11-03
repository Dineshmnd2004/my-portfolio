import React from 'react';
import { Code, Globe, Database, Wrench, Brain, Users } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} strokeWidth={1.5} />,
      title: 'Programming Languages',
      skills: ['Python', 'C (Basics)', 'JavaScript', 'SQL'],
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: 'Web Development',
      skills: ['React.js', 'HTML', 'CSS', 'Flask', 'PHP'],
    },
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: 'Database Management',
      skills: ['MySQL', 'MongoDB', 'Database Design', 'Query Optimization'],
    },
    {
      icon: <Wrench size={32} strokeWidth={1.5} />,
      title: 'Tools & Software',
      skills: ['GitHub', 'VS Code', 'Excel', 'Word', 'PowerPoint'],
    },
    {
      icon: <Brain size={32} strokeWidth={1.5} />,
      title: 'Machine Learning & AI',
      skills: ['CNN', 'OpenCV', 'Random Forest', 'SVM', 'Logistic Regression', 'Apriori Algorithm'],
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: 'Soft Skills',
      skills: ['Teamwork', 'Time Management', 'Communication', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white text-black p-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-black">{category.icon}</div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
