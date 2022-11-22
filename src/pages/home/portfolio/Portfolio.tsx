import React from "react";
import Title from "../../../components/title/Title";
import ProjectBox from "./ProjectBox";
import styled from "styled-components";

const Portfolio: React.FC = () => {
  return (
    <StyledPortfolio className="flex-center">
      <Title text="포트폴리오" />
      <ProjectBox />
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  flex-direction: column;
  margin: 5vw;
`;

export default Portfolio;
