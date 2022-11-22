import React from "react";
import { mainRed } from "../../styles/theme";
import styled from "styled-components";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <StyledTitle>
      {text}
      <div className="bar" />
    </StyledTitle>
  );
};

const StyledTitle = styled.h2`
  margin-bottom: 5vw;
  font-size: 38px;
  font-weight: 700;

  .bar {
    width: 100%;
    height: 5px;
    margin-top: 5px;
    background-color: ${mainRed};
  }
`;

export default Title;
