import React from 'react';
import { usePokemonContext } from '../../context/PokemonContext'; // Hook para acceder al contexto global de Pokémon.
import PokemonListView from '../views/PokemonListView'; // Componente de presentación.

// **Patrón: Container**
// Este componente actúa como un "contenedor" porque maneja la lógica relacionada con el estado global 
// (datos, carga, y errores) usando el contexto. 
// Mientras tanto, delega la presentación de la lista de Pokémon al componente `PokemonListView`.
const PokemonListContainer = () => {
  
  const { state } = usePokemonContext();
  const { filteredPokemons, loading, error } = state; 


  if (loading) return <div className="loading-text">Loading...</div>;

  
  if (error) return <div className="error-text">{error}</div>;

  
  return <PokemonListView pokemons={filteredPokemons} />;
};

export default PokemonListContainer;
