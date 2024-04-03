// PokemonComponent.js

import React from 'react';
import pokemonNames from './pokemonNames'; // Sesuaikan pathnya dengan lokasi file

const PokemonComponent = () => {
  return (
    <div>
      <h1>List of Pokemon Names</h1>
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonComponent;
