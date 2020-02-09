import styled from 'styled-components'

// export const SectionOne = styled.section`
//     background: blue;
//     height: 700px;

// `;

// export const SectionTwo = styled.section`
//     background: grey;
//     height: 700px;

// `;

// export const SectionThree = styled.section`
//     background: teal;
//     height: 700px;

// `;

export const App = styled.div`
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

    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
`;

