import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPokemonListPage = () => {
  const [myPokemonList, setMyPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyPokemonList = async () => {
      try {
        const response = await axios.get('/api/my-pokemon-list');
        setMyPokemonList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch My Pokemon list:', error);
      }
    };

    fetchMyPokemonList();
  }, []);

  const releasePokemon = async (pokemonId) => {
    try {
      const response = await axios.post('/api/release-pokemon', { pokemonId });
      console.log(response.data);
      // Jika pelepasan sukses, perbarui daftar Pokemon setelah melepaskan
      if (response.data.releaseStatus === 'success') {
        const updatedList = myPokemonList.filter(pokemon => pokemon.id !== pokemonId);
        setMyPokemonList(updatedList);
      }
    } catch (error) {
      console.error('Error releasing Pokemon:', error);
    }
  };

  const changeNickname = async (pokemonId, newName) => {
    try {
      const response = await axios.put('/api/change-nickname', { pokemonId, newName });
      console.log(response.data);
      // Jika perubahan nickname sukses, perbarui daftar Pokemon dengan nickname baru
      if (response.data.success) {
        const updatedList = myPokemonList.map(pokemon => {
          if (pokemon.id === pokemonId) {
            return { ...pokemon, nickname: newName };
          }
          return pokemon;
        });
        setMyPokemonList(updatedList);
      }
    } catch (error) {
      console.error('Error changing nickname:', error);
    }
  };

  return (
    <div>
      <h1>My Pokemon List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {myPokemonList.map(pokemon => (
            <li key={pokemon.id}>
              <div>
                <span>{pokemon.nickname ? pokemon.nickname : 'Unnamed'} ({pokemon.name})</span>
                <button onClick={() => releasePokemon(pokemon.id)}>Release</button>
                <input
                  type="text"
                  value={pokemon.nickname || ''}
                  onChange={(e) => changeNickname(pokemon.id, e.target.value)}
                />
                <button onClick={() => console.log('Rename button clicked')}>Rename</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPokemonListPage;
