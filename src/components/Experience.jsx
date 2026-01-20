import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Botree Software International Pvt Ltd",
      duration: "Apr 2025 – May 2025",
      responsibilities: [
        "Gained FMCG & supply chain domain knowledge with experience in customer segmentation",
        "Performed Data modelling using Star schema, implemented EDA, applied K-Means clustering",
        "Built a sales insights dashboard using Power BI"
      ]
    },
    {
      title: "AI Intern",
      company: "AICTE",
      duration: "Feb 2025",
      responsibilities: [
        "Built an AI-based resume screening and ranking system using Google Gemini embeddings and cosine similarity to match resumes with job descriptions.",
        "Developed a Streamlit web app to upload PDF resumes, extract text, and display ranked candidates automatically."
      ]
    },
    {
      title: "Data Science Intern",
      company: "BizViz Technologies Pvt Ltd",
      duration: "Apr 2024 – May 2024",
      responsibilities: [
        "Analysed recruitment data using BDB and MySQL to derive insights and business narratives",
        "Built MySQL workflows and dashboards in Power BI to visualize key hiring trends"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
