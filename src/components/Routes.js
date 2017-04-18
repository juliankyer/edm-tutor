import React from 'react';
import { Match, Miss } from 'react-router';

import Home from './Home';
import Learn from './Learn';
import GenreContainer from '../containers/GenreContainer';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import FavoritesContainer from '../containers/FavoritesContainer';

const Routes = () => {
  return (
    <div>
      <Match exactly pattern="/" component={ Home } />
      <Match exactly pattern="/about" component={ About } />
      <Match exactly pattern="/contact" component={ Contact } />
      <Match exactly pattern="/favorites" component={ FavoritesContainer } />
      <Match exactly pattern="/learn" component={ Learn } />
      <Match exactly pattern="/learn/:genre" component={ GenreContainer } />
      <Miss component={ NotFound } />
    </div>
  )
}

export default Routes;