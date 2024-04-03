import axios from 'axios';

export const fetchMyPokemonList = async () => {
  try {
    const response = await axios.get(`/api/my-pokemon-list`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch My Pokemon list:', error);
    throw error;
  }
};

export const releasePokemon = async (pokemonId) => {
  try {
    const response = await axios.post(`/api/release-pokemon`, { pokemonId });
    return response.data;
  } catch (error) {
    console.error('Failed to release Pokemon:', error);
    throw error;
  }
};

export const renamePokemon = async (pokemonId, newName) => {
  try {
    const response = await axios.put(`/api/rename-pokemon`, { pokemonId, newName });
    return response.data;
  } catch (error) {
    console.error('Failed to rename Pokemon:', error);
    throw error;
  }
};
