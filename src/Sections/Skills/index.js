import React, { useState, useRef } from 'react';
import * as Styled from './Skills.styled.js'
import HtmlSVG from "Images/icons/html5.svg";
import CssSVG from "Images/icons/css3.svg";
import JavascriptSVG from "Images/icons/js.svg";
import ReactSVG from "Images/icons/react.svg";
import NodeSVG from "Images/icons/nodejs.svg";
import MongoSVG from "Images/icons/mongodb.svg";
import ExpressSVG from "Images/icons/express.svg";
import GitSVG from "Images/icons/git.svg";
import VScodeSVG from "Images/icons/vscode.svg";
import GatsbySVG from "Images/icons/gatsby.svg";
import DigitalOceanSVG from "Images/icons/digital-ocean.svg";
import StoryblokSVG from "Images/icons/storyblok.svg";
import HerokuSVG from "Images/icons/heroku.svg";
import GraphQlSVG from "Images/icons/graphql.svg";
import SketchSVG from "Images/icons/sketch.svg";
import JestSVG from "Images/icons/jest.svg";
import BuildKiteSVG from "Images/icons/buildkite.svg";
import ContentfulSVG from "Images/icons/contentful.svg";
import prettierSVG from "Images/icons/prettier.svg";
import StyledComponentsSVG from "Images/icons/styled-components.svg";
import useOnScreen from 'Hooks/useOnScreen';

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
            <Styled.SkillsInner ref={ref}>
                <Styled.TextPanel >
                    <Styled.Heading onClick={() => console.log(selectedCategory)} onScreen={onScreen}>TECHNOLOGY</Styled.Heading>
                    <Styled.Body onScreen={onScreen}>Below are some of the techologies I've learnt to use. My core strengths are CSS, Javascript and React.</Styled.Body>
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
