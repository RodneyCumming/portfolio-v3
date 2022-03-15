import styled from "styled-components";

export const PortfolioPage = styled.div`
  width: 3000px;
`;

export const PortfolioItemsGrid = styled.div`
  display: grid;
  width: 100vw;
  margin: auto;
  grid-template-columns: 100%;

  @media (min-width: 1200px) {
    grid-template-columns: 50% 50%;
  }
`;

export const Parallax = styled.div`
  perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -1500px;
`;
