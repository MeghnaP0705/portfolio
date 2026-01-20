import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a final-year BTech CSE (Data Science) student at Christ University, Bengaluru, 
            with a passion for leveraging data to solve real-world problems. With strong expertise 
            in Python, SQL, and Business Intelligence tools like Power BI, I've built end-to-end 
            data pipelines and AI-powered solutions across healthcare, surveillance, and education domains.
          </p>
          <p>
            My experience spans data engineering, machine learning, and data visualization. I've 
            completed internships at Botree Software International and BizViz Technologies, where I 
            worked on customer segmentation, data modeling, and building interactive dashboards. 
            I'm particularly interested in applying AI/ML techniques to create intelligent, 
            data-driven applications.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <h3>87.83%</h3>
              <p>BTech CGPA</p>
            </div>
            <div className="highlight-item">
              <h3>8+</h3>
              <p>Major Projects</p>
            </div>
            <div className="highlight-item">
              <h3>AIR 9</h3>
              <p>CBSE Class 10</p>
            </div>
          </div>
        </div>
        <div className="about-education">
          <h3>Education</h3>
          <div className="education-item">
            <h4>BTech in CSE (Data Science)</h4>
            <p className="institution">Christ University, Bengaluru</p>
            <p className="date">Present | 87.83%</p>
          </div>
          <div className="education-item">
            <h4>Class 12 (CBSE)</h4>
            <p className="institution">Jyothis Central School, Trivandrum</p>
            <p className="date">Jun 2022 | 95.00%</p>
          </div>
          <div className="education-item">
            <h4>Class 10 (CBSE)</h4>
            <p className="institution">Jyothis Central School, Trivandrum</p>
            <p className="date">May 2020 | 98.20%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
