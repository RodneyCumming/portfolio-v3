import React, {useEffect, useState} from 'react'
import * as Styled from './MenuPopup.styled'
import Logo from "Images/logo.svg";
import { withRouter } from "react-router";
import CloseIcon from 'Images/icons/close.svg'
import MenuIcon from 'Images/icons/menu.svg'

const MenuPopup = props => {
  const {isMenuOpen, setIsMenuOpen} = props;
  return (
  

        <Styled.NavLinksInnerContainer isMenuOpen={isMenuOpen}>
        <Styled.CloseMenuButton onClick={() => setIsMenuOpen(false)} isMenuOpen={isMenuOpen}><Styled.CloseIcon src={CloseIcon}/></Styled.CloseMenuButton>
        <Styled.NavItemsWrapper isMenuOpen={isMenuOpen}>
        <Styled.NavItem to='/' exact isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>HOME</Styled.NavItem>
        <Styled.NavItem to='/portfolio' isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Styled.NavItem>
        <Styled.NavItem to='/contact' isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>CONTACT</Styled.NavItem>
        </Styled.NavItemsWrapper>
        </Styled.NavLinksInnerContainer>
      
)}

export default withRouter(MenuPopup)
