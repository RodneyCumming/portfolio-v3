import styled from 'styled-components';

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
`;

export const ContactFormContainer = styled.form`
    width: 70vw;
    max-width: 1200px;
    margin: auto;
    padding: 70px 110px;
    position: relative;

    border-radius: 35px;
    transition: all 0.2s;

    left: -2px;
    top: -2px;
    // box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;

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

`;

export const SendButton = styled.button`
    border: none;
    background: #2c5f88;
    color: #fff;
    font-family: Lato,serif;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 0;
    transition: background .3s;
`;

export const ParallaxBall = styled.div`
    height: 110px;
    width: 110px;
    border-radius: 50%;
    box-shadow: 5px 5px 7px 2px #1a2b3c, inset -5px -5px 7px 2px #1a2b3c, 10px 10px 10px 15px #1d3040, inset 20px 20px 15px -15px #243a4c;
    top: 100px;
    position: absolute;
    
    :hover {
        box-shadow: 2.5px 2.5px 3.5px 1px #1a2b3c, inset -2.5px -2.5px 3.5px 1px #1a2b3c, 5px 5px 5px 7.5px #1d3040, inset 10px 10px 7.5px -7.5px #243a4c;
        transition: box-shadow 0.2s;
    }
`;


export const ParallaxBallTwo = styled(ParallaxBall)`
    top: initial;
    bottom: 100px;
    right: 5%;
    border-radius: 55px;
    height: 330px;
`;
