import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { BrowserRouter, Match } from 'react-router';
// import Video from './Video';
// import Splash from '../data/Splash';

// var videos = Splash;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <iframe className="splash-video" frameborder="0" 
                height="100%" 
                width="100%" 
                src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
        <h1>EDMTut.r</h1>
        <h3>what moves you?</h3>
      </div>
    );
  }
}

export default Main;