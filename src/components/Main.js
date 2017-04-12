import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <iframe className="splash-video" frameBorder="0" 
                height="100%" 
                width="100%" 
                src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
        <div className="title">
          <h1 className="splash-title">EDMTut.r</h1>
          <h3 className="splash-subheading">what moves you?</h3>
        </div>
      </div>
    );
  }
}

export default Main;