import React, { useState, useRef } from "react";
import * as Styled from "./Skills.styled.js";
import skillsIcons from "./skills.data";
import useOnScreen from "Hooks/useOnScreen";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  return (
    <Styled.Skills>
      <Styled.SkillsInner ref={ref}>
        <Styled.TextPanel>
          <Styled.Heading
            onClick={() => console.log(selectedCategory)}
            onScreen={onScreen}
          >
            TECHNOLOGY
          </Styled.Heading>
          <Styled.Body onScreen={onScreen}>
            Below are some of the techologies I've learnt to use. My core
            strengths are CSS, Javascript and React.
          </Styled.Body>
        </Styled.TextPanel>
        <Styled.CategoriesContainer>
          {["All", "Frontend", "Backend", "Tools"].map(value => (
            <Styled.CategoryButton
              selected={selectedCategory === value}
              onClick={() => setSelectedCategory(value)}
              key={value}
              onScreen={onScreen}
            >
              {value}
            </Styled.CategoryButton>
          ))}
        </Styled.CategoriesContainer>
        <Styled.ImagePanel>
          {skillsIcons
            .filter(
              value =>
                selectedCategory === "All" ||
                value.category === selectedCategory
            )
            .map(value => (
              <Styled.IconContainer key={value.label} onScreen={onScreen}>
                <Styled.Icon src={value.image} alt={value.label} />
                <Styled.IconLabel>{value.label}</Styled.IconLabel>
              </Styled.IconContainer>
            ))}
        </Styled.ImagePanel>
      </Styled.SkillsInner>
    </Styled.Skills>
  );
};

export default Skills;
