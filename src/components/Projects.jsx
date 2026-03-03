import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "VoltRide —AI Powered Vehicle Hire Management System",
      category: "Web Application",
      image: "img/project-1.png",
      description: "VoltRide is a full-stack vehicle rental management system with intelligent demand forecasting. It features a Laravel REST API with JWT and Google OAuth authentication, a Next.js admin dashboard for managing bookings and analytics, and a FastAPI microservice using Prophet to generate 7-day rental demand predictions. The system integrates AWS S3 for secure storage and is containerized with Docker for scalable deployment.",
      tags: ["Laravel", "FastAPI", "Next.js", "MySQL", "S3", "Google Auth"],
      live: "#",
      github: "https://github.com/DilanMadusaanka2000/VoltRide-Vehicle-Hire-System"
    },
    {
      title: "Hybrid ML-Based Diabetes Prediction System",
      category: "AI / Machine Learning Application",
      image: "img/project-2.png",
      description: "A hybrid machine learning system for predicting diabetes mellitus using clinical and medical data. Built with FastAPI for real-time predictions and secure API communication, integrating Scikit-learn and TensorFlow models for improved accuracy. Includes Redis for OTP and session management, and Docker for scalable, consistent deployment.",
      tags: ["Python", "FastAPI", "Next.js", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Redis", "Docker"],
      live: "#",
      github: "https://github.com/DilanMadusaanka2000/diabetes_prediction_hybrid_model"
    },
    {
      title: "Hotel Booking System (MERN Stack)",
      category: "Full-Stack Web Application",
      image: "img/project-3.png",
      description: "A complete hotel reservation system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features secure JWT-based authentication with role-based authorization, full CRUD operations for hotels and rooms, Cloudinary image uploads, advanced search & filtering, reservation management, and an admin dashboard for managing users and bookings.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary", "Context API", "bcrypt", "Postman", "dotenv"],
      live: "#",
      github: "https://github.com/DilanMadusaanka2000/BookNest-Hotels-Booking?tab=readme-ov-file"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-darkCard/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</span>
          <h2 className="text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <a href={project.github} className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                    <Github size={24} />
                  </a>
                  {/* <a href={project.live} className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </a> */}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary text-xs font-bold mb-3">
                  <Layers size={14} />
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-slate-700 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/projects')}
            className="px-10 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
