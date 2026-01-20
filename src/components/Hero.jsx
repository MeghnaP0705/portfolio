import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Meghna P</span>
        </h1>
        <p className="hero-subtitle">Data Science & AI/ML Engineer</p>
        <p className="hero-description">
          BTech CSE (Data Science) student specializing in Python, SQL, Data Analytics, 
          and Machine Learning with hands-on experience in building intelligent data-driven solutions.
        </p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>

        <div className="social-links">
          <a href="mailto:meghna@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="tel:+916238851790" aria-label="Phone"><FaPhone /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
