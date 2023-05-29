import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import Title from "../../components/Title";
import InfoList from "./InfoList";
import MyLink from "../../components/MyLink";
import me from "../../assets/me.jpg";
import github from "../../assets/github.jpg";
import velog from "../../assets/velog.png";
import { responsive } from "../../styles/theme";

export const links = [
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

const AboutMe: React.FC = () => {
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
    "새로운 기술에 대한 두려움이 없는",
  ];

  return (
    <StyledAboutMe id="About Me">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="About Me" />
        <div className="about-me-container">
          <img src={me} alt="김진영 사진" className="my-photo" />
          <p className="name">김진영</p>
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
  padding-top: 110px;
  padding-right: 20px;
  margin-top: -63px;
  margin-bottom: 80px;

  .about-me-container {
    display: flex;
    flex-direction: column;
    width: 748px;
    font-size: 16px;

    .my-photo {
      width: 180px;
      height: 180px;
      border-radius: 100%;
      margin-bottom: 30px;
    }

    .name {
      font-size: 30px;
      font-weight: 700;
    }

    .position {
      margin: 10px 0 30px 0;
      font-weight: 700;
    }

    .adv {
      margin-bottom: 30px;
      font-weight: 500;

      .styles-module_blinkingCursor__yugAC {
        margin-left: -5px;
        margin-right: 5px;
      }
    }

    .list {
      display: flex;
      margin-bottom: 17.5px;
      font-weight: 500;
    }

    .link-wrapper {
      display: flex;
      margin-top: 12.5px;
    }
  }

  @media ${responsive.desktop} {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    margin-bottom: 40px;

    .about-me-container {
      align-items: center;
      width: 100%;
      margin-top: 20px;
    }
  }

  @media ${responsive.mobile} {
    .about-me-container {
      font-size: 14px;

      .name {
        font-size: 26px;
      }
    }
  }
`;

export default AboutMe;
