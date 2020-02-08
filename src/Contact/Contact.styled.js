import styled from 'styled-components';

export const Contact = styled.div`
    width: 3000px;
    background: ${props => props.background ? props.background : '#2c344e'};
`;

export const ContactInner = styled.div`
    overflow: hidden;
    max-width: 100vw;
    margin: auto;
    width: 70vw;
    padding: ${props => props.showContactButtons ? '200px 0 300px' : '200px 0'};
    transition: padding 1s;
`;

export const Heading = styled.h1`
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 100px;
    line-height: 1;
    color: #bbc3da;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;

export const Body = styled.p`
    text-align: center;
    color: #d3d3d3;
    line-height: 2em;
    font-size: 18px;
    font-family: Lato,serif;
    color: #B5B5B5;
    margin-top: 30px;

    opacity: 0;
    transform: translateY(10vh);
    transition: all 0.6s;

    ${props => props.onScreen && `
        opacity: 1;
        transform: none;
        transition: opacity 1.5s ease-in, transform 0.6s ease-out;
    `}
`;


export const TextPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImagePanel = styled.div`
    padding-top: 60px;
    display: inline-block;
    
    
    position: relative;

    opacity: 0;
    transform: translateX(-30%);
    transition: all 0.6s;
    left: 50%;

    ${props => props.onScreen && `
        opacity: 1;
        transform: ${props.showContactButtons ? 'translateX(0)' : 'translateX(-50%)'};
        left: ${props.showContactButtons ? '0' : '50%'};
        transition: opacity 1.5s ease-in, transform 0.6s ease-out, left 1s ease-out;
        ${'' /* transition: opacity 1.5s ease-in, transform 0.6s ease-out, left 1s ease-out;
        transform: ${props.showContactButtons ? 'translateX(0)' : 'translateX(-50%)'};
        left: ${props.showContactButtons ? '0' : '50%'}; */}
    `}
`;

export const Icon = styled.img`
    height: 110px;
    filter: grayscale(.4);
    display: inline-block;
    margin: 20px 40px;
    vertical-align: top;
    opacity: 1;
    transform: scale(0.9);
    transition: all 1s;

    ${props => props.onScreen && `
        opacity: 1;
        transition: top 1s ease-in-out, left 1s ease-in-out, height 1s ease-in-out, opacity 1.5s ease-in, transform 0.6s ease-out;
        ${props.showContactButtons && `
            height: 80px;
        `}

        color: blue;
        :hover {
            transition: top 1s ease-in-out, left 1s ease-in-out, height 1s ease-in-out, opacity 1.5s ease-in, transform 0.6s ease-out;
            transform: scale(1);
            cursor: pointer;
            filter: grayscale(0);
        }
    `}
`;

export const IconTwo = styled(Icon)`
    position: relative;
    top: ${props => props.showContactButtons ? '120px' : '0'};
    left: ${props => props.showContactButtons ? '-220px' : '0'};
`;

export const ContactText = styled.h4`
    display: inline-block;
    // display: ${props => props.showContactButtons ? 'inline-block' : 'none'};
    opacity: ${props => props.showContactButtons ? '1' : '0'};
    transition: ${props => props.showContactButtons ? 'opacity 0.4s 1s' : 'opacity 0.4s'};
    position: absolute;
    top: 35px;
    left: 210px;
    width: 520px;
    font-size: 30px;
    color: #b4c4d8;
    z-index: ${props => props.showContactButtons ? '1' : '0'};
`;


export const ContactTextTwo = styled(ContactText)`
    top: 153px;
    left: 0;
`;

export const IconAndText = styled.div`
    position: relative;
    display: flex;
    display: inline-block;
`;


