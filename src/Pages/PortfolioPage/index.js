import React, { useEffect, useRef } from "react";
import PortfolioHeader from "Sections/PortfolioHeader";
import Footer from "Sections/Footer";
import SimplePortfolioItem from "Pages/PortfolioPage/SimplePortfolioItem";
import * as Styled from "./PortfolioPage.styled";
import portfolioItems from "./portfolioItems.data";

const PortfolioPage = () => {
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView();
  });
  return (
    <Styled.Parallax>
      <Styled.PortfolioPage ref={ref}>
        <PortfolioHeader />
        <Styled.PortfolioItemsGrid>
          {portfolioItems.map((portfolioItemData, index) => (
            <SimplePortfolioItem
              data={portfolioItemData}
              index={index}
              key={index}
            />
          ))}
        </Styled.PortfolioItemsGrid>
        <Footer />
      </Styled.PortfolioPage>
    </Styled.Parallax>
  );
};

export default PortfolioPage;
