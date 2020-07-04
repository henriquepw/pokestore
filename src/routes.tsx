import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const src: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default src;
