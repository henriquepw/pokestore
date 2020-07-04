import React from 'react';

import { Container } from './styles';

const PokeCard: React.FC = () => {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="Bulbasaur"
      />
      <h1>Bulbasaur</h1>
      <ul>
        <li>Gress</li>
        <li>Poison</li>
      </ul>

      <div>
        <strong>R$ 69,00</strong>
        <button type="button">Comprar</button>
      </div>
    </Container>
  );
};

export default PokeCard;
