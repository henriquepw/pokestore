import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import PurchaseApproved from './pages/PurchaseApproved';

const src: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route exact path="/cart/approved">
        <PurchaseApproved />
      </Route>
    </Switch>
  );
};

export default src;
