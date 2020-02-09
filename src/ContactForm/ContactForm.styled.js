import styled, {keyframes} from 'styled-components';

export const ContactForm = styled.div`
    width: 3000px;
    background: #203344;
`; 

export const ContactFormInner = styled.div`
    overflow: auto;
    max-width: 100vw;
    margin: auto;
    padding: 100px;
    position: relative;
    display: flex;
`;

export const ContactFormContainer = styled.form`
    width: 70vw;
    max-width: 1400px;
    margin: auto;
    // padding: 70px 110px;
    position: relative;
    display: flex;
    border-radius: 35px 0 0 35px;
    transition: all 0.2s;
    width: 100%;

    
    transition: all 0.2s;
    ${props => props.activeMound && `
        // box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;
        left: -2px;
        top: -2px;
        transition: all 0.2s;
    `}

    // :hover {
    //     left: 0;
    //     top: 0;
    //     box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;
    //     transition: all 0.2s;
    // }
`;

export const FormHeader = styled.h3`
    margin: 0 0 30px;
    text-align: left;
    font-size: 30px;
    color: #fff;
    font-family: Raleway,sans-serif;
    font-weight: 800;
`;

export const TextInput = styled.input`
    display: inline-block;
    background: #2a3e53;
    outline: none;
    border: 1px solid #2a3e53;
    font-weight: 400;
    border-radius: 5px;
    font-family: Lato,serif;
    font-size: 18px;
    color: #fff;
    width: calc(50% - 50px);
    margin-bottom: 30px;
    line-height: 40px;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-right: ${props => props.rightMargin ? '100px' : ''};

    :hover {
        background: #304863;
    }
    
    :focus {
        background: #29506f;
    }
`;

export const TextAreaInput = styled.textarea`
    display: inline-block;
    background: #2a3e53;
    outline: none;
    font-size: 18px;
    border: 1px solid #2a3e53;
    font-weight: 400;
    border-radius: 5px;
    font-family: Lato,serif;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 30px;
    line-height: 25px;
    padding: 10px 15px;
    resize: none;

    :hover {
        background: #304863;
    }
    
    :focus {
        background: #29506f;
    }
`;

export const SendIcon = styled.img`
    width: 60px;
    height: 40px;
`;

const hoveringPlane = keyframes`
  0% {
    height: 40px;
    width: 60px;
  }
  50% {

    height: 80px;
    width: 60px;
  }
  100% {
    height: 40px;
    width: 60px;
  }
`;

export const SendButton = styled.button`
    border: none;
    background: #1e3b52;
    color: #fff;
    font-size: 18px;
    font-family: Lato,serif;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 0;
    width: 30%;
    max-width: 200px;
    transition: background .3s;
    border-radius: 0 35px 35px 0;
    box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;

    :hover {
        cursor: pointer;
        // background: #3495d9;
        // background: #2c5f88;
        transition: background 0.3s;
        background: #21415a;
    }
    :hover ${SendIcon} {
        // width: 70%;
        
        animation: ${hoveringPlane} 1s ease-in-out infinite;
    }
`;

export const FormMiddlePanel = styled.div`
    padding: 70px 110px;
    flex-grow: 1;
    // flex-shrink: 0;
    border-radius: 35px 0 0 35px;
    box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;

`;
export const BallContainer = styled.div`

`;

export const ParallaxBall = styled.div`

    height: 110px;
    width: 110px;
    border-radius: 50%;
    top: 100px;
    margin: 30px;
    // position: absolute;
    transition: box-shadow 0.8s;
    box-shadow: 5px 5px 7px 2px #1a2b3c, inset -5px -5px 7px 2px #1a2b3c, 10px 10px 10px 15px #1d3040, inset 20px 20px 15px -15px #243a4c;

    :hover {
        box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;
        transition: box-shadow 0.2s;
        cursor: pointer;
    }

    // ${props => !props.showFirstMound && `
        

    //     box-shadow: none;
    //     transition: box-shadow 0.8s;
    //     :hover {
    //         box-shadow: none;
    //         transition: box-shadow 0.8s;
    //     }
    // `}


`;


export const ParallaxBallTwo = styled.div`
    height: 110px;
    width: 110px;
    border-radius: 50%;
    top: 100px;
    position: absolute;


    top: initial;
    bottom: 100px;
    right: 5%;
    border-radius: 55px;
    height: 330px;
    transition: box-shadow 1s;
    
    box-shadow: 5px 5px 7px 2px #1a2b3c, inset -5px -5px 7px 2px #1a2b3c, 10px 10px 10px 15px #1d3040, inset 20px 20px 15px -15px #243a4c;
    :hover {
        box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;
        transition: box-shadow 0.2s;
        cursor: pointer;
    }

    ${props => !props.showSecondMound && `
        box-shadow: none;
        transition: box-shadow 1s;
        :hover {
            box-shadow: none;
            transition: box-shadow 1s;
        }
    `}
`;

