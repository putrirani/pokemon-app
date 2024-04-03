// src/components/DetailPokemon.js

import React, { useState, useEffect } from 'react';

function DetailPokemon({ pokemonId }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Fetch Pokemon data from API
    fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, [pokemonId]);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h1>{pokemonData.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
            alt={pokemonData.name}
          />
          <h2>Types:</h2>
          <ul>
            {pokemonData.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h2>Moves:</h2>
          <ul>
            {pokemonData.moves.slice(0, 5).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailPokemon;
