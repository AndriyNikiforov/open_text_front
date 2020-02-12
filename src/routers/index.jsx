import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routers = () => (
  <Switch>
    <Route exact component={Home} path="/" />
  </Switch>
);

export default Routers;
