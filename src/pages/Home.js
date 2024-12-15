import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="intro page-transition">
      <div className="intro-content">
        <div className="text-content">
          <h1>Hello, I'm</h1>
          <h2>Armela Mema <span className="highlight">Graphic Designer & Developer</span></h2>
          <p>Transforming ideas into visual experiences</p>
          <div className="cta-buttons">
            <button 
              className="portfolio-btn"
              onClick={() => navigate('/portfolio')}
            >
              View Portfolio
            </button>
            <button 
              className="hire-btn"
              onClick={() => navigate('/contact')}
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className="image-content">
          <img 
            src="/images/Armela.m.png" 
            alt="Armela Mema" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;