import React, { useEffect, useState } from "react";
import * as Styled from "./Nav.styled";
import Logo from "Images2//logo.svg";
import { withRouter } from "react-router";
import MenuIcon from "Images2/icons/menu.svg";

const Nav = props => {
  const [initLoadTrigger, setInitialLoad] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = props;
  useEffect(() => setInitialLoad(true), []);
  return (
    <Styled.Nav
      homePage={props.history.location.pathname === "/"}
      initLoadTrigger={initLoadTrigger}
    >
      <Styled.NavInner>
        <Styled.UnordedList>
          <Styled.HomeLink to="/">
            <Styled.Logo src={Logo} alt="logo" height={60} />
          </Styled.HomeLink>
          <Styled.NavItemsContainer>
            <Styled.NavLinksInnerContainer isMenuOpen={isMenuOpen}>
              <Styled.NavItemsWrapper>
                <Styled.NavItem
                  to="/"
                  exact
                  isMenuOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Styled.NavItem>
                <Styled.NavItem
                  to="/portfolio"
                  isMenuOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(false)}
                >
                  PORTFOLIO
                </Styled.NavItem>
                <Styled.NavItem
                  to="/contact"
                  isMenuOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Styled.NavItem>
              </Styled.NavItemsWrapper>
            </Styled.NavLinksInnerContainer>
            <Styled.MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Styled.MenuBars src={MenuIcon} />
            </Styled.MenuIcon>
          </Styled.NavItemsContainer>
        </Styled.UnordedList>
      </Styled.NavInner>
    </Styled.Nav>
  );
};

export default withRouter(Nav);
