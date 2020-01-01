import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom'

export const Nav = styled.header`
    z-index: 100;
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
`;

export const NavInner = styled.div`
    background: #203244;
    width: 3000px;
`;

// todo: change name
export const UnordedList = styled.div`
    justify-content: space-between;
    display: flex;
    max-width: 100vw;
    margin: auto;
    box-shadow: 0 6px 7px 2px rgba(0, 0, 0, 0.2);
`;

export const NavItemsContainer = styled.div`
    margin-right: 50px;
`;

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 0 30px;
    line-height: 60px;
    height: 100%;
    display: inline-block;

    :hover {
        background: #192835;
    }

    &.active {
        background: #192835;
    }
`;

export const HomeLink = styled(Link)`
`;

export const Logo = styled.img`
    margin-left: 30px;
    padding: 20px;

    :hover {
        cursor: pointer;
    }
`;

