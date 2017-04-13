import React, { Component } from 'react';
import { Link } from 'react-router';
import genres from '../data/genres';

const Learn = () => {

  const genreTag = () => {
    return genres.map((category, index) => {
      return (
        <section className="genreCard" key={category.id}>
          <Link to={`/learn/${category.link}`} >
            <h1>{category.genre}</h1>
          </Link>
        </section>
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