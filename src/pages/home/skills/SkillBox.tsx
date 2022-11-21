import React from "react";
import { mainGray, lightGray, mainRed, lightRed } from "../../../styles/theme";
import styled from "styled-components";

const SkillBox: React.FC<{
  techStack: { icon: string; name: string };
}> = ({ techStack }) => {
  return (
    <StyledSkillBox className="flex-center">
      <img src={techStack.icon} alt="TypeScript" className="icon" />
      <p className="tech-name">{techStack.name}</p>
    </StyledSkillBox>
  );
};

const StyledSkillBox = styled.div`
  margin: 20px;
  background-color: ${lightGray};
  box-shadow: 3px 3px 3px ${mainGray};

  .icon {
    height: 100px;
    width: 100px;
  }

  .tech-name {
    margin: 0 30px;
    font-size: 24px;
    font-weight: 700;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

export default SkillBox;