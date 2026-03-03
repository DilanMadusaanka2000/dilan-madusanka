import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 0,
      company: "DigitalBee Labs",
      role: "Software Engineer Intern",
      period: "2025 April - 2026 March",
      description: "Completed a Software Engineering Internship with hands-on experience in modern web technologies and mentoring junior developers in software engineering best practices.",
      skills: ["Laravel", "ASP.NET", "FastAPI", "Next.js", "React", "Vue.js", "JavaScript", "Software Development"],
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate(`/experience/${exp.id}`)}
                    className="md:ml-6 md:flex-shrink-0 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 justify-center md:justify-start h-fit whitespace-nowrap group-hover:gap-3"
                  >
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
