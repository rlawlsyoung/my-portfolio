import React from "react";
import { responsive } from "../../styles/theme";
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
  top: 30px;
  margin-left: 30px;
  font-size: 74px;
  white-space: nowrap;
  cursor: pointer;

  .kr-name {
    margin-left: 5px;
    font-size: 18px;
  }

  @media ${responsive.mobile} {
    top: 35px;
    margin-left: 25px;
    font-size: 62px;
    .kr-name {
      font-size: 16px;
    }
  }
`;

export default Logo;
