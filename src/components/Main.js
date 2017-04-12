import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { BrowserRouter, Match } from 'react-router';
import Video from './Video';

var videos = [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=foE1mO2yM04&list=RDQM5ky4ylTWJhQ&index=4'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=h--P8HzYZ74'
  },
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=_zPlr-o-YEQ'
  }
]

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0
    };
  }
  
  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videoIndex.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }
  render() {
    const { service, video } = videos[this.state.videoIndex];
    return (
      <div>
      <h1>EDMTut.r</h1>
      <h3>what moves you?</h3>
      <Video service={service} video={video} width={500} height={270} />
      <p>
        <span>{service}: </span>
        <span>{video}: </span>
      </p>
      <button onClick={ this.goToVideo.bind(this, this.state.videoIndex - 1) }>
        Previous
      </button>
      <button onClick={ this.goToVideo.bind(this, this.state.videoIndex + 1) }>
        Next
      </button>
      </div>
    );
  }
}

export default Main;