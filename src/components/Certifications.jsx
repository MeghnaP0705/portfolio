import React from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    { name: "Data Analytics Virtual Internship", issuer: "Deloitte" },
    { name: "PCAP Essentials in Python", issuer: "Cisco Networking Academy" },
    { name: "Introduction to Data Science", issuer: "Cisco Networking Academy" },
    { name: "Data Mining", issuer: "NPTEL Swayam" },
    { name: "SQL and Relational Databases", issuer: "Cognitive Class IBM Certification" },
    { name: "Statistical Foundation for Artificial Intelligence", issuer: "L&T EduTech" },
    { name: "Introduction to MongoDB", issuer: "MongoDB" }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <FaCertificate className="cert-icon" />
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
