import React from "react";
import Title from "../../../components/Title/Title";
import SkillBox from "./SkillBox";
import { techStacks } from "./mySkills";
import styled from "styled-components";

const Skills: React.FC = () => {
  return (
    <StyledSkills className="flex-center">
      <Title text="기술 스택" />
      <div className="skills-container flex-center">
        {techStacks.map((techStack) => (
          <SkillBox techStack={techStack} />
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
`;

export default Skills;
