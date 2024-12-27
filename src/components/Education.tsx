import React from 'react';
import { GraduationCap} from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "American International University Bangladesh",
    description: "Relevant coursework in Data Structures, Algorithms, Web Development, and Database Management.",
    gpa: "3.8/4.0"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Magura Govt HSS college",
    description: "Major in Science ",
    gpa: "5.0/5.0"
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-800" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400">{edu.description}</p>
                  <p className="text-gray-400 mt-2">GPA: <span className="text-blue-400">{edu.gpa}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}