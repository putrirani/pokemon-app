import React from 'react';
import ReleasePokemonLogic from './ReleasePokemon';

function MyPokemonList({ myPokemonList, onReleasePokemon, onRenamePokemon }) {
  return (
    <div>
      <h1>My Pokemon List</h1>
      {myPokemonList.length === 0 ? (
        <p>No Pokemon captured yet.</p>
      ) : (
        <ul>
          {myPokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <span>{pokemon.nickname}</span>
              <button onClick={() => onReleasePokemon(pokemon.id)}>Release</button>
              <button onClick={() => onRenamePokemon(pokemon.id)}>Rename</button>
            </li>
          ))}
        </ul>
      )}
      <ReleasePokemonLogic /> {/* Menambahkan komponen ReleasePokemonLogic */}
    </div>
  );
}

export default MyPokemonList;
