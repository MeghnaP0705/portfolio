import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and AI!
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email</h4>
              <a href="mailto:pmeghna0705@gmail.com">pmeghna0705@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h4>Phone</h4>
              <a href="tel:+916238851790">+91 6238851790</a>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Bengaluru</p>
            </div>
          </div>
          <div className="contact-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
