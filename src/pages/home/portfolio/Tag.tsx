import React from "react";
import { mainRed, lightRed } from "../../../styles/theme";
import styled from "styled-components";

const Tag: React.FC<{ text: string }> = ({ text }) => {
  return <StyledTag>{text}</StyledTag>;
};

const StyledTag = styled.div`
  height: 18px;
  border-radius: 2.5px;
  padding: 3px;
  margin: 0 4px 4px 0;
  background-color: ${lightRed};
  color: ${mainRed};
  font-size: 13px;
  font-weight: 400;
`;

export default Tag;
