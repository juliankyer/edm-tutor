import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/"
            className="home-link nav"
            activeClassName="active"
      >
            Home
      </Link>
      <Link to="/learn"
            className="learn-link nav"
            activeClassName="active"
      >
            Learn
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
  );
}

export default Navigation;