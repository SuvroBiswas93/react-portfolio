import React from 'react';
import { Facebook,Instagram, Mail} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center justify-center md:justify-start">
              Made by Suvro Biswas
            </p>
            <p className="text-sm mt-1">© {currentYear} All rights reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-[#E4405F] transition-colors"
              aria-label="Instagram"
            >
              < Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:shuvo.249963@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}