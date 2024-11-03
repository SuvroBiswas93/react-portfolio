import React from 'react';
import { Layout, Code2 } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux']
  },
  {
    category: 'Tools & Others',
    icon: <Code2 className="w-6 h-6" />,
    items: ['Git', 'Webpack', 'Vite', 'Jest', 'Responsive Design', 'Performance Optimization']
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4 text-blue-500">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-400 flex items-center before:content-['•'] before:mr-2 before:text-blue-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}