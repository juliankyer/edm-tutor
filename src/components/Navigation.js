import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/"
        className="title"
        >
        <h1 className="splash-title">EDMTut.r</h1>
        <h3 className="splash-subheading">-what moves you?</h3>
      </Link>
      
      <div className="nav-links">
        <Link to="/learn"
          className="learn-link nav tick"
          activeClassName="active"
          >
          Learn
        </Link>
        
        <Link to="/favorites"
          className="favs-link nav"
          activeClassName="active"
          >
          Favorites
        </Link>
        
        <Link to="/about"
          className="about-link nav"
          activeClassName="active"
          >
          About
        </Link>
        
        <Link to="/contact"
          className="contact-link nav"
          activeClassName="active"
          >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navigation;