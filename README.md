# Pokemon App

This is a simple web application that allows users to explore information about Pokemons. The app has the following features:

- **Pokemon List Page**: Displays a list of Pokemons with their names and images. Users can click on a Pokemon to view its details.
  
- **Pokemon Detail Page**: Shows detailed information about a selected Pokemon, including its name, image, types, and moves. Users can also catch the Pokemon with a 50% success probability.
  
- **My Pokemon List Page**: Displays a list of captured Pokemons with their nicknames. Users can release or rename a Pokemon from this page.

Three REST APIs are provided as backend services:
1. **API to catch Pokemon**: with a 50% success probability.
2. **API to release Pokemon**: The release will succeed if the number of captured Pokemons is a prime number.
3. **API to rename Pokemon**: with a combination of its original name and the Fibonacci sequence.

## Usage

- Open your web browser and navigate to `http://localhost:3000` to access the Pokemon App.
- Explore different pages to view Pokemons, catch new Pokemons, and manage your captured Pokemons.

## Technologies Used

- **React.js** for the frontend
- **Express.js** for the backend
- **Axios** for handling HTTP requests
- **PokeAPI** ([pokeapi.co](http://pokeapi.co)) for Pokemon data
