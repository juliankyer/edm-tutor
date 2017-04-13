import React, { Component } from 'react';
import Video from './Video';

import houseVideos from '../data/houseVideos'; 

var videos = houseVideos;

class Genre extends Component {
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
    const { service, video, title, artist } = videos[this.state.videoIndex];
    return (
      <div className="genreWrapper">
        <h1>House</h1>
        <Video service={service} video={video} width={700} height={350} />
        <p>{title} by {artist}</p>
        <div className="button-wrapper">
          <button onClick={ this.goToVideo.bind(this, this.state.videoIndex - 1) }>
            Previous
          </button>
          <button onClick={ this.goToVideo.bind(this, this.state.videoIndex + 1) }>
            Next
          </button>
          <button className="love-button">Love</button>
        </div>
      </div>
    );
  }
}


export default Genre;