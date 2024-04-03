// services/pokemonApi.js

import axios from 'axios';

const BASE_URL = 'http://pokeapi.co/api/v2';

export const fetchPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon`);
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch details for Pokemon with ID ${pokemonId}:`, error);
    throw error;
  }
};
