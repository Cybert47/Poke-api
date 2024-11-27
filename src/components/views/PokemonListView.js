import React from 'react';
import PokemonCardContainer from '../containers/PokemonCardContainer';


const PokemonListView = ({ pokemons }) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCardContainer key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonListView;