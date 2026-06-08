import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cloud, Layout, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Backend',
    icon: Terminal,
    skills: [
      ['ASP.NET Core', 'Laravel'],
      ['FastAPI', 'PostgreSQL'],
      ['Redis', 'C#'],
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      ['AWS S3', 'Cloudflare'],
      ['Docker', 'Kubernetes'],
      ['GitHub Actions', 'Linux'],
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      ['Next.js', 'React'],
      ['Vue.js', 'TypeScript'],
      ['Tailwind CSS', 'Zustand'],
    ],
  },
  {
    title: 'Mobile & Tools',
    icon: Smartphone,
    skills: [
      ['Flutter', 'Firebase'],
      ['GraphQL', 'MongoDB'],
      ['Vercel', 'Postman'],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-14 md:py-20 bg-[#060d1f] border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Comfortable working across the full stack and building robust, scalable production systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-[#0c1428] border border-slate-800/80 p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className="text-slate-300" />
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {row.map((skill) => (
                        <div key={skill} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 bg-slate-500 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
