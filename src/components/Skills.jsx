import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Settings, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-primary" />,
      skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Redux", "MUI"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-primary" />,
      skills: ["Laravel", "ASP.NET", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Firebase"]
    },
    {
      title: "Mobile & Apps",
      icon: <Smartphone className="text-primary" />,
      skills: ["Flutter", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="text-primary" />,
      skills: ["AWS", "GitHub Actions", "Docker", "Linux", "Vercel", "Contabo"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              I am comfortable working across the full stack and building robust, scalable systems using modern technologies.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold">
            <Code2 size={24} />
            <span>Always Learning</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
