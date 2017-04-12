import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <div className="nav-bar">
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
    </div>
  );
}

export default Navigation;