import React, { Component } from 'react';
import { Link } from 'react-router';
import genres from '../data/genres';

const Learn = () => {

  const genreTag = () => {
    return genres.map((category, index) => {
      return (
        <Link to={`/learn/${category.link}`} key={category.id}>
          <h1>{category.genre}</h1>
        </Link>
      )
    })
  }
  return (
    <div>
      <h1>Pick a genre</h1>
      { genreTag() }
    </div>
  )
}

export default Learn;