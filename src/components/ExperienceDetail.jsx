import React from 'react';
import { motion } from 'framer-motion';

const careerTrajectory = [
  {
    period: 'Apr 2026 — Present',
    title: 'Software Engineer Consultant',
    description:
      'Leading full-stack development and architectural decisions across multi-tenant healthcare SaaS platforms. Driving production reliability, secure API design, Sever Monitoring and scalable system integrations across flagship products.',
    tags: [],
    isCurrent: true,
  },
  {
    period: 'Oct 2025 — Apr 2026',
    title: 'Trainee Software Engineer',
    description:
      'Spearheaded full-stack feature delivery across administrative dashboards, partner ecosystems, and real-time systems. Optimized backend workflows and contributed to high-performance API architectures.',
    tags: [],
    isCurrent: false,
  },
  {
    period: 'Apr 2025 — Oct 2025',
    title: 'Software Engineer Intern',
    description:
      'Contributed to production software development across backend, full-stack, and performance optimization workstreams using modern frameworks.\n\n• Built REST APIs using FastAPI to bridge LLM-based AI models with frontend applications, leveraging Celery and Redis for asynchronous processing.\n• Restructured a Laravel backend with OAuth authentication and email notification workflows to support a React-based CMS.\n• Improved Largest Contentful Paint (LCP) and Core Web Vitals on high-traffic websites through automated image optimization and asset minification.',
    tags: [],
    isCurrent: false,
  },
];

const ExperienceDetail = () => {
  return (
    <section id="experience" className="py-14 md:py-16 bg-[#060d1f]">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Career Trajectory
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            The path of architectural evolution at DigitalBee Labs
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700/80" />

          <div className="space-y-10">
            {careerTrajectory.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-10"
              >
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                    role.isCurrent
                      ? 'bg-blue-500 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]'
                      : 'bg-[#060d1f] border-slate-500'
                  }`}
                />

                {role.isCurrent ? (
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {role.period}
                  </span>
                ) : (
                  <p className="text-sm text-slate-500 mb-2 font-medium">{role.period}</p>
                )}

                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{role.title}</h3>

                <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-3 max-w-2xl">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetail;
