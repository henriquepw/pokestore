import React from 'react';

import { useCart } from '../../../hooks/cart';

import { Container } from './styles';

interface PokemonItemProps {
  data: {
    id: string;
    name: string;
    imageURL: string;
    amount: number;
  };
}

const PokemonItem: React.FC<PokemonItemProps> = ({ data }) => {
  const { incrementPokemonAmount, decrementPokemonAmount } = useCart();

  function handleIncrement(): void {
    incrementPokemonAmount(data.id);
  }

  function handleDecrement(): void {
    decrementPokemonAmount(data.id);
  }

  return (
    <Container>
      <img src={data.imageURL} alt={data.name} />
      <p>{data.name}</p>

      <div>
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <span>{data.amount}</span>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </Container>
  );
};

export default PokemonItem;
