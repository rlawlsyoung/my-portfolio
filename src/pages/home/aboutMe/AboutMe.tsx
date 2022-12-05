import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import Title from "../../../components/title/Title";
import InfoList from "./InfoList";
import me from "../../../assets/me.jpg";
import github from "../../../assets/github.png";
import velog from "../../../assets/velog.png";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";
import MyLink from "./MyLink";

const AboutMe: React.FC = () => {
  const links = [
    {
      icon: github,
      title: "GitHub",
      link: "https://github.com/rlawlsyoung",
    },
    {
      icon: velog,
      title: "velog",
      link: "https://velog.io/@jinyoung985",
    },
  ];

  const infos = [
    {
      title: "전화번호",
      text: "010-9985-8498",
    },
    {
      title: "Email",
      text: "jinyoung01099@gmail.com",
    },
    {
      title: "생년월일",
      text: "1999/08/26",
    },
    {
      title: "주소",
      text: "경기도 안양시 동안구",
    },
  ];

  const myAdvantages = [
    "꾸준히 개발 지식을 쌓는 것을 좋아하는",
    "제가 만든 서비스에 애정을 쏟는",
    "새로운 기술을 받아들이는 것에 대한 두려움이 없는",
  ];

  return (
    <StyledAboutMe id="About Me">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="About Me" />
        <div className="about-me-container">
          <img src={me} alt="김진영 사진" className="my-photo" />
          <p className="name">김진영 (金辰營)</p>
          <p className="position">Front-End Developer</p>
          <p className="adv">
            <Typewriter
              words={myAdvantages}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
            개발자입니다.
          </p>
          {infos.map((info) => (
            <InfoList info={info} key={info.title} />
          ))}
          <div className="link-wrapper">
            {links.map((link) => (
              <MyLink link={link} key={link.title} />
            ))}
          </div>
        </div>
      </Fade>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  padding-top: 160px;
  margin-top: -70px;
  margin-bottom: 125px;

  .about-me-container {
    display: flex;
    flex-direction: column;
    width: 900px;

    .my-photo {
      width: 220px;
      height: 220px;
      border-radius: 100%;
      margin-bottom: 35px;
    }

    .name {
      font-size: 36px;
      font-weight: 700;
    }

    .position {
      margin: 5px 0 30px 0;
      font-size: 18px;
      font-weight: 700;
    }

    .adv {
      margin-bottom: 35px;
      font-size: 18px;
      font-weight: 500;

      .styles-module_blinkingCursor__yugAC {
        margin-left: -5px;
        margin-right: 5px;
      }
    }

    .list {
      display: flex;
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
    }

    .link-wrapper {
      display: flex;
      margin-top: 15px;
    }
  }

  @media ${responsive.tablet} {
  }

  @media ${responsive.mobile} {
  }
`;

export default AboutMe;
