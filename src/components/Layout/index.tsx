import React from 'react';

import GlobalStyles from '../../styles/Global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
