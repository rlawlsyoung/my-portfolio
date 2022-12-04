import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import Title from "../../../components/title/Title";
import InfoList from "./InfoList";
import me from "../../../assets/me.jpg";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  const links = [
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
  ];

  const infos = [
    {
      title: "전화번호",
      text: "010-9985-8498",
    },
    {
      title: "E-Mail",
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
          <div className="adv">
            <Typewriter
              words={[
                "꾸준히 개발 지식을 쌓는 것을 좋아하는",
                "제가 만든 서비스에 애정을 쏟는",
                "새로운 기술을 받아들이는 것에 대한 두려움이 없는",
              ]}
              loop={true}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
            개발자입니다.
          </div>

          {infos.map((info) => (
            <InfoList info={info} key={info.title} />
          ))}
        </div>
      </Fade>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 0;
  padding-top: 120px;
  margin-top: -70px;

  .about-me-container {
    display: flex;
    flex-direction: column;
    width: 900px;

    .my-photo {
      width: 200px;
      border-radius: 100px;
      margin-bottom: 30px;
    }

    .name {
      margin-bottom: 30px;
      font-size: 32px;
      font-weight: 700;
    }

    .adv {
      margin-bottom: 30px;
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
  }

  @media ${responsive.tablet} {
    .container {
      flex-direction: column;
      align-items: center;

      .profile-wrapper {
        width: 80vw;

        .name {
          font-size: 20px;
        }
      }

      .info-wrapper {
        width: 80vw;
        padding-left: 0;
        margin-top: 40px;
      }
    }
  }

  @media ${responsive.mobile} {
    .lists {
      .list {
        font-size: 3.75vw;
        line-height: 5vw;
      }
    }
  }
`;

export default AboutMe;
