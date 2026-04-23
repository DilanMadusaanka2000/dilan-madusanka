import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
//ArrowRight
const Experience = () => {
  //const navigate = useNavigate();

  const experiences = [
    {
      id: 0,
      company: "DigitalBee Labs",
      roles: [
        {
          title: "Software Engineer Consultant",
          period: "Apr 2026 - Present",
        },
        {
          title: "Trainee Software Engineer",
          period: "Oct 2025 - Apr 2026",
        },
        {
          title: "Software Engineer Intern",
          period: "Apr 2025 - Oct 2025",
        }
      ],
      description:
        "Worked on building scalable full-stack applications, including multi-tenant SaaS systems, real-time features, and API-driven architectures using ASP.NET Core, FastAPI, Laravel and modern JavaScript frameworks. Contributed to full-stack development, system design, and performance optimization in production-level applications.",
      skills: [
        "Laravel",
        "ASP.NET",
        "FastAPI",
        "Next.js",
        "React",
        "Vue.js",
        "JavaScript",
        "Software Development"
      ],
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
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  
                  <div className="flex-1 space-y-4">

                    {/* Company */}
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Briefcase size={18} />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>

                    {/* Roles */}
                    {exp.roles.map((role, i) => (
                      <div key={i} className="space-y-1 border-l-2 border-primary pl-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {role.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                            {role.period}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Button */}
                  {/* <button
                    onClick={() => navigate(`/experience/${exp.id}`)}
                    className="md:ml-6 md:flex-shrink-0 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 justify-center md:justify-start h-fit whitespace-nowrap group-hover:gap-3"
                  >
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </button> */}

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