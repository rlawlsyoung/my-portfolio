import React from "react";
import Title from "../../../components/Title/Title";
import MyLink from "./MyLink";
import me from "../../../assets/me.jpg";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutMe: React.FC = () => {
  interface link {
    icon: JSX.Element;
    title: string;
    link: string;
  }

  const Links: link[] = [
    {
      icon: <AiFillGithub size="32" />,
      title: "GitHub",
      link: "https://github.com/rlawlsyoung",
    },
    {
      icon: <AiFillHome size="32" />,
      title: "개인 블로그",
      link: "https://velog.io/@jinyoung985",
    },
    {
      icon: <FaFacebook size="32" />,
      title: "FaceBook",
      link: "https://www.facebook.com/profile.php?id=100004956165568",
    },
  ];

  return (
    <StyledAboutMe className="flex-center">
      <Title text="자기소개" />
      <div className="container flex-center">
        <div className="profile-wrapper flex-center">
          <img src={me} alt="김진영 사진" className="my-photo" />
          {Links.map((link) => (
            <MyLink link={link} />
          ))}
        </div>
        <div className="info-wrapper">d</div>
      </div>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  flex-direction: column;

  margin: 5vw;

  .container {
    display: flex;

    .profile-wrapper {
      flex-direction: column;
      align-items: flex-start;
      width: 25vw;

      .my-photo {
        width: 100%;
        margin-bottom: 20px;
      }
    }

    .info-wrapper {
      width: 65vw;
    }
  }
`;

export default AboutMe;
