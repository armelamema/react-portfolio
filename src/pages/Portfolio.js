import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: '/images/Screenshot 2024-12-12 215338.jpg',
      title: 'Edis Studio',
      description: 'A modern web design project showcasing creative work of a photographer.',
      link: 'https://www.edisstudio.com/',
      imageClass: 'edis-image'
    },
    {
      id: 2,
      image: '/images/Screenshot 2024-12-12 214820.jpg',
      title: 'Julia Wiggins',
      description: 'Website of a Toronto-based writer.',
      link: 'https://juliawiggins.com/',
      imageClass: 'julia-image'
    },
    {
      id: 3,
      image: '/images/YOLO (1).jpg',
      title: 'Graphic Design Portfolio',
      description: 'My creative portfolio showcasing graphic design work.',
      link: 'https://armelamema25.wixsite.com/my-site-3',
      imageClass: 'portfolio-image'
    }
  ];

  return (
    <section className="portfolio-section page-transition">
      <h2>Featured Projects</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-image-container">
              <img 
                src={item.image} 
                alt={item.title}
                className={`portfolio-image ${item.imageClass}`}
              />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;