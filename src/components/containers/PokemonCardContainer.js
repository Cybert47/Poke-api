import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import PokemonCardView from '../views/PokemonCardView'; 

// **Patrón: Container** 
// Este componente se utiliza para manejar la lógica (en este caso, la navegación)
// mientras que el componente `PokemonCardView` se encarga únicamente de la presentación.
// La separación de responsabilidades ayuda a mantener el código más limpio y fácil de mantener.
const PokemonCardContainer = ({ pokemon }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`); // Redirige a la página de detalles del Pokémon.
  };

  return <PokemonCardView pokemon={pokemon} onClick={handleClick} />;
};

export default PokemonCardContainer;
