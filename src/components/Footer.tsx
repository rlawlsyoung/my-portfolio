import React from "react";
import styled from "styled-components";
import MyLink from "./MyLink";
import { links } from "../sections/aboutMe/AboutMe";
import bg from "../assets/bg.jpg";
import { responsive } from "../styles/theme";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="link-wrapper">
        {links.map((link) => (
          <MyLink link={link} key={link.title} />
        ))}
      </div>
      <p>© {new Date().getFullYear()}. Kim Jin Young. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
  background: url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .link-wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  p {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }

  @media ${responsive.tablet} {
    margin-bottom: 58px;
  }

  @media ${responsive.mobile} {
    margin-bottom: 54px;
  }
`;

export default Footer;
