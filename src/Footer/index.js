import React, { useRef } from "react";
import * as Styled from "./Footer.styled.js";
import Logo from "../images/logo.svg";
import useOnScreen from "../hooks/useOnScreen";
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");
  return (
    <Styled.Footer ref={ref}>
      <Styled.FooterInner onScreen={onScreen}>
        <Styled.Link href="/">
          <Styled.Logo src={Logo} alt="logo" height={33} />
        </Styled.Link>

        <Styled.Body onClick={() => console.log(onScreen)}>
          Design & development by Rodney Cumming 2020
        </Styled.Body>
      </Styled.FooterInner>
    </Styled.Footer>
  );
};

export default Footer;
