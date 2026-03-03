import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Award, CheckCircle2, Briefcase, Zap, Layout, Activity, Code, Search, Layers } from 'lucide-react';

const ExperienceDetail = () => {
  const { experienceId } = useParams();
  const navigate = useNavigate();

  const experiences = [
    {
      id: 0,
      company: "DigitalBee Labs",
      role: "Intern Software Engineer",
      period: "April 2025 – February 2026",
      description: "Contributed to multiple high-impact projects as a Full-Stack and Frontend Developer, specializing in ASP.NET Core, Next.js, and Vue.js.",
      longDescription: "During my internship at DigitalBee Labs, I was heavily involved in architecting and developing multiple core enterprise applications. My work spanned full-stack development, frontend engineering, and backend API design across a variety of robust modern technologies. Below is a detailed breakdown of the distinct projects and systems I contributed to.",
      skills: ["ASP.NET Core", "Laravel", "FastAPI", "Next.js", "React", "Vue.js", "PostgreSQL", "MySQL", "MongoDB", "JWT", "Redis", "Celery", "SignalR", "Lemon Squeezy", "OWASP", "HIPAA", "RESTful API", "OAuth", "JWT", "Redis", "Celery", "Brevo"],
      projects: [
        {
          title: "Multi-Tenant SaaS Healthcare Platform",
          role: "Full-Stack Developer",
          icon: <Activity size={24} className="text-white" />,
          color: "from-blue-500 to-cyan-400",
          achievements: [
            "Architected and developed a centralized multi-tenant SaaS backend using ASP.NET Core serving 7 integrated applications with strict tenant isolation and secure data access.",
            "Engineered 200+ RESTful API endpoints for clinical management, secured using JWT authentication, refresh token rotation, and RBAC.",
            "Designed and optimized a PostgreSQL database (50+ tables) with strategic indexing to ensure high-performance healthcare record handling.",
            "Integrated Lemon Squeezy for subscription management and automated global billing/tax compliance.",
            "Developed asynchronous background services and webhook integrations to automate clinical workflows, reducing manual administrative effort by 40%.",
            "Strengthened system security by applying OWASP and HIPAA best practices, including data encryption and SQL injection prevention."
          ]
        },
        {
          title: "SaaS Administrative Ecosystem",
          role: "Full-Stack Developer",
          icon: <Layout size={24} className="text-white" />,
          color: "from-purple-500 to-pink-500",
          achievements: [
            "End-to-End Development: Fully developed the administrative dashboard using Next.js to manage complex medical users, appointments, and platform-wide configurations.",
            "Security Middleware: Implemented Next.js Middleware for server-side authentication and protected route handling to ensure secure data access.",
            "State Management: Utilized React Context API to manage global application state, ensuring consistent data synchronization across the entire dashboard.",
            "UI/UX: Designed responsive, accessible UI components that streamlined complex administrative workflows."
          ]
        },
        {
          title: "Real-time Affiliate & Partner Management System",
          role: "Full-Stack Developer",
          icon: <Layers size={24} className="text-white" />,
          color: "from-orange-500 to-amber-400",
          achievements: [
            "Developed a complete partner ecosystem using Vue.js and ASP.NET Core for healthcare provider onboarding and real-time revenue tracking.",
            "Engineered a real-time revenue tracking engine utilizing Webhooks and SignalR for zero-latency financial updates on partner dashboards.",
            "Implemented Pinia for high-performance state management to handle complex, real-time data streams and secure partner portals."
          ]
        },
        {
          title: "AI-Powered Smart Content Platform",
          role: "Support Project",
          icon: <Zap size={24} className="text-white" />,
          color: "from-emerald-500 to-teal-400",
          achievements: [
            "API Engineering: Developed high-performance REST APIs using FastAPI to bridge communication between LLM-based AI models and the frontend.",
            "Background Processing: Engineered an asynchronous task queue system using Celery and Redis to handle long-running AI operations.",
            "User Management: Built secure registration and authentication flows and developed an administrative dashboard using Next.js for system configurations."
          ]
        },
        {
          title: "Laravel-based React CMS & Performance Optimization",
          role: "Support Project",
          icon: <Code size={24} className="text-white" />,
          color: "from-red-500 to-rose-400",
          achievements: [
            "Restructured the Laravel backend to support a modern React-based CMS, implementing secure user registration and OAuth-based authentication.",
            "Enhanced backend workflows and email notification services to ensure seamless communication with the CMS frontend."
          ]
        },
        {
          title: "Web Optimization & Core Web Vitals",
          role: "Support Project",
          icon: <Search size={24} className="text-white" />,
          color: "from-indigo-500 to-blue-500",
          achievements: [
            "Optimized application performance for high-traffic sites, significantly improving Largest Contentful Paint (LCP) and Core Web Vitals scores.",
            "Implemented automated image optimization pipelines and asset minification to reduce server response times and improve SEO."
          ]
        }
      ]
    }
  ];

  const experience = experiences.find(exp => exp.id === parseInt(experienceId || 0));

  if (!experience) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Experience not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-800">{experience.company}</h1>
                <p className="text-2xl text-primary font-bold flex items-center gap-3">
                  <Briefcase size={24} />
                  {experience.role}
                </p>
              </div>
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 w-max">
                <Calendar size={22} className="text-primary" />
                <span className="text-lg font-bold text-slate-700">{experience.period}</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              {experience.longDescription}
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <Award size={24} className="text-primary" />
              Core Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white text-primary font-bold rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Projects Breakdown */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-slate-800">Projects & Contributions</h2>

            {experience.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
              >
                {/* Decorative background gradient element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500`}></div>

                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className={`w-14 h-14 min-w-[3.5rem] rounded-2xl bg-gradient-to-tr ${project.color} flex items-center justify-center shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-primary font-bold uppercase tracking-wider text-sm">{project.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={20} className="text-slate-400" />
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {/* Identify bold prefix keywords if they exist (like "End-to-End Development:") */}
                        {achievement.includes(': ') ? (
                          <>
                            <span className="font-bold text-slate-800">{achievement.split(': ')[0]}:</span>
                            <span> {achievement.split(': ').slice(1).join(': ')}</span>
                          </>
                        ) : achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
