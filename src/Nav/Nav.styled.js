import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'
import screenSize from 'Styles/mediaQueries';

export const Nav = styled.header`
    z-index: 100;
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;


    ${props => props.homePage && `
        opacity: 0;
        top: -100px;
        box-shadow: 0 6px 7px 2px rgba(0, 0, 0, 0.2);

        ${props.initLoadTrigger && `
            opacity: 1;
            top: 0;
            transition: opacity 2s, top 1s;
        `}
    `}

    
`;

export const NavInner = styled.div`
    background: #203244;
    width: 3000px;
`;

export const UnordedList = styled.div`
    justify-content: space-between;
    display: flex;
    max-width: 100vw;
    margin: auto;
    
`;

export const NavItemsContainer = styled.div`
    margin-right: 40px;
    display: flex;
    align-items: center;

    ${screenSize.minTablet`
        margin-right: 50px;
    `}
`;

export const NavLinksInnerContainer = styled.div`

    ${({ isMenuOpen }) => isMenuOpen && `
        display: none;
    `}
    

    ${screenSize.minTablet`
        position: static;
        height: unset;
        width: unset;
        margin: unset;
        background: unset;
    `}
`;
export const NavItemsWrapper = styled.div`
    width: 80%;
    height: fit-content;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    

    ${screenSize.minTablet`
        width: unset;
        height: unset;
        position: unset;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
        margin: unset;
    `}
`;



export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: white;
    
    padding: 0 30px;
    width: 100%;
    display: none;
    font-size: 50px;
    line-height: 140px;
    font-weight: 600;


    :hover {
        color: #00d7ff;
    }

    ${({ isMenuOpen }) => isMenuOpen && `
        display: inline-block;
    `}

    ${screenSize.minTablet`
        height: 100%;
        width: unset;
        
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 60px;


        :hover {
            background: #192835;
            color: white;
        }

        &.active {
            background: #192835;
            color: white;
        }
    `}
`;

export const HomeLink = styled(Link)`
`;

export const Logo = styled.img`
    margin-left: 20px;
    padding: 20px;

    :hover {
        cursor: pointer;
    }

    ${screenSize.minTablet`
        margin-left: 30px;
    `}
`;

export const MenuIcon = styled.div`
    :hover {
        cursor: pointer;
    }

    ${screenSize.minTablet`
        display: none;
    `}
`;
export const CloseMenuButton = styled.div`
    color: white;
    font-size: 50px;
    top: 0;
    right: 50px;
    position: absolute;
    display: none;
    :hover {
        cursor: pointer;
    }

    ${({ isMenuOpen }) => isMenuOpen && `
        display: block;
    `}

    
`;
export const CloseIcon = styled.img`
    height: 30px;
`;

export const MenuBars = styled.img`
    height: 24px;
`;