import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ChevronDown } from 'lucide-react';
import AntigravityField from './AntigravityField';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dilan-madusanka-694714219/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DilanMadusaanka2000',
    icon: Github,
  },
];

const Hero = () => {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const glowX = useTransform(smoothX, [-1, 1], ['30%', '70%']);
  const glowY = useTransform(smoothY, [-1, 1], ['25%', '75%']);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(700px circle at ${x} ${y}, rgba(61, 86, 230, 0.18), transparent 70%)`
  );
  const nameY = useTransform(smoothY, [-1, 1], [-6, 6]);

  const handleMouseMove = (e) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(((e.clientX - bounds.left) / bounds.width - 0.5) * 2);
    mouseY.set(((e.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#060d1f]"
    >
      <AntigravityField containerRef={heroRef} />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: glowBackground }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1d82]/40 via-transparent to-[#060d1f] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl w-full flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Opportunities
          </motion.span>

          <motion.h1
            style={{ y: nameY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-none mb-5"
          >
            DILAN{' '}
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              MADUSANKA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300/90 uppercase tracking-[0.35em] mb-10"
          >
            Software Engineer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-14"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold tracking-wide">{label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-10"
          >
            Full-stack engineer building scalable SaaS platforms, real-time systems, and
            production-grade APIs — focused on performance, security, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {['ASP.NET Core', 'Next.js', 'Laravel', 'FastAPI', 'PostgreSQL', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-md border border-white/8 bg-white/5 text-slate-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-bold shadow-lg shadow-primary/30 transition-colors"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-300 transition-colors"
          aria-label="Scroll to experience"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
