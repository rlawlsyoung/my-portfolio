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
          dd
          {/* {techStacks.map((techStack) => (
            <SkillBox techStack={techStack} key={techStack.name} />
          ))} */}
        </div>
      </Fade>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 0;
  padding-top: 120px;
  margin-top: -70px;

  .skills-container {
    flex-wrap: wrap;
    width: 900px;
  }

  @media ${responsive.tablet} {
    margin-bottom: 90px;
    min-height: 0;
  }
`;

export default Skills;
