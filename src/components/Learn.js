import React from 'react';
import { Link } from 'react-router';
import genres from '../data/genres';

const Learn = () => {

  const genreTag = () => {
    return genres.map((category, index) => {
      return (
          <Link className="genreCard" to={`/learn/${category.link}`} >
            <h1 className="genreName">{category.genre}</h1>
          </Link>
      )
    })
  }
  return (
    <div className="genreBox">
      { genreTag() }
    </div>
  )
}

export default Learn;