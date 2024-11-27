import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import PokemonCard from './PokemonCard';

function PokemonList() {
  const { state } = usePokemonContext();
  const { filteredPokemons, loading, error } = state;

  if (loading) return <div className="loading-text">Loading...</div>;
  if (error) return <div className="error-text">{error}</div>;

  return (
    <div className="pokemon-grid">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;