import React from 'react';


const PokemonCardView = ({ pokemon, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="img"
      />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <div className="stats">
        <p><strong>HP:</strong> {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
        <p><strong>CP:</strong> {pokemon.base_experience}</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
      </div>
    </div>
  );
};

export default PokemonCardView;