import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { CartProvider } from '../../hooks/cart';

import Header from '../Header';

import pokeBollImg from '../../assets/pokeboll.png';

import GlobalStyles from '../../styles/Global';
import theme from '../../styles/theme';
import { Background } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyles />
        <Background>
          <img src={pokeBollImg} alt="pokeboll" />
          <img src={pokeBollImg} alt="pokeboll" />
          <img src={pokeBollImg} alt="pokeboll" />
        </Background>
        <Header />
        {children}
      </CartProvider>
    </ThemeProvider>
  );
};

export default Layout;
