import React from "react";
import MyLink from "../../pages/home/aboutMe/MyLink";
import { links } from "../../pages/home/aboutMe/AboutMe";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="link-wrapper">
        {links.map((link) => (
          <MyLink link={link} key={link.title} />
        ))}
      </div>
      <p>© 2022. Kim Jin Young. All rights reserved.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 175px;
  background: url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .link-wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  @media ${responsive.tablet} {
    margin-bottom: 58px;
  }

  @media ${responsive.mobile} {
    margin-bottom: 54px;
    p {
      font-size: 14px;
    }
  }
`;

export default Footer;
