import React from 'react';

import { useCart } from '../../hooks/cart';

import formatPrice from '../../utils/formatPrice';

import PokemonItem from './PokemonItem';

import { Container, PokemonList, FinishSection } from './styles';

const Cart: React.FC = () => {
  const { pokemonList, total } = useCart();

  return (
    <Container>
      <PokemonList>
        {pokemonList.map((pokemon) => (
          <PokemonItem key={pokemon.id} data={pokemon} />
        ))}
      </PokemonList>

      <FinishSection>
        <p>
          total
          <strong>{formatPrice(total)}</strong>
        </p>

        <button type="button">checkout</button>
      </FinishSection>
    </Container>
  );
};

export default Cart;
