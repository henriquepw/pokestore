import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import formatPrice from '../../utils/formatPrice';

import PokemonItem from './PokemonItem';

import {
  Container,
  PokemonList,
  NoItemSection,
  FinishSection,
  CheckoutButton,
} from './styles';

const Cart: React.FC = () => {
  const history = useHistory();
  const { pokemonList, total, buy } = useCart();

  const isDisabled = pokemonList.length === 0;

  function handleOnCheckout(): void {
    buy();

    history.push('/cart/approved');
  }

  return (
    <Container>
      <PokemonList>
        {pokemonList.map((pokemon) => (
          <PokemonItem key={pokemon.id} data={pokemon} />
        ))}
      </PokemonList>

      {isDisabled && pokemonList.length === 0 && (
        <NoItemSection>
          <FaTimes size={64} />
          <h1>Don&apos;t have items on the cart</h1>
        </NoItemSection>
      )}

      <FinishSection>
        <p>
          total
          <strong>{formatPrice(total)}</strong>
        </p>

        <CheckoutButton
          type="button"
          onClick={handleOnCheckout}
          disabled={isDisabled}
        >
          checkout
        </CheckoutButton>
      </FinishSection>
    </Container>
  );
};

export default Cart;
