import React from 'react';

import PokeCard from '../../components/PokeCard';

import { Container, PokeList } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <PokeList>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </PokeList>
    </Container>
  );
};

export default Home;
