// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import './PokemonList.css'; // Import stylesheet for PokemonList

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Fetch Pokemon data from API
    fetch('http://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, []);

  return (
    <div className="pokemon-list-container">
      <h1>Daftar Pokemon</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="pokemon-list-item">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <span className="pokemon-name">{pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
