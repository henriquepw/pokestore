import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container, CartButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Pokemon logo" />
      </Link>

      <CartButton to="/">
        <FaShoppingCart size={24} />
        Cart
        <span>+9</span>
      </CartButton>
    </Container>
  );
};

export default Header;
