import React, { Component } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Navigation from './Navigation';

class Favorites extends Component {
  
  checkForFavorites() {
    if(this.props.favorites.length < 1) {
      return (
        <div className="error-card">
          <h3 className="fav fav-error">It's a little mello around here...</h3>
          <div className="fav-p-wrapper">
            <p className="fav fav-error">Head to the Learn section,</p>
            <p className="fav fav-error">show some love to your favorite tracks,</p>
            <p className="fav fav-error">and come back here to see your playlist!</p>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="fav-body">
          { this.checkForFavorites() }
          { this.props.favorites.length && <h1 className="fav fav-header">My favorite songs</h1>}
          { this.props.favorites.map((favorite, i) =>
            <div className="fav favorite-card" key={i}>
              <a href={favorite.video}>
                <h3 className="fav">{favorite.artist}</h3>
                <h4 className="fav">{favorite.song}</h4>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Favorites;
