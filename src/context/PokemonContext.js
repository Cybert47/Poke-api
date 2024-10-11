import React, { createContext, useContext, useReducer, useEffect } from 'react';

const PokemonContext = createContext();

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  loading: true,
  error: null,
};

function pokemonReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, pokemons: action.payload, filteredPokemons: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'FILTER_POKEMONS':
      return { ...state, filteredPokemons: action.payload };
    default:
      return state;
  }
}

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: pokemonDetails });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching Pokemon data' });
      }
    }
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  return useContext(PokemonContext);
}