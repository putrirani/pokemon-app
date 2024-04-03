import React from 'react';
import './App.css'; // Mengimpor file CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import MyPokemonListPage from './pages/MyPokemonListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-list" element={<PokemonListPage />} />
        {/* Gunakan properti `element` untuk menentukan komponen yang akan ditampilkan */}
        <Route path="/pokemon-detail/:id" element={<PokemonDetailPage />} />
        <Route path="/my-pokemon-list" element={<MyPokemonListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
