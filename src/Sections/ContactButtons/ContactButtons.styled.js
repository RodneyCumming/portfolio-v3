import styled from "styled-components";
// import { fontColours, backgroundColours } from 'Styles/colours';

export const ContactButtons = styled.div`
  width: 3000px;
  background: ${backgroundColours.bluewood};s
`;

export const ContactButtonsInner = styled.div`
  overflow: auto;
  max-width: 100vw;
  margin: auto;
  padding: 100px;
`;

export const Heading = styled.h1`
  text-align: center;
  color: white;
  font-weight: 700;
  font-size: 36px;
`;

export const Body = styled.p`
  text-align: center;
  color: ${fontColours.alto};
  line-height: 1.6em;
  font-size: 22px;
  font-family: Lato, serif;
`;
