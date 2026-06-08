import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  Briefcase,
  Zap,
  Layout,
  Activity,
  Code,
  Search,
  Layers,
  Server,
  Globe,
  Shield,
  Cpu,
} from 'lucide-react';

const CATEGORY_STYLES = {
  devops: {
    label: 'DevOps / Platform Engineering',
    icon: <Cpu size={18} />,
    accent: 'from-violet-500 to-indigo-500',
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    dot: 'bg-violet-500',
  },
  backend: {
    label: 'Backend Development',
    icon: <Server size={18} />,
    accent: 'from-blue-500 to-cyan-400',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    dot: 'bg-blue-500',
  },
  fullstack: {
    label: 'Full-Stack Development',
    icon: <Layout size={18} />,
    accent: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    dot: 'bg-purple-500',
  },
  support: {
    label: 'Support Projects',
    icon: <Zap size={18} />,
    accent: 'from-emerald-500 to-teal-400',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
};

const experience = {
  company: 'DigitalBee Labs',
  logo: '/img/DBL_logo.webp',
  role: 'Software Engineer Consultant',
  tagline: 'Multi-tenant healthcare SaaS · Production infrastructure · Full-stack engineering',
  period: 'April 2025 – Present',
  longDescription:
    'Architected and delivered enterprise-grade healthcare SaaS systems spanning production infrastructure, multi-tenant backend platforms, real-time partner ecosystems, and performance-critical public-facing applications — driving scalability, security, and operational reliability at scale.',
  timeline: [
    { title: 'Software Engineer Intern', period: 'Apr 2025 – Oct 2025', status: 'completed' },
    { title: 'Trainee Software Engineer', period: 'Oct 2025 – Apr 2026', status: 'completed' },
    { title: 'Software Engineer Consultant', period: 'Apr 2026 – Present', status: 'current' },
  ],
  skills: [
    'ASP.NET Core',
    'C#',
    'Laravel',
    'FastAPI',
    'Next.js',
    'React',
    'Vue.js',
    'PostgreSQL',
    'Redis',
    'AWS S3',
    'Cloudflare',
    'SignalR',
    'Celery',
    'JWT',
    'HIPAA',
    'OWASP',
  ],
  sections: [
    {
      category: 'devops',
      period: 'April 2025 – October 2025',
      role: 'Platform Engineering',
      subtitle: 'Healthcare Production Infrastructure & Reliability',
      icon: <Shield size={22} className="text-white" />,
      techStack: ['Cloudflare', 'Load Balancing', 'PostgreSQL', 'Redis', 'AWS', 'Monitoring'],
      achievements: [
        'Designed, configured, and maintained production infrastructure for a multi-tenant healthcare SaaS platform, including deployment pipelines, environment management, and server security hardening.',
        'Conducted load testing and production performance monitoring — tracking CPU utilization, memory consumption, API latency, and database performance — to identify bottlenecks, optimize complex queries, and improve system scalability.',
        'Investigated and resolved memory leaks, high CPU utilization, and application performance issues across production workloads.',
        'Implemented and managed Cloudflare for CDN delivery, DNS management, SSL/TLS security, caching optimization, and DDoS protection.',
        'Configured load balancing and traffic distribution strategies to improve system availability, fault tolerance, and scalable request handling.',
        'Built monitoring, logging, and alerting workflows for proactive system health tracking, incident detection, and operational visibility.',
        'Applied security and bot protection mechanisms, including rate limiting, traffic filtering, and abuse prevention to protect healthcare services.',
      ],
    },
    {
      category: 'backend',
      role: 'Back End Developer',
      subtitle: 'Multi-Tenant SaaS Healthcare Platform',
      project: '',
      icon: <Activity size={22} className="text-white" />,
      techStack: [],
      achievements: [
        'Architected and developed a centralized multi-tenant SaaS backend serving 10 integrated applications with strict tenant isolation and secure data access.',
        'Engineered 300+ RESTful API endpoints for clinical management, secured using JWT authentication, refresh token rotation, and role-based access control.',
        'Designed and optimized a relational database with 70+ tables and strategic indexing to ensure high-performance healthcare record handling.',
        'Integrated third-party subscription management for automated global billing and tax compliance.',
        'Implemented geolocation and route mapping integration for distance-based clinic search, enabling users to locate nearby providers and optimize appointment planning.',
        'Developed asynchronous background services and webhook integrations to automate clinical workflows, reducing manual administrative effort by 40%.',
        'Strengthened system security by applying OWASP and HIPAA best practices, including data encryption and injection attack prevention.',
      ],
    },
    {
      category: 'fullstack',
      role: 'Full-Stack Developer',
      subtitle: 'SaaS Administrative Ecosystem',
      icon: <Layout size={22} className="text-white" />,
      techStack: [],
      achievements: [
        'Fully developed the administrative dashboard to manage complex medical users, appointments, and platform-wide configurations end-to-end.',
        'Implemented server-side authentication middleware and protected route handling to ensure secure data access across all administrative surfaces.',
        'Architected global application state management ensuring consistent data synchronization across the entire dashboard.',
        'Developed a failure monitoring system to track failed API requests, log error responses, and provide real-time visibility into system issues for faster debugging and reliability improvements.',
        'Designed responsive, accessible UI components that streamlined complex administrative workflows.',
      ],
    },
    {
      category: 'fullstack',
      role: 'Full-Stack Developer',
      subtitle: 'Real-time Affiliate & Partner Management System',
      icon: <Layers size={22} className="text-white" />,
      techStack: [],
      achievements: [
        'Developed a complete partner ecosystem for healthcare provider onboarding and real-time revenue tracking.',
        'Engineered a real-time revenue tracking engine utilizing webhooks and persistent connections for zero-latency financial updates on partner dashboards.',
        'Implemented high-performance state management to handle complex, real-time data streams and secure partner portals.',
      ],
    },
    {
      category: 'fullstack',
      role: 'Full-Stack Developer',
      subtitle: 'Doctor Webpage & Booking System',
      project: 'Full-Stack System Design',
      icon: <Globe size={22} className="text-white" />,
      techStack: ['Multi-Tenant', 'SEO', 'Event-Driven', 'Full-Text Search'],
      achievements: [
        'Designed auto-generated public webpages per doctor upon registration, with unique SEO-friendly URLs requiring zero manual setup.',
        'Architected multi-tenant architecture supporting thousands of isolated doctor pages under a unified domain with strict per-tenant data boundaries.',
        'Built real-time availability sync between doctor mobile app and public booking page using event-driven updates to prevent stale slot display.',
        'Implemented concurrency-safe booking engine with database-level locking to eliminate double-booking under high-traffic conditions.',
        'Designed modular CMS for articles, media, and health content with publish/unpublish workflows and extensible schema.',
        'Engineered indexed doctor discovery with full-text search and filtering by name, specialization, and location for sub-second query resolution.',
        'Ensured scalability and fault tolerance via stateless APIs and horizontal scaling readiness across all services.',
      ],
    },
    {
      category: 'fullstack',
      role: 'Full-Stack Developer',
      subtitle: 'eMed Blogging Platform',
      icon: <Search size={22} className="text-white" />,
      techStack: ['Next.js', 'Zustand', 'SSR', 'ISR'],
      achievements: [
        'Developed a high-performance medical blogging platform leveraging server-side rendering, static generation, and dynamic routing for optimal scalability and SEO.',
        'Implemented lightweight and scalable global state handling, improving state efficiency and reducing unnecessary re-renders.',
        'Applied advanced SEO strategies including meta tags, structured data, sitemap generation, and Open Graph integration to enhance search engine visibility.',
        'Designed an efficient API caching layer using incremental static regeneration strategies to reduce server load and improve response times.',
        'Optimized page load speed with lazy loading, code splitting, and image optimization, significantly improving Core Web Vitals.',
        'Built dynamic blog creation, editing, and categorization features with a clean and responsive UI for seamless content publishing.',
        'Ensured secure API consumption, input validation, and protected routes using modern frontend security practices.',
      ],
    },
    {
      category: 'support',
      role: 'Support Project',
      subtitle: 'AI-Powered Smart Content Platform',
      icon: <Zap size={22} className="text-white" />,
      techStack: ['FastAPI', 'Next.js', 'Celery', 'Redis'],
      achievements: [
        'Developed high-performance REST APIs to bridge communication between LLM-based AI models and the frontend.',
        'Engineered an asynchronous task queue system to handle long-running AI operations without blocking user requests.',
        'Built secure registration and authentication flows and developed an administrative dashboard for system configurations.',
      ],
    },
    {
      category: 'support',
      role: 'Support Project',
      subtitle: 'Laravel-based React CMS & Performance Optimization',
      icon: <Code size={22} className="text-white" />,
      techStack: ['Laravel', 'React', 'OAuth'],
      achievements: [
        'Restructured the backend to support a modern CMS, implementing secure user registration and OAuth-based authentication.',
        'Enhanced backend workflows and email notification services to ensure seamless communication with the CMS frontend.',
      ],
    },
    {
      category: 'support',
      role: 'Support Project',
      subtitle: 'Web Optimization & Core Web Vitals',
      icon: <Activity size={22} className="text-white" />,
      techStack: ['Laravel', 'LCP', 'Core Web Vitals'],
      achievements: [
        'Optimized application performance for high-traffic sites, significantly improving Largest Contentful Paint and Core Web Vitals scores.',
        'Implemented automated image optimization pipelines and asset minification to reduce server response times and improve SEO.',
      ],
    },
  ],
};

const categoryOrder = ['devops', 'backend', 'fullstack', 'support'];

const ExperienceDetail = () => {
  const groupedSections = experience.sections.reduce((acc, section) => {
    if (!acc[section.category]) acc[section.category] = [];
    acc[section.category].push(section);
    return acc;
  }, {});

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Work Experience</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative mb-16 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkCard shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5 dark:from-primary/10 dark:to-violet-500/10" />
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 flex items-center justify-center shadow-sm">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      <Briefcase size={14} />
                      Work Experience
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                      {experience.company}
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-primary mb-2">
                      {experience.role}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">{experience.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 w-max">
                  <Calendar size={20} className="text-primary" />
                  <span className="font-bold text-slate-700 dark:text-slate-200">{experience.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-3xl mb-10">
                {experience.longDescription}
              </p>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                  Career Progression
                </h4>
                <div className="relative">
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-violet-400 to-emerald-400 rounded-full" />
                  <div className="space-y-6">
                    {experience.timeline.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-5 pl-0"
                      >
                        <div
                          className={`relative z-10 w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                            step.status === 'current'
                              ? 'bg-primary border-primary shadow-[0_0_0_4px_rgba(15,44,189,0.2)]'
                              : 'bg-white dark:bg-darkCard border-slate-300 dark:border-slate-600'
                          }`}
                        />
                        <div className="flex-1 pb-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="font-bold text-slate-900 dark:text-white text-lg">{step.title}</p>
                            {step.status === 'current' && (
                              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                            {step.period}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-white dark:bg-darkCard text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 hidden md:block" />

            <div className="space-y-16">
              {categoryOrder.map((category) => {
                const sections = groupedSections[category];
                if (!sections) return null;
                const style = CATEGORY_STYLES[category];

                return (
                  <div key={category} className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className={`relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br ${style.accent} flex items-center justify-center shadow-lg text-white`}
                      >
                        {style.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{style.label}</h3>
                        <div className={`h-0.5 w-16 mt-1 rounded-full bg-gradient-to-r ${style.accent}`} />
                      </div>
                    </div>

                    <div className="space-y-6 md:ml-14">
                      {sections.map((section, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="relative bg-white dark:bg-darkCard rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden"
                        >
                          <div
                            className={`hidden md:block absolute -left-[38px] top-8 w-3 h-3 rounded-full ${style.dot} ring-4 ring-slate-50 dark:ring-darkBg`}
                          />

                          <div className="p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                              <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${style.accent} flex items-center justify-center shadow-md flex-shrink-0`}
                              >
                                {section.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border ${style.badge}`}
                                  >
                                    {section.role}
                                  </span>
                                  {section.period && (
                                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                                      {section.period}
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                  {section.subtitle}
                                </h4>
                                {section.project?.trim() && (
                                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                                    {section.project}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                              {section.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <ul className="space-y-3">
                              {section.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-3">
                                  <CheckCircle2
                                    size={18}
                                    className="text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5"
                                  />
                                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {achievement}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceDetail;
