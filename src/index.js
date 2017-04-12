import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Main from './components/Main';
import Learn from './components/Learn';
import House from './components/House';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import './index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Match exactly pattern="/" component={ Main } />
        <Match pattern="/learn" component={ Learn } />
        <Match pattern="/learn/house" component={ House } />
        
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'));



//match params to throw in an id






