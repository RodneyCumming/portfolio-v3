import React, { useState, useRef } from 'react';
import * as Styled from './Skills.styled.js'
import HtmlSVG from "../images/icons/html5.svg";
import CssSVG from "../images/icons/css3.svg";
import JavascriptSVG from "../images/icons/js.svg";
import ReactSVG from "../images/icons/react.svg";
import NodeSVG from "../images/icons/nodejs.svg";
import MongoSVG from "../images/icons/mongodb.svg";
import ExpressSVG from "../images/icons/express.svg";
import GitSVG from "../images/icons/git.svg";
import VScodeSVG from "../images/icons/vscode.svg";
import GatsbySVG from "../images/icons/gatsby.svg";
import DigitalOceanSVG from "../images/icons/digital-ocean.svg";
import StoryblokSVG from "../images/icons/storyblok.svg";
import HerokuSVG from "../images/icons/heroku.svg";
import GraphQlSVG from "../images/icons/graphql.svg";
import SketchSVG from "../images/icons/sketch.svg";
import JestSVG from "../images/icons/jest.svg";
import BuildKiteSVG from "../images/icons/buildkite.svg";
import ContentfulSVG from "../images/icons/contentful.svg";
import prettierSVG from "../images/icons/prettier.svg";
import StyledComponentsSVG from "../images/icons/styled-components.svg";
import useOnScreen from '../hooks/useOnScreen';

const icons = [
    {
        label: 'HTML5',
        image: HtmlSVG,
        category: 'Frontend'
    },
    {
        label: 'CSS3',
        image: CssSVG,
        category: 'Frontend'
    },
    {
        label: 'Javascript',
        image: JavascriptSVG,
        category: 'Frontend'
    },
    {
        label: 'ReactJS',
        image: ReactSVG,
        category: 'Frontend'
    },
    {
        label: 'NodeJS',
        image: NodeSVG,
        category: 'Backend'
    },
    {
        label: 'MongoDB',
        image: MongoSVG,
        category: 'Backend'
    },
    {
        label: 'Express',
        image: ExpressSVG,
        category: 'Backend'
    },
    {
        label: 'git',
        image: GitSVG,
        category: 'Tools'
    },
    {
        label: 'VScode',
        image: VScodeSVG,
        category: 'Tools'
    },
    {
        label: 'Gatsby',
        image: GatsbySVG,
        category: 'Frontend'
    },
    {
        label: 'Digital Ocean',
        image: DigitalOceanSVG,
        category: 'Backend'
    },
    {
        label: 'StoryBlok',
        image: StoryblokSVG,
        category: 'Frontend'
    },
    {
        label: 'Heroku',
        image: HerokuSVG,
        category: 'Backend'
    },
    {
        label: 'GraphQl',
        image: GraphQlSVG,
        category: 'Backend'
    },
    {
        label: 'Sketch',
        image: SketchSVG,
        category: 'Tools'
    },
    {
        label: 'BuildKite',
        image: BuildKiteSVG,
        category: 'Backend'
    },
    {
        label: 'Jest',
        image: JestSVG,
        category: 'Tools'
    },
    {
        label: 'Styled Components',
        image: StyledComponentsSVG,
        category: 'Frontend'
    },
    {
        label: 'Contentful',
        image: ContentfulSVG,
        category: 'Frontend'
    },
    {
        label: 'Prettier',
        image: prettierSVG,
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
                    <Styled.Body onScreen={onScreen}>Below are some of the skills I've picked up on my journey. My core strengths currently are CSS, Javascript and React.</Styled.Body>
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
