import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Automated Reporting & Dashboard System",
      description: "Designed a SQL-driven reporting system with fact and dimension tables for scalable analytics. Built optimized KPI queries and automated Tableau dashboards with scheduled refreshes to improve reporting efficiency and performance.",
      tech: ["SQL", "Data Warehousing", "Fact & Dimension Tables", "Tableau", "KPI Reporting"],
    },
    {
      title: "API Integrated Healthcare Analytics Dashboard",
      description: "Integrated healthcare and public health data from REST APIs using Python, cleaned and standardized data into SQL tables, and built automated Tableau dashboards to visualize disease trends and support data-driven insights.",
      tech: ["Python", "REST APIs", "SQL", "Data Cleaning", "Tableau"],
    },
    {
      title: "REST API for User Management",
      description: "Developed a production-ready REST API using Python and FastAPI with clean architecture, automated validation through unit testing, and Dockerized the service for scalable and reproducible deployments.",
      tech: ["Python", "FastAPI", "REST API", "Unit Testing", "Docker"],
    },
    {
      title: "Disease Prediction Portal",
      description: "End-to-end healthcare data pipeline using Python and Supabase with Random Forest Classifier for symptom-based diagnosis. Integrated Power BI/Streamlit dashboards for real-time insights.",
      tech: ["Python", "Supabase", "PostgreSQL", "Random Forest", "Power BI", "Streamlit"],
    },
    {
      title: "Theft Vehicle Detection",
      description: "AI-powered surveillance system using Python, YOLOv7, and Docker for stolen vehicle detection with class, color, brand, and license plate recognition. Integrated Google Maps API and MySQL alert system.",
      tech: ["Python", "YOLOv7", "Docker", "MySQL", "Google Maps API"],
    },
    {
      title: "Image Caption Generator",
      description: "Built using CNN (ResNet50) for image feature extraction and LSTM for caption generation. Achieved BLEU score of 0.7892 and F1-score of 0.80 with Gradio interface for real-time generation.",
      tech: ["CNN", "ResNet50", "LSTM", "Gradio", "TensorFlow"],
    },
    {
      title: "Know Your Customer (KYC)",
      description: "KYC data extraction tool using Tesseract OCR and GenAI models with ~95% accuracy. Secure Supabase backend for document management with Streamlit frontend.",
      tech: ["Tesseract OCR", "GenAI", "Supabase", "Streamlit", "Python"],
    },
    {
      title: "Exam Preparation Planner",
      description: "GenAI portal generating personalized study plans with Google Gemini API. Features smart calendar, AI-powered revision notes, flashcards, chatbot, and PDF summarization.",
      tech: ["Streamlit", "Google Gemini API", "Supabase", "Python"],
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Academic Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
