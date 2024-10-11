import React from 'react';
import "./App.css";
import SearchBar from './components/SearchBar';
import { PokemonProvider } from './context/PokemonContext';
import PokemonList from './components/PokemonLits';

function App() {
  return (
    <PokemonProvider>
      <div className="app-container">
        <h1 className="app-titl">Pokemon App</h1>
        <SearchBar />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;