import React from 'react';
import Navigation from './Navigation';

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <div className="not-found">
        <h1>There is no deep house party here</h1>
      </div>
    </div>
  );
}

export default NotFound;