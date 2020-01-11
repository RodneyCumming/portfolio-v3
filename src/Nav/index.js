import React, {useEffect, useState} from 'react'
import * as Styled from './Nav.styled'
import Logo from "../images/logo.svg";
import { withRouter } from "react-router";

const Nav = props => {
  const [initLoadTrigger, setInitialLoad] = useState(false);
  useEffect(() => setInitialLoad(true));
  return (
  <Styled.Nav homePage={props.history.location.pathname === '/'} initLoadTrigger={initLoadTrigger}>
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
)}

export default withRouter(Nav)
