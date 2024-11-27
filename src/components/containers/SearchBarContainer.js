import React from 'react';
import { usePokemonContext } from '../../context/PokemonContext'; // Hook para acceder al contexto global de Pokémon.
import SearchBarView from '../views/SearchBarView'; // Componente de presentación.

// **Patrón: Container**
// Este componente maneja la lógica de filtrado de Pokémon basada en el término de búsqueda
// y actualiza el estado global a través del contexto. La presentación de la barra de búsqueda
// se delega al componente `SearchBarView`.
const SearchBarContainer = () => {
  const { state, dispatch } = usePokemonContext();

  const handleSearch = (searchTerm) => {
    const filteredPokemons = state.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch({ type: 'FILTER_POKEMONS', payload: filteredPokemons });
  };

  return <SearchBarView onSearch={handleSearch} />;
};

export default SearchBarContainer;
