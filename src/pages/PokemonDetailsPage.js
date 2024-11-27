import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonContext } from '../context/PokemonContext';

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const { state } = usePokemonContext();
  const pokemon = state.pokemons.find(p => p.id === parseInt(id));

  if (!pokemon) return <div className="loading-text">Pokemon not found</div>;

  return (
    <div className="pokemon-details">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="img"
      />
      <div className="stats">
        <p><strong>HP:</strong> {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
        <p><strong>Attack:</strong> {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
        <p><strong>Defense:</strong> {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;