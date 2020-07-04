import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import { CartProvider } from '../../hooks/cart';

import Header from '../Header';

import GlobalStyles from '../../styles/Global';
import theme from '../../styles/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <GlobalStyles />
        <Header />
        {children}
      </CartProvider>
    </ThemeProvider>
  );
};

export default Layout;
