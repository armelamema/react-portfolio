import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/your-logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <span>Home</span>
        <span>About</span>
        <span>Portfolio</span>
      </nav>
      <button className="contact-btn">Contact</button>
    </header>
  );
}

export default Header;