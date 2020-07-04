import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import logoImg from '../../assets/logo.png';

import { Container, CartButton } from './styles';

const Header: React.FC = () => {
  const { pokemonList } = useCart();

  const itemCount = pokemonList.length > 9 ? '+9' : pokemonList.length;

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Pokemon logo" />
      </Link>

      <CartButton to="/">
        <FaShoppingCart size={24} />
        Cart
        <span>{itemCount}</span>
      </CartButton>
    </Container>
  );
};

export default Header;
