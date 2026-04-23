import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Available for new Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building <span className="text-primary italic">scalable</span> digital experiences.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            I’m Dilan Madusanka, a Software Engineer with hands-on experience in full-stack development, specializing in ASP.NET Core, Laravel, FastAPI, and modern JavaScript frameworks like Next.js. I have worked on multi-tenant SaaS platforms, real-time systems, and AI-integrated applications, focusing on performance, scalability, and clean architecture. I’m passionate about solving complex backend challenges and building efficient, production-ready systems.          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1"
            >
              Let's Talk <ArrowRight size={20} />
            </a>
            {/* <a 
              href="/TMDMadusanka CV.pdf" 
              download="TMDMadusanka CV.pdf"
              className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Resume <Download size={20} />
            </a> */}
          </div>

          <div className="flex gap-6 mt-12 text-slate-500">
            <a href="https://www.linkedin.com/in/dilan-madusanka-694714219/" className="hover:text-primary transition-colors"><Github /></a>
            <a href="https://github.com/DilanMadusaanka2000" className="hover:text-primary transition-colors"><Linkedin /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-darkCard">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Developer workspace" 
              className="w-full h-auto"
            />
          </div>
          {/* Experience Float Card */}
          {/* <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm font-semibold opacity-80">Years Experience</div>
          </div> */}
          {/* Projects Float Card */}
          {/* <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
            <div className="text-3xl font-bold text-primary">40+</div>
            <div className="text-sm font-semibold opacity-80">Projects Completed</div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
