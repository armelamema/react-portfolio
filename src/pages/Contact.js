import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section page-transition">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          
          <div className="contact-details">
            <a href="mailto:armelamema@gmail.com" className="contact-link">
              📧 armelamema.25@gmail.com
            </a>
            <p className="contact-link">
              📍 Toronto, Canada
            </p>
            
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/armela-mema-16012b217/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.behance.net/armelamema" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link behance"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        <div className="contact-image">
          <img 
            src="/images/222.png" 
            alt="Armela Mema" 
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;