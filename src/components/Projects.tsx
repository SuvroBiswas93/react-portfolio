import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'Random User Generator Web application built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
    github: 'https://github.com/SuvroBiswas93/random-user-generator-react.git',
    demo: 'https://random-user-generator-react-phi.vercel.app/'
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform using Next.js',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072',
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Project Three',
    description: 'Real-time chat application with WebSocket',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    <Github size={20} className="mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}