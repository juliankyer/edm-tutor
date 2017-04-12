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
      <div>
      <h1>House</h1>
      <Video service={service} video={video} width={500} height={270} />
      <p>{title} by {artist}</p>
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


export default Genre;