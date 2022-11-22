import React from "react";
import styled from "styled-components";

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return <StyledSubtitle>{text}</StyledSubtitle>;
};

const StyledSubtitle = styled.h2`
  padding: 7.5px;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #fbf3db;
  font-size: 32px;
  font-weight: 700;
`;

export default Subtitle;