const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();

// Middleware untuk menyajikan file statis dari folder 'images'
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json()); // Middleware untuk parsing body JSON

// Array untuk menyimpan daftar Pokemon yang ditangkap
let myPokemonList = [];

// REST API untuk menangkap Pokemon dengan probabilitas 50%
app.post('/api/catch-pokemon', (req, res) => {
  const { pokemonId, pokemonName, nickname } = req.body; // Ambil data yang diperlukan dari req.body
  const success = Math.random() < 0.5; // Probabilitas keberhasilan 50%
  if (success) {
    const pokemonData = { id: pokemonId, name: pokemonName, type: "Electric", nickname: nickname };
    myPokemonList.push(pokemonData);
    console.log("Pokemon ditangkap:", myPokemonList);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: "Pokemon fled! Try again." });
  }
});

// REST API untuk melepaskan Pokemon
app.post('/api/release-pokemon', (req, res) => {
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
  };

  // Mengambil data Pokemon yang akan dilepaskan dari req.body
  const pokemonName = req.body.pokemonName;

  // Mengembalikan bilangan prima jika pelepasan berhasil, jika tidak, mengembalikan bilangan bukan prima
  if (isPrime(myPokemonList.length)) {
    // Menghapus Pokemon dari daftar jika jumlah Pokemon adalah bilangan prima
    myPokemonList = myPokemonList.filter(pokemon => pokemon.name !== pokemonName);
    res.json({ releaseStatus: 'success', message: 'Pokemon released successfully.' });
  } else {
    res.status(400).json({ releaseStatus: 'failed', message: 'Release failed. The number of Pokemon is not prime.' });
  }
});

// REST API untuk mengubah nama Pokemon
app.put('/api/change-nickname', (req, res) => {
  // Mengambil data Pokemon yang akan diubah namanya dari req.body
  const pokemonName = req.body.pokemonName;

  // Mencari indeks Pokemon yang akan diubah namanya dalam array myPokemonList
  const index = myPokemonList.findIndex(pokemon => pokemon.name === pokemonName);
  
  // Jika Pokemon ditemukan, mengubah nama sesuai urutan Fibonacci
  if (index !== -1) {
    const newName = `${pokemonName}-${fibonacci(index)}`;
    myPokemonList[index].nickname = newName;
    res.json({ success: true, newNickname: newName });
  } else {
    res.status(404).json({ success: false, message: 'Pokemon not found.' });
  }
});

// Fungsi untuk menghitung urutan Fibonacci
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// REST API untuk mendapatkan daftar Pokemon pengguna
app.get('/api/my-pokemon-list', (req, res) => {
  res.json(myPokemonList);
});

// Set EJS sebagai view engine dan tentukan path ke direktori views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve halaman My Pokemon List secara dinamis
app.get('/my-pokemon-list', (req, res) => {
  res.render('my-pokemon-list', { myPokemonList }); // Render halaman EJS dengan data myPokemonList
});

// Handle routes yang tidak ditemukan
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
