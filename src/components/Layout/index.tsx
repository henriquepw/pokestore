import React from 'react';

import { ThemeProvider } from 'emotion-theming';

import Header from '../Header';

import GlobalStyles from '../../styles/Global';
import theme from '../../styles/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
