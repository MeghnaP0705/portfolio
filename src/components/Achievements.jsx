import React from 'react';
import { FaTrophy, FaFileAlt, FaLightbulb } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "AIR 9 – CBSE Class 10",
      description: "All India Rank 9 in CBSE Class 10 examinations with 98.20% marks"
    },
    {
      icon: <FaTrophy />,
      title: "AIR 18 – CBSE Class 12",
      description: "All India Rank 18 in CBSE Class 12 examinations with 95.00% marks"
    },
    {
      icon: <FaFileAlt />,
      title: "Research Publication",
      description: "Co-authored research article on 'Machine Learning based Sleep Pattern Analysis using Linear Regression Algorithm' in International Conference on ETMCIS 2024"
    },
    {
      icon: <FaLightbulb />,
      title: "Bengaluru Mobility Challenge",
      description: "August 2024 - Co-organized by Bengaluru Traffic Police and IISc. Developed traffic prediction solutions using camera feeds"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
