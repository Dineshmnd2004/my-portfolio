import React from 'react';

const About = () => {
  const stats = [
    { value: '7.8', label: 'CGPA' },
    { value: '6+', label: 'Projects' },
    { value: '3', label: 'Certifications' },
    { value: '2026', label: 'Graduation' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-16">About Me</h2>
        
        <div className="space-y-8 mb-16">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm a motivated and detail-oriented Computer Science student at Jain University, Bengaluru, with practical experience in full-stack web development, backend systems, and machine learning. Currently maintaining a CGPA of 7.8, I combine academic excellence with hands-on project experience.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            My expertise lies in building scalable web applications using modern frameworks like React.js and Flask, coupled with database management using MongoDB and MySQL. I've successfully deployed real-world applications, including an ML-powered e-commerce platform and an AI-based emotion detection system.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm proficient in Python, SQL, HTML/CSS, and have a strong foundation in machine learning and AI concepts. As a quick learner with strong problem-solving abilities, I thrive in collaborative environments and am eager to contribute to impactful and scalable software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
