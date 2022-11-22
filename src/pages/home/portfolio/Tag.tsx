import React from "react";
import { mainRed, lightRed } from "../../../styles/theme";
import styled from "styled-components";

const Tag: React.FC<{ text: string }> = ({ text }) => {
  return <StyledTag>{text}</StyledTag>;
};

const StyledTag = styled.div`
  border-radius: 2.5px;
  padding: 3px;
  margin: 0 2px;
  background-color: ${lightRed};
  color: ${mainRed};
  font-size: 13px;
`;

export default Tag;
