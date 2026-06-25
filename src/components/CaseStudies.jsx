import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: 'devops',
    category: 'DevOps / Platform Engineering',
    title: 'Healthcare Production Infrastructure & Reliability',
    image: '/img/industry/devops.png',
    tags: ['Cloudflare', 'Load Balancing', 'AWS', 'Monitoring'],
    summary:
      'Developed production infrastructure, performance monitoring, and security hardening for multi-tenant healthcare SaaS workloads.',
    projects: [
      {
        role: 'Platform Engineering',
        period: 'April 2025 – October 2025',
        subtitle: 'Healthcare Production Infrastructure & Reliability',
        techStack: ['Cloudflare', 'Load Balancing', 'PostgreSQL', 'Redis', 'AWS', 'Monitoring'],
        achievements: [
          'Developed and maintained production infrastructure for a multi-tenant healthcare SaaS platform, including deployment pipelines, environment management, and server security hardening.',
          'Developed load testing and production performance monitoring workflows — tracking CPU utilization, memory consumption, API latency, and database performance — to identify bottlenecks and improve system scalability.',
          'Developed resolution strategies for memory leaks, high CPU utilization, and application performance issues across production workloads.',
          'Developed Cloudflare integration for CDN delivery, DNS management, SSL/TLS security, caching optimization, and DDoS protection.',
          'Developed load balancing and traffic distribution strategies to improve system availability, fault tolerance, and scalable request handling.',
          'Developed monitoring, logging, and alerting workflows for proactive system health tracking, incident detection, and operational visibility.',
          'Developed security and bot protection mechanisms, including rate limiting, traffic filtering, and abuse prevention to protect healthcare services.',
        ],
      },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & Full-Stack',
    title: 'Multi-Tenant SaaS Healthcare Platform',
    image: '/img/industry/backend.png',
    tags: [],
    summary:
      'Architected and maintained a centralized multi-tenant SaaS backend serving 10+ healthcare applications with 300+ APIs and secure tenant isolation.',
    projects: [
      {
        role: 'Back End Developer',
        subtitle: 'Multi-Tenant SaaS Healthcare Platform',
        techStack: [],
        achievements: [
          'Architected and maintained a centralized multi-tenant SaaS backend serving 10+ healthcare applications with strict tenant isolation and secure data access.',
          'Designed scalable backend solutions and technical architectures to support business growth and platform expansion.',
          'Developed and maintained 300+ REST APIs, JWT authentication, refresh tokens, and RBAC authorization.',
          'Designed and optimized PostgreSQL databases with 70+ tables, indexing strategies, query optimization, and performance tuning.',
          'Built asynchronous background processing systems, event-driven workflows, and webhook-based automation for clinical workflows and partner integrations.',
          'Integrated third-party services including Lemon Squeezy, payment systems, Google Maps APIs, and external healthcare platforms.',
          'Implemented caching strategies using Redis to improve API performance and reduce database load.',
          'Applied secure software development practices following OWASP guidelines and HIPAA compliance requirements.',
          'Led technical discussions and collaborated with stakeholders to translate business requirements into scalable technical solutions.',
          'Conducted code reviews, enforced coding standards, and mentored junior developers on backend best practices.',
          'Identified and resolved performance bottlenecks through monitoring, profiling, and database optimization techniques.',
          'Designed fault-tolerant and maintainable systems using clean architecture, dependency injection, and modular design principles.',
          'Leveraged AI-assisted development tools to accelerate implementation, testing, debugging, and documentation workflows.',
          'Contributed to CI/CD pipelines, deployment automation, and production support activities.',
          'Evaluated technical risks, proposed mitigation strategies, and ensured timely delivery of high-quality software solutions.',
        ],
      },
    ],
  },
  {
    id: 'admin',
    category: 'Full-Stack Development',
    title: 'SaaS Administrative Ecosystem',
    image: '/img/industry/admin.png',
    tags: [],
    summary:
      'Developed a comprehensive SaaS administrative dashboard for complex healthcare operations and secure platform management.',
    projects: [
      {
        role: 'Full-Stack Developer',
        subtitle: 'SaaS Administrative Ecosystem',
        techStack: [],
        achievements: [
          'Developed the administrative dashboard to manage complex medical users, appointments, and platform-wide configurations end-to-end.',
          'Developed server-side authentication middleware and protected route handling to ensure secure data access across all administrative surfaces.',
          'Developed global application state management ensuring consistent data synchronization across the entire dashboard.',
          'Developed a failure monitoring system to track failed API requests, log error responses, and provide real-time visibility into system issues.',
          'Developed responsive, accessible UI components that streamlined complex administrative workflows.',
        ],
      },
    ],
  },
  {
    id: 'partner',
    category: 'Full-Stack Development',
    title: 'Real-time Affiliate & Partner Management',
    image: '/img/industry/partner.png',
    tags: [],
    summary:
      'Developed a partner ecosystem with real-time revenue tracking and webhook-driven financial updates.',
    projects: [
      {
        role: 'Full-Stack Developer',
        subtitle: 'Real-time Affiliate & Partner Management System',
        techStack: [],
        achievements: [
          'Developed a complete partner ecosystem for healthcare provider onboarding and real-time revenue tracking.',
          'Developed a real-time revenue tracking engine utilizing webhooks and persistent connections for zero-latency financial updates on partner dashboards.',
          'Developed high-performance state management to handle complex, real-time data streams and secure partner portals.',
        ],
      },
    ],
  },
  {
    id: 'doctor',
    category: 'Full-Stack Development',
    title: 'Doctor Webpage & Booking System',
    image: '/img/industry/doctorWebPage.png',
    tags: [],
    summary:
      'Developed auto-generated doctor pages, concurrency-safe booking, and indexed discovery at scale.',
    projects: [
      {
        role: 'Full-Stack Developer',
        subtitle: 'Doctor Webpage & Booking System',
        project: 'Full-Stack System Design',
        techStack: [],
        achievements: [
          'Developed auto-generated public webpages per doctor upon registration, with unique SEO-friendly URLs requiring zero manual setup.',
          'Developed multi-tenant architecture supporting thousands of isolated doctor pages under a unified domain with strict per-tenant data boundaries.',
          'Developed real-time availability sync between doctor mobile app and public booking page using event-driven updates to prevent stale slot display.',
          'Developed a concurrency-safe booking engine with database-level locking to eliminate double-booking under high-traffic conditions.',
          'Developed a modular CMS for articles, media, and health content with publish/unpublish workflows and extensible schema.',
          'Developed indexed doctor discovery with full-text search and filtering by name, specialization, and location for sub-second query resolution.',
          'Developed stateless APIs and horizontal scaling readiness to ensure scalability and fault tolerance across all services.',
        ],
      },
    ],
  },
  {
    id: 'emed',
    category: 'Full-Stack Development',
    title: 'eMed Blogging Platform',
    image: '/img/industry/emed-bloging.png',
    tags: [],
    summary:
      'Developed a high-performance medical blogging platform with advanced SEO and Core Web Vitals optimization.',
    projects: [
      {
        role: 'Full-Stack Developer',
        subtitle: 'eMed Blogging Platform',
        techStack: [],
        achievements: [
          'Developed a high-performance medical blogging platform leveraging server-side rendering, static generation, and dynamic routing for optimal scalability and SEO.',
          'Developed lightweight and scalable global state handling, improving state efficiency and reducing unnecessary re-renders.',
          'Developed advanced SEO strategies including meta tags, structured data, sitemap generation, and Open Graph integration to enhance search engine visibility.',
          'Developed an efficient API caching layer using incremental static regeneration strategies to reduce server load and improve response times.',
          'Developed page load optimizations with lazy loading, code splitting, and image optimization, significantly improving Core Web Vitals.',
          'Developed dynamic blog creation, editing, and categorization features with a clean and responsive UI for seamless content publishing.',
          'Developed secure API consumption, input validation, and protected routes using modern frontend security practices.',
        ],
      },
    ],
  },
  {
    id: 'ai',
    category: 'Support Projects',
    title: 'AI-Powered Smart Content Platform',
    image: '/img/industry/beevisionseo.png',
    tags: ['APIs', 'Frontend', 'FastAPI', 'Next.js'],
    summary:
      'Developed REST APIs and frontend interfaces bridging LLM models with async task processing.',
    projects: [
      {
        role: 'Support Project',
        subtitle: 'AI-Powered Smart Content Platform',
        techStack: [],
        achievements: [
          'Developed high-performance REST APIs to bridge communication between LLM-based AI models and the frontend.',
          'Developed an asynchronous task queue system to handle long-running AI operations without blocking user requests.',
          'Developed the frontend administrative dashboard for system configurations and AI content management.',
          'Developed secure registration and authentication flows connecting the frontend to backend API services.',
        ],
      },
    ],
  },
  {
    id: 'laravel',
    category: 'Support Projects',
    title: 'Laravel-based React CMS',
    image: '/img/industry/artium360.png',
    tags: ['Laravel', 'React', 'OAuth', 'Authentication'],
    summary:
      'Developed authentication and user management for a modern React-based CMS platform.',
    projects: [
      {
        role: 'Support Project',
        subtitle: 'Laravel-based React CMS & Authentication',
        techStack: [],
        achievements: [
          'Developed secure user registration and login authentication for a modern React-based CMS.',
          'Developed OAuth-based authentication integration connecting the Laravel backend with the React frontend.',
          'Developed backend authentication workflows and email notification services for seamless CMS user management.',
        ],
      },
    ],
  },
];

