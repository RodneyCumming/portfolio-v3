import React from 'react'
import * as Styled from './Nav.styled'
import Logo from "../images/logo.svg";


const Nav = () => (
  <Styled.Nav>
    <Styled.NavInner>
    
      <Styled.UnordedList>
        <Styled.HomeLink to='/'>
          <Styled.Logo
              src={Logo}
              alt="logo"
              height={60}
          />
        </Styled.HomeLink>
        <Styled.NavItemsContainer>
            <Styled.NavItem to='/' exact>HOME</Styled.NavItem>
            <Styled.NavItem to='/portfolio'>PORTFOLIO</Styled.NavItem>
            <Styled.NavItem to='/contact'>CONTACT</Styled.NavItem>
        </Styled.NavItemsContainer>
      </Styled.UnordedList>
    </Styled.NavInner>
  </Styled.Nav>
)

export default Nav
