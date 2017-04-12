import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Main from './components/Main';
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
        <iframe className="splash-video" frameborder="0" 
                height="100%" 
                width="100%" 
                src="https://youtube.com/embed/LzuHNfzdx4I?autoplay=1&controls=0&showinfo=0&autohide=1">
        </iframe>
        <Navigation />
        <Match exactly pattern="/" component={ Main } />
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