const DetailModal = ({ study, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!study) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#0c1428] border border-slate-700/80 shadow-2xl flex flex-col"
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-800 shrink-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
              {study.category}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white">{study.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-10">
          {study.projects.map((project, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-8 border-t border-slate-800' : ''}>
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/25 mb-2">
                  {project.role}
                </span>
                {project.period && (
                  <p className="text-xs text-slate-500 mb-1">{project.period}</p>
                )}
                <h4 className="text-lg font-bold text-white">{project.subtitle}</h4>
                {project.project && (
                  <p className="text-sm text-slate-500 mt-1">{project.project}</p>
                )}
              </div>

              {project.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-slate-800 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <ul className="space-y-3">
                {project.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-500/60 flex-shrink-0 mt-1" />
                    <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <section id="case-studies" className="py-14 md:py-20 bg-[#060d1f] border-t border-slate-800/50">
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
              Architectural Case Studies
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Deep dives into production-grade systems engineered for enterprise scale.
            </p>
          </div>
          <a
            href="#projects"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/40 hover:decoration-blue-300 transition-colors whitespace-nowrap"
          >
            Explore System Designs
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {caseStudies.map((study, index) => (
            <motion.button
              key={study.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              onClick={() => setActiveStudy(study)}
              className="group text-left rounded-2xl bg-[#0c1428] border border-slate-800/80 overflow-hidden hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/80 mb-2">
                  {study.category}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-800/90 text-slate-400 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug line-clamp-2">
                  {study.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {study.summary}
                </p>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors">
                  View Details
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeStudy && (
          <DetailModal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
