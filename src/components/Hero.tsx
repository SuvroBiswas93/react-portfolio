import React from 'react';
import { Github, Linkedin, Mail, FileDown, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] opacity-10 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Suvro <span className="text-blue-500">Biswas</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12 animate-fade-in">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce-slow">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              <FileDown className="mr-2" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" size={32} />
      </div>
    </div>
  );
}