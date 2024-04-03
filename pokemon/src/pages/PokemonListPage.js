import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../services/pokemonApi'; 

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true); // Menambahkan state loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        const pokemonWithImages = data.map(pokemon => ({
          ...pokemon,
          imageURL: `/images/${pokemon.name.toLowerCase()}.png`
        }));
        setPokemonList(pokemonWithImages);
        setLoading(false); // Set loading menjadi false setelah data diambil
      } catch (error) {
        console.error('Failed to fetch Pokemon list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List Page</h1>
      {loading ? ( // Menampilkan pesan loading jika data masih diambil
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemonList.map(pokemon => (
            <li key={pokemon.name}>
              <Link to={`/pokemon-detail/${pokemon.name}`}>
                <img src={process.env.PUBLIC_URL + pokemon.imageURL} alt={pokemon.name} />
                <span>{pokemon.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonListPage;
