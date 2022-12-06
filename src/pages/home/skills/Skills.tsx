import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../../../components/title/Title";
import SkillBox from "./SkillBox";
import { techStacks } from "./techStacks";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <StyledSkills id="Skills">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Skills" />
        <div className="skills-container">
          {techStacks.map((techStack) => (
            <SkillBox
              title={techStack.name}
              contents={techStack.text}
              key={techStack.name}
            />
          ))}
        </div>
      </Fade>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  padding-top: 160px;
  margin-top: -70px;
  margin-bottom: 125px;

  .skills-container {
    flex-wrap: wrap;
    width: 900px;
  }

  @media ${responsive.desktop} {
    flex-direction: column;
    align-items: center;

    .skills-container {
      width: 100%;
      padding: 20px;
    }
  }

  @media ${responsive.tablet} {
    margin-bottom: 90px;
    min-height: 0;
  }
`;

export default Skills;
