import React from "react";
import Title from "../../../components/title/Title";
import Subtitle from "../../../components/subtitle/Subtitle";
import MyLink from "./MyLink";
import InfoList from "./InfoList";
import me from "../../../assets/me.jpg";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  const myAdvantages = [
    "어떻게 해야 편의성과 접근성을 향상시킬 수 있는지 클라이언트 입장에서 항상 고민하고 생각하는 개발자 입니다.",
    "새로운 기술 스택을 배우는 것에 대한 두려움이 없고, 항상 변화를 받아들일 준비가 되어있습니다.",
    "프로젝트 팀장 경험을 통해 기른 협업 능력 및 리더십을 가지고 있는 개발자 입니다.",
    "매일 성장하는 개발자가 되기 위해 꾸준히 공부하며 개발 블로그에 TIL 및 개발 지식들을 정리하여 작성합니다.",
  ];

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
      title: "📞 전화번호",
      text: "010-9985-8498",
    },
    {
      title: "📧 E-Mail",
      text: "jinyoung01099@gmail.com",
    },
    {
      title: "🎂 생년월일",
      text: "1999/08/26",
    },
    {
      title: "🏠 주소",
      text: "경기도 안양시 동안구",
    },
  ];

  return (
    <StyledAboutMe className="flex-center" id="자기소개">
      <Title text="자기소개" />
      <div className="container">
        <div className="profile-wrapper">
          <img src={me} alt="김진영 사진" className="my-photo" />
          <p className="name flex-center">김진영 (Kim Jin Young)</p>
          {links.map((link) => (
            <MyLink link={link} key={link.title} />
          ))}
        </div>
        <div className="info-wrapper">
          <Subtitle text="👨‍💻 저는 이런 개발자입니다!" />
          <ul className="lists">
            {myAdvantages.map((adv) => (
              <li className="list" key={adv}>
                {adv}
              </li>
            ))}
          </ul>
          <Subtitle text="🙎‍♂️ 개인 정보   " />
          <ul className="lists">
            {infos.map((info) => (
              <InfoList info={info} key={info.title} />
            ))}
          </ul>
        </div>
      </div>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  flex-direction: column;
  margin: 5vw;
  padding-top: 100px;
  margin-top: -50px;

  .container {
    display: flex;

    .profile-wrapper {
      flex-direction: column;
      align-items: flex-start;
      width: 25vw;

      .my-photo {
        width: 100%;
      }

      .name {
        margin: 15px 0;
        font-size: 22px;
        font-weight: 700;
      }
    }

    .info-wrapper {
      align-items: flex-start;
      width: 65vw;
      padding-left: 5vw;

      .lists {
        margin-bottom: 60px;
        .list {
          display: flex;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 500;
        }
      }
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

        .lists {
          .list {
            /* font-size: 2.35vw; */
            /* line-height: 3.65vw; */
          }
        }
      }
    }
  }

  @media ${responsive.mobile} {
    .container {
      .info-wrapper {
        .lists {
          .list {
            font-size: 3.75vw;
            line-height: 5vw;
          }
        }
      }
    }
  }
`;

export default AboutMe;
