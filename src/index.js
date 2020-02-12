import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routers from './routers';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <Routers />
  </Router>,
  document.getElementById('root'));
