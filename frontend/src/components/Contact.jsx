import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: <Mail size={24} strokeWidth={1.5} />,
      label: 'Email',
      value: 'mndinesh379@gmail.com',
      link: 'mailto:mndinesh379@gmail.com',
    },
    {
      icon: <Phone size={24} strokeWidth={1.5} />,
      label: 'Phone',
      value: '+91 9390140191',
      link: 'tel:+919390140191',
    },
    {
      icon: <MapPin size={24} strokeWidth={1.5} />,
      label: 'Location',
      value: 'Bengaluru, India',
      link: null,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Contact</h2>
        <p className="text-lg text-gray-400 mb-16">
          Let's connect and discuss how we can work together.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white text-black p-6 rounded-lg flex items-center gap-4 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-black">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-medium hover:text-gray-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{info.value}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black rounded-md border-2 border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-black rounded-md border-2 border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white text-black rounded-md border-2 border-gray-300 focus:border-gray-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 px-6 py-6 text-base rounded-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
