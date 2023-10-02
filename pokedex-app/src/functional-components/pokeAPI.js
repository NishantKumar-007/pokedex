import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/pokemon.css'
const PokeAPI = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const results = response.data.results;
        
            // Fetch additional details for each Pokemon
            const pokemonDetailsPromises = results.map(async (pokemon) => {
              const pokemonResponse = await axios.get(pokemon.url);
              return pokemonResponse.data;
            });
        
            const pokemonDetails = await Promise.all(pokemonDetailsPromises);
            setPokemonData(pokemonDetails);
          } catch (error) {
            console.log(error);
          }
    };

    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pokelist'>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            <div key={pokemon.name}>{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PokeAPI;
