import React from 'react';
import './AboutDaniil.css';
import aboutMeImage from '../assets/Daniil.jpg';

const AboutMe = () => {
  return (
    <div className="Daniil">
      <h1>Daniil Konishchev</h1>
      
      <p>
        With a diverse background in public relations, communications, and leadership, I am passionate about making an impact by connecting people, ideas, and organizations. My journey spans from coalition building in nonprofit spaces to managing complex logistics in the railway industry, always with a focus on fostering collaboration and ensuring excellence. Whether navigating the intricacies of community outreach or crafting speeches for industry leaders, I bring a proactive, detail-oriented approach to every project. Fluent in both English and Russian, I am dedicated to continuous learning and adaptability in dynamic environments.
      </p>

      <div className="image-container">
        <img src={aboutMeImage} alt="Daniil" className="about-me-image" />
      </div>

      <a href="/daniilresume.pdf" target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a>
    </div>
  );
};

export default AboutMe;
