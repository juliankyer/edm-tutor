import React from 'react';
import { Link } from 'react-router';

import genres from '../data/genres';
import Navigation from './Navigation';

const Learn = () => {
  
  const genreTag = () => {
    return genres.map((category, index) => {
      return (
        <Link className="genre-card" to={`/learn/${category.link}`} key={category.id}>
          <h1 className="genreName">{category.genre}</h1>
        </Link>
      )
    })
  }
  
  return (
    <div>
      <Navigation />
      <div className="genre-box">
        { genreTag() }
      </div>
    </div>
  )
}

export default Learn;
