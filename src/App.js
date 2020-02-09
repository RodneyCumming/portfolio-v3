import React, {useState} from 'react';
import Hero from './Hero';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import Nav from './Nav';
// import * as Styled from './App.styled'
// import { Router, Route, Switch } from "react-router";
import { Switch, Route } from 'react-router-dom'
import * as Styled from './App.styled'

import './App.css';



function App() {
  return (
    <Styled.App>
      <Nav/>
        <Switch>
          <Route exact path='/' component={Hero}  />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
    </Styled.App>
  );
}

export default App;
