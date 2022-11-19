import React from "react";
import styled from "styled-components";

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.h2`
  margin-bottom: 5vw;
  font-size: 38px;
  font-weight: 700;
`;

export default Title;
