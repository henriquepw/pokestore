import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} />
    </Container>
  );
};

export default Header;
