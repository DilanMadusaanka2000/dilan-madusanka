import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Layers } from 'lucide-react';

const AllProjects = () => {
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
    },
    {
    title: "FixFinder — Flutter Mobile Application",
    category: "Mobile Application",
    image: "img/project-4.png",
    description: "A sophisticated Android mobile application developed with Flutter and Firebase to connect users with local service providers. Features secure user and service provider authentication, service selection and scheduling, ratings and reviews, onboarding and splash screens, and real-time data management using Firebase Cloud Firestore. Focused on user experience, security, and scalability.",
    tags: ["Flutter", "Firebase", "Firebase Authentication", "Cloud Firestore", "Android", "Dart"],
    live: "#",
    github: "https://github.com/DilanMadusaanka2000/FixFinder-Flutter-Mobile-App"
    },
    {
    title: "RedFlow — Blood Donation System",
    category: "Web Application",
    image: "img/project-5.png",
    description: "A robust blood donation platform built with Laravel, HTML, CSS, and MySQL, designed to streamline the donation process for donors, hospitals, and blood banks. Features secure user registration and login, donor appointment booking, real-time blood inventory management, and donor search based on blood type, availability, and location, ensuring efficient and safe blood donation management.",
    tags: ["Laravel", "HTML", "CSS", "MySQL", "Web Development", "Blood Donation Management"],
    live: "#",
    github: "https://github.com/DilanMadusaanka2000/RedFlow-Blood-Donation-System"
    },
    {
    title: "Job Application Processing Pipeline",
    category: "Automation / Web Application",
    image: "img/project-6.png",
    description: "An automated job application pipeline built with React.js, Node.js, and Google Cloud. Handles CV uploads, extracts key applicant information, stores data in MongoDB and Google Sheets, triggers webhooks, and sends follow-up emails. Designed to streamline CV handling, improve HR efficiency, and provide timely applicant notifications.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Cloud Storage", "Google Sheets API", "PDF Parsing", "Nodemailer", "Bootstrap", "Webhook Automation"],
    live: "#",
    github: "https://github.com/DilanMadusaanka2000/Job-application-processing-pipeline-that-automates-CV-handling-and-data-extraction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <h1 className="text-5xl font-bold mt-4 mb-6">All Projects</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore my complete collection of projects showcasing expertise in full-stack development, AI/ML, and modern web technologies.
            </p>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all"
              >
                <div className="relative h-72 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-primary rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold mb-3">
                    <Layers size={14} />
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
