import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 72;
const CONNECT_DISTANCE = 140;
const REPULSE_RADIUS = 180;
const REPULSE_STRENGTH = 2.8;

const AntigravityField = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const particlesRef = useRef([]);
  const frameRef = useRef(null);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initParticles = (width, height) => {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        vx: 0,
        vy: 0,
        size: Math.random() * 2.2 + 0.8,
        phase: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.4 + 0.15,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { width, height };

      if (particlesRef.current.length === 0) {
        initParticles(width, height);
      }
    };

    const isDark = () => document.documentElement.classList.contains('dark');

    const draw = () => {
      const { width, height } = sizeRef.current;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      const particleColor = dark ? '148, 163, 184' : '100, 116, 139';
      const lineColor = dark ? '59, 130, 246' : '15, 44, 189';
      const glowColor = dark ? '96, 165, 250' : '61, 86, 230';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.baseX += Math.cos(p.phase) * p.drift * 0.08;
          p.baseY += Math.sin(p.phase) * p.drift * 0.08;
          p.phase += 0.008;

          if (p.baseX < 0) p.baseX = width;
          if (p.baseX > width) p.baseX = 0;
          if (p.baseY < 0) p.baseY = height;
          if (p.baseY > height) p.baseY = 0;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < REPULSE_RADIUS && dist > 0) {
              const force = ((REPULSE_RADIUS - dist) / REPULSE_RADIUS) ** 2;
              p.vx += (dx / dist) * force * REPULSE_STRENGTH;
              p.vy += (dy / dist) * force * REPULSE_STRENGTH;
            }
          }

          p.vx += (p.baseX - p.x) * 0.018;
          p.vy += (p.baseY - p.y) * 0.018;
          p.vx *= 0.9;
          p.vy *= 0.9;
          p.x += p.vx;
          p.y += p.vy;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * (dark ? 0.18 : 0.12);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.active && !reducedMotion) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, REPULSE_RADIUS);
        gradient.addColorStop(0, `rgba(${glowColor}, ${dark ? 0.14 : 0.1})`);
        gradient.addColorStop(0.5, `rgba(${glowColor}, ${dark ? 0.05 : 0.03})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, REPULSE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${particleColor}, ${dark ? 0.55 : 0.35})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    const trackTarget = containerRef?.current || canvas;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    trackTarget.addEventListener('mousemove', onMouseMove);
    trackTarget.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      trackTarget.removeEventListener('mousemove', onMouseMove);
      trackTarget.removeEventListener('mouseleave', onMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AntigravityField;
