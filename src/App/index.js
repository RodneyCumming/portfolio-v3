import React, {useState, useEffect} from 'react';
import Hero from 'Pages/HomePage';
import PortfolioPage from 'Pages/PortfolioPage';
import ContactPage from 'Pages/ContactPage';
import Nav from 'Nav';
import MenuPopup from 'Nav/MenuPopup';
import { Switch, Route } from 'react-router-dom'
import * as Styled from './App.styled'

// import 'Styles/App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMenuOpen(false), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
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
