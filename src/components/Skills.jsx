import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python"]
    },
    {
      category: "Data & BI",
      skills: ["SQL Querying", "Reporting Structures", "KPI Design", "Dashboarding"]
    },
    {
      category: "Visualization",
      skills: ["Tableau", "Power BI"]
    },
    {
      category: "Core Computer Science",
      skills: ["SDLC", "Data Structures & Algorithms", "OOPs"]
    },
    {
      category: "Backend & Integration",
      skills: ["Flask", "REST APIs"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL (Supabase)"]
    },
    {
      category: "ETL & Automation",
      skills: ["Pandas", "Data Cleaning", "Data Transformation"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "Linux (Basic)", "CI/CD Concepts"]
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Leadership", "Time Management", "Teamwork", "Adaptability"]
    }
  ];



  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
