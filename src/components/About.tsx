import React from 'react';
import { Github, Linkedin, Mail, Code2, Coffee, Heart } from 'lucide-react';

export default function About() {
  return (
    <div id ="#about" className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <img
              src="/suvro_biswas.jpg"
              alt="Profile"
              className="w-32 h-32 mt-4 rounded-full mx-auto border-4 border-blue-500"
            />
            <h1 className="text-4xl font-bold text-white mb-2">Suvro Biswas</h1>
            <p className="text-xl text-blue-400">Full Stack Developer</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-3">
              <Code2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">About Me</h2>
                <p>
                  I'm a passionate Full Stack Developer with a strong foundation in web technologies
                  and a keen eye for creating user-friendly applications. With expertise in both
                  frontend and backend development, I strive to build scalable and efficient solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Coffee className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">What I Do</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Develop responsive and interactive web applications</li>
                  <li>Create RESTful APIs and backend services</li>
                  <li>Implement database solutions and optimize performance</li>
                  <li>Write clean, maintainable, and well-documented code</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Interests</h2>
                <p>
                  Beyond coding, I'm passionate about open-source contribution, staying updated with
                  new technologies, and sharing knowledge with the developer community. I enjoy
                  solving complex problems and turning ideas into reality through code.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shuvo.249963@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}