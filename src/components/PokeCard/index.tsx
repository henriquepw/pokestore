import React from 'react';

import { Container } from './styles';

interface PokeCardProps {
  id: string;
  name: string;
  price: number;
  types: Array<{
    type: {
      url: string;
      name: string;
    };
  }>;
}

function formattedPrice(price: number): string {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}

const PokeCard: React.FC<PokeCardProps> = ({ id, name, price, types }) => {
  return (
    <Container>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={name}
      />
      <h1>{name}</h1>
      <ul>
        {types.map(({ type }) => (
          <li key={type.url}>{type.name}</li>
        ))}
      </ul>

      <div>
        <strong>{formattedPrice(price)}</strong>
        <button type="button">Add to Cart</button>
      </div>
    </Container>
  );
};

export default PokeCard;
