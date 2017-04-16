import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="home">
      <Link to="/learn"
        className="learn-link nav"
        activeClassName="active"
        >
        <div className="enter-logo">
          <h1>EDMTut.r</h1>
          <h3>-what moves you?</h3>
        </div>
        <iframe className="splash-video" 
          frameBorder="0" 
          height="100%" 
          width="100%" 
          src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
      </Link>
    </div>
  );
}

export default Home;