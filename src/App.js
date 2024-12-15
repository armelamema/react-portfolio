import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img 
              src="/images/xxxx-01.png" 
              alt="Armela Mema Logo" 
              className="logo-image"
            />
            <h1>Armela Mema</h1>
          </div>
          <nav className="nav">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2024 Armela Mema. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;