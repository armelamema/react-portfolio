import React from 'react';
import './About.css';

function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Grey Modern Professional CV Resume.pdf';
    link.download = 'Grey Modern Professional CV Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section page-transition">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src="/images/Untitled-1.jpg"
            alt="About me"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p>I am a graphic designer and developer with a passion for creating beautiful and functional designs.</p>
          <p>With expertise in visual communication and digital design, I help brands tell their stories through compelling visuals.</p>
          <div className="resume-button-container">
            <button 
              className="resume-btn" 
              onClick={handleDownloadResume}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;