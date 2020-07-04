import React, { useEffect, useState } from 'react';

import PokeCard from '../../components/PokeCard';

import pokeAPI, { baseURL } from '../../services/pokeAPI';

import { Container, PokeList } from './styles';

interface GetPokemon {
  results: Array<{
    name: string;
    url: string;
  }>;
}

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  imageURL: string;
  types: Array<{
    type: {
      url: string;
      name: string;
    };
  }>;
}

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemon(): Promise<void> {
      const pokeList = await pokeAPI.get<GetPokemon>(
        'pokemon?limit=10&offset=10',
      );

      const getPokemon = await Promise.all(
        pokeList.data.results.map((item) =>
          pokeAPI.get<Pokemon>(item.url.split(baseURL)[1]),
        ),
      );

      const pokemon = getPokemon.map((poke) => poke.data);
      setPokemonList(pokemon);
    }

    loadPokemon();
  }, []);

  return (
    <Container>
      <PokeList>
        {pokemonList.map((pokemon) => (
          <PokeCard
            key={String(pokemon.id)}
            id={String(pokemon.id)}
            name={pokemon.name}
            price={pokemon.weight}
            types={pokemon.types}
          />
        ))}
      </PokeList>
    </Container>
  );
};

export default React.memo(Home);
