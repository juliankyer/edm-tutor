import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <iframe className="splash-video" 
                frameBorder="0" 
                height="100%" 
                width="100%" 
                src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
      </div>
    );
  }
}

export default Home;