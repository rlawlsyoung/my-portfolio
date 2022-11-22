import React from "react";
import Title from "../../../components/title/Title";
import Subtitle from "../../../components/subtitle/Subtitle";
import ProjectBox from "./ProjectBox";
import styled from "styled-components";

const Portfolio: React.FC = () => {
  return (
    <StyledPortfolio className="flex-center">
      <Title text="포트폴리오" />
      <div className="project-container flex-center">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  flex-direction: column;
  margin: 5vw;

  .project-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Portfolio;
