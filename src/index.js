import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './components/Home';
import Learn from './components/Learn';
import Genre from './components/Genre';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={ Home } />
        <Match exactly pattern="/about" component={ About } />
        <Match exactly pattern="/contact" component={ Contact } />
        <Match exactly pattern="/learn" component={ Learn } />
        <Match exactly pattern="/learn/:genre" component={ Genre } />
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));



//match params to throw in an id






