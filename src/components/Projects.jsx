import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'VoltRide — AI Powered Vehicle Hire Management System',
    category: 'Web Application',
    image: 'img/project-1.png',
    description:
      'Full-stack vehicle rental system with intelligent demand forecasting, Laravel REST API, Next.js admin dashboard, and FastAPI ML microservice.',
    tags: ['Laravel', 'FastAPI', 'Next.js', 'MySQL', 'S3'],
    github: 'https://github.com/DilanMadusaanka2000/VoltRide-Vehicle-Hire-System',
  },
  {
    title: 'Hybrid ML-Based Diabetes Prediction System',
    category: 'AI / Machine Learning',
    image: 'img/project-2.png',
    description:
      'Hybrid ML system for diabetes prediction using FastAPI, Scikit-learn, TensorFlow, and Redis for real-time secure API communication.',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'Redis', 'Docker'],
    github: 'https://github.com/DilanMadusaanka2000/diabetes_prediction_hybrid_model',
  },
  {
    title: 'Hotel Booking System (MERN Stack)',
    category: 'Full-Stack Web Application',
    image: 'img/project-3.png',
    description:
      'Complete hotel reservation platform with JWT authentication, role-based access, Cloudinary uploads, and admin booking management.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    github: 'https://github.com/DilanMadusaanka2000/BookNest-Hotels-Booking?tab=readme-ov-file',
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-14 md:py-20 bg-[#060d1f] border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Selected builds showcasing full-stack engineering, AI integration, and scalable system design.
            </p>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/40 hover:decoration-blue-300 transition-colors whitespace-nowrap"
          >
            View All Projects
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#0c1428] border border-slate-800/80 overflow-hidden hover:border-blue-500/40 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-lg bg-black/50 text-white hover:bg-blue-500/80 transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="View on GitHub"
                >
                  <Github size={16} />
                </a>
              </div>

              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/80 mb-2">
                  {project.category}
                </p>

                <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800/90 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View on GitHub
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
