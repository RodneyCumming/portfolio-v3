import React, { useState, useRef } from 'react';
import * as Styled from './Skills.styled.js'
import HTML5 from "../images/icons/html5.svg";
import CSS3 from "../images/icons/css3.svg";
import Javascript from "../images/icons/js.svg";
import ReactJS from "../images/icons/react.svg";
import NodeJS from "../images/icons/nodejs.svg";
import MongoDB from "../images/icons/mongodb.svg";
import Express from "../images/icons/express.svg";
import Git from "../images/icons/git.svg";
import VScode from "../images/icons/vscode.svg";
import useOnScreen from '../hooks/useOnScreen';

const icons = [
    {
        label: 'HTML5',
        image: HTML5,
        category: 'Frontend'
    },
    {
        label: 'CSS3',
        image: CSS3,
        category: 'Frontend'
    },
    {
        label: 'Javascript',
        image: Javascript,
        category: 'Frontend'
    },
    {
        label: 'ReactJS',
        image: ReactJS,
        category: 'Frontend'
    },
    {
        label: 'NodeJS',
        image: NodeJS,
        category: 'Backend'
    },
    {
        label: 'MongoDB',
        image: MongoDB,
        category: 'Backend'
    },
    {
        label: 'Express',
        image: Express,
        category: 'Backend'
    },
    {
        label: 'git',
        image: Git,
        category: 'Tools'
    },
    {
        label: 'VScode',
        image: VScode,
        category: 'Tools'
    },
]

const Skills = () => {

    const [selectedCategory, setSelectedCategory] = useState('All');
    const ref = useRef();
    const onScreen = useOnScreen(ref, '-100px');

    return (
        <Styled.Skills>
            <Styled.SkillsInner>
                <Styled.TextPanel ref={ref}>
                    <Styled.Heading onClick={() => console.log(selectedCategory)} onScreen={onScreen}>TECHNOLOGY</Styled.Heading>
                    <Styled.Body onScreen={onScreen}>Below are some of the skills I've picked up on my journey to become a full-stack developer. My core strengths currently are CSS, Javascript and React.</Styled.Body>
                </Styled.TextPanel>
                <Styled.CategoriesContainer>
                    {['All', 'Frontend', 'Backend', 'Tools'].map(value => (
                        <Styled.CategoryButton selected={selectedCategory === value} onClick={() => setSelectedCategory(value)} key={value} onScreen={onScreen}>{value}</Styled.CategoryButton>
                    ))}
                </Styled.CategoriesContainer>
                <Styled.ImagePanel>
                    {icons.filter(value => selectedCategory === 'All' || value.category === selectedCategory).map(value => (
                        <Styled.IconContainer key={value.label} onScreen={onScreen}>
                            <Styled.Icon
                                src={value.image}
                                alt={value.label}
                            />
                            <Styled.IconLabel>{value.label}</Styled.IconLabel>
                        </Styled.IconContainer>
                    ))}
                </Styled.ImagePanel>

            </Styled.SkillsInner>
        </Styled.Skills>
    )
};

export default Skills;
