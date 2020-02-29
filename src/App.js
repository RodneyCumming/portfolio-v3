import React, {useState, useEffect} from 'react';
import Hero from 'Pages/Hero';
import PortfolioPage from 'Pages/PortfolioPage';
import ContactPage from 'Pages/ContactPage';
import Nav from 'Nav';
import MenuPopup from 'Nav/MenuPopup';
import { Switch, Route } from 'react-router-dom'
import * as Styled from './App.styled'

import 'Styles/App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setIsMenuOpen(false), 150);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return (
    <Styled.App>
      <Styled.Perspective>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Switch>
          <Route exact path='/' component={Hero}  />
          <Route path='/portfolio' component={PortfolioPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        
      </Styled.Perspective>
      <MenuPopup isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Styled.App>
  );
}

export default App;
