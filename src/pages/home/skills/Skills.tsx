import React from "react";
import Title from "../../../components/title/Title";
import SkillBox from "./SkillBox";
import { techStacks } from "./mySkills";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <StyledSkills className="flex-center">
      <Title text="기술 스택" />
      <div className="skills-container flex-center">
        {techStacks.map((techStack) => (
          <SkillBox techStack={techStack} key={techStack.name} />
        ))}
      </div>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  flex-direction: column;
  margin: 5vw;

  .skills-container {
    flex-wrap: wrap;
    margin: 0 5vw;
  }

  @media ${responsive.tablet} {
    margin-bottom: 90px;
  }
`;

export default Skills;
