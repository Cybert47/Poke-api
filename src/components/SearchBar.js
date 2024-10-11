import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';

function SearchBar() {
  const { state, dispatch } = usePokemonContext();

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPokemons = state.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );
    dispatch({ type: 'FILTER_POKEMONS', payload: filteredPokemons });
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
