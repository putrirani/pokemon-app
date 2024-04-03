import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Pokemon App</h1>
      <p>This is a simple app to explore Pokemon data.</p>
      <p>Start by exploring:</p>
      <ul>
        <li><Link to="/pokemon-list">Pokemon List</Link></li>
        <li><Link to="/my-pokemon-list">My Pokemon List</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
