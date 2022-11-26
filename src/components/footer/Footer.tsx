import React from "react";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p className="thanks">감사합니다!</p>
      <p>© 2022. Kim Jin Young. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 220px;
  background: url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .thanks {
    margin-bottom: 30px;
    font-size: 42px;
    font-weight: 700;
  }

  p {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  @media ${responsive.mobile} {
    p {
      font-size: 14px;
    }
  }
`;

export default Footer;
