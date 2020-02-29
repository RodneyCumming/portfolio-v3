import styled from 'styled-components';

export const PortfolioPage = styled.div`
    // overflow: scroll;
    width: 3000px;

`; 

export const PortfolioItemsGrid = styled.div`
    display: grid;
    width: 100vw;
    margin: auto;
    grid-template-columns: 100%;
    // grid-template-rows: 25% 100px auto;

    @media (min-width: 1200px) {
        grid-template-columns: 50% 50%;
    }
`; 

