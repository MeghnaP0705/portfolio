import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Meghna P. Built with React.</p>
        <p>Designed & Developed by Meghna P</p>
      </div>
    </footer>
  );
};

export default Footer;
