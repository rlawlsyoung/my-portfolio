import React from "react";
import { responsive } from "../styles/theme";
import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <StyledContactList>
      金辰營 <p className="kr-name">김진영</p>
    </StyledContactList>
  );
};

const StyledContactList = styled.h1`
  display: flex;
  position: absolute;
  top: 23px;
  margin-left: 20px;
  font-size: 60px;
  white-space: nowrap;
  cursor: pointer;

  .kr-name {
    margin-left: 5px;
    font-size: 18px;
  }
`;

export default Logo;
