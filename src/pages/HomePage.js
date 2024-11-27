import React from 'react';
import SearchBarContainer from '../components/containers/SearchBarContainer';
import PokemonListContainer from '../components/containers/PokemonListContainer';


const HomePage = () => {
  return (
    <>
      <h1 className="app-title">Pokemon App</h1>
      <SearchBarContainer />
      <PokemonListContainer />
    </>
  );
};

export default HomePage;