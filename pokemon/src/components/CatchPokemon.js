// Contoh pengiriman data Pokemon ke server dengan nickname
const nickname = "Pikachu"; // Ganti dengan cara Anda mendapatkan nickname
const pokemonId = 1; // Ganti dengan id Pokemon yang Anda tangkap
const pokemonName = "Pikachu"; // Ganti dengan nama Pokemon yang Anda tangkap

fetch('/api/catch-pokemon', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ nickname, pokemonId, pokemonName }),
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch((error) => {
  console.error('Error:', error);
});
