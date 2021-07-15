import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import NavbarComponent from './components/Navbar'
import Favourite from './components/Favourite'
import Home from './components/Home'

export default (props) => {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/favourite' component={Favourite} />
      </Switch>
    </Router>
  );
};