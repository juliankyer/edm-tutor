import React, { Component } from 'react';
import Video from './Video';
import genres from '../data/genres';

class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0,
      videos: []
    };
  }
  
  
  getVideos () {
    let target = this.props.params.genre;
    let videos = genres.filter((genre) => {
      return genre.link === target;
    });
    this.setState({videos})
  }
  
  componentDidMount() {
    this.props.genreClicked(this.props.params.genre);
  }
  
  componentWillMount() {
    this.getVideos();
  }
  
  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videoIndex.length - 1;
    } else if (videoIndex >= this.state.videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }
  
  render() {
    const { service, video, title, artist } = this.state.videos[0].videos[0];
    const { description } = this.state.videos;
    return (
      <div className="genreWrapper">
        <h1>{this.state.videos[0].genre}</h1>
        <Video service={service} video={video} width={700} height={350} />
        <div className="genre-description">
          <h4>"{title}" by {artist}</h4>
          <p>{description}</p>
        </div>
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

// const { service, video, title, artist } = this.state.videos[this.state.videoIndex];
// const { description, genre, id, link, videos } = this.state.videos[0];
// const { } = this.state.videos[0].videos;


// <div className="genreWrapper">
//   <h1>{this.state.videos[0].genre}</h1>
//   <Video service={service} video={video} width={700} height={350} />
//   <div className="genre-description">
//     <h4>"{title}" by {artist}</h4>
//     <p>{description}</p>
//   </div>
//   <div className="button-wrapper">
//     <button onClick={ this.goToVideo.bind(this, this.state.videoIndex - 1) }>
//       Previous
//     </button>
//     <button onClick={ this.goToVideo.bind(this, this.state.videoIndex + 1) }>
//       Next
//     </button>
//     <button className="love-button">Love</button>
//   </div>
// </div>















// <div className="genreWrapper">
//   <h1>{genres[0].genre}</h1>
//   <Video service={service} video={video} width={700} height={350} />
//   <div className="genre-description">
//     <h4>"{title}" by {artist}</h4>
//     <p>{genres[0].description}</p>
//   </div>
//   <div className="button-wrapper">
//     <button onClick={ this.goToVideo.bind(this, this.state.videoIndex - 1) }>
//       Previous
//     </button>
//     <button onClick={ this.goToVideo.bind(this, this.state.videoIndex + 1) }>
//       Next
//     </button>
//     <button className="love-button">Love</button>
//   </div>
// </div>