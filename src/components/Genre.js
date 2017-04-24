import React, { Component } from 'react';

import Navigation from './Navigation';
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
  
  goToVideo(videoIndex) {    
    let videosLength = this.state.videos[0].videos.length;
    if (videoIndex < 0) {
      videoIndex = videosLength - 1;
    } else if (videoIndex >= videosLength) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }
  
  componentDidMount() {
    this.props.genreClicked(this.props.params.genre);
  }
  
  componentWillMount() {
    this.getVideos();
  }
  
  checkForFavorites(song) {
    const favCheck = this.props.favorites.filter(favorite => favorite.id === song.id);
    if (favCheck.length) {
      console.log('its in favs');
      return this.props.removeFav(song);
    }
    this.props.loveHandle(song);
  }
  
  render() {
    const description = this.state.videos[0].description;
    const song = this.state.videos[0].videos[this.state.videoIndex];
    console.log(song.id);
    return (
      <div className="genre-wrapper">
        
        <Navigation />
        <h1 className="genre-header">{this.state.videos[0].genre}</h1>
        <Video service={song.service} video={song.video} width={700} height={370} />
        <div className="genre-description">
          <h4>"{song.title}" by {song.artist}</h4>
          <p className="description-p">{description}</p>
        </div>
        
        <div className="button-wrapper">
          <button className="change-vid" onClick={ this.goToVideo.bind(this, this.state.videoIndex - 1) }>
            Previous
          </button>
          <button className="change-vid" onClick={ this.goToVideo.bind(this, this.state.videoIndex + 1) }>
            Next
          </button>
          <button onClick={ () => this.checkForFavorites(song) } className="love-button" />
        </div>
        
      </div>
    );
  }
}

export default Genre;

