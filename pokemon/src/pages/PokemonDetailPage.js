import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetailPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  //const [nickname, setNickname] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, [id]);

  const catchPokemon = async () => {
    try {
      const response = await axios.post('/api/catch-pokemon', { pokemonId: id });
      console.log(response.data);
      if (response.data.success) {
        const nicknameInput = prompt('Masukkan nama panggilan untuk Pokemon ini:');
        if (nicknameInput) {
          //setNickname(nicknameInput);
          window.location.href = '/my-pokemon-list'; // Redirect ke halaman 'my-pokemon-list'
        }
      }
    } catch (error) {
      console.error('Error catching Pokemon:', error);
    }
  };

  return (
    <div>
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h3>Types:</h3>
          <ul>
            {pokemonData.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
          <h3>Moves:</h3>
          <ul>
            {pokemonData.moves.map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
          <button onClick={catchPokemon}>Catch Pokemon</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetailPage;
