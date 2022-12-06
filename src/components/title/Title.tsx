import React from "react";
import { responsive } from "../../styles/theme";
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
  width: 300px;
  font-size: 46px;
  font-weight: 700;

  .bar {
    width: 250px;
    height: 3.5px;
    margin-top: 5px;
    background-color: black;
  }

  @media ${responsive.desktop} {
    width: auto;

    .bar {
      width: auto;
      margin-bottom: 30px;
    }
  }

  @media ${responsive.mobile} {
    font-size: 36px;
  }
`;

export default Title;
