import React from "react";
import Title from "../../../components/Title/Title";
import MyLink from "./MyLink";
import ContactList from "./ContactList";
import me from "../../../assets/me.jpg";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const AboutMe: React.FC = () => {
  const Links = [
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

  const contactLists = [
    {
      title: "📞 전화번호",
      text: "010-9985-8498",
    },
    {
      title: "📧 E-Mail",
      text: "jinyoung01099@gmail.com",
    },
  ];

  return (
    <StyledAboutMe className="flex-center">
      <Title text="자기소개" />
      <div className="container">
        <div className="profile-wrapper">
          <img src={me} alt="김진영 사진" className="my-photo" />
          {Links.map((link) => (
            <MyLink link={link} key={link.title} />
          ))}
        </div>
        <div className="info-wrapper">
          <p className="title">👨‍💻 나는 어떤 사람인가?</p>
          <ul className="lists">
            <li className="list">
              어떻게 해야 편의성과 접근성을 향상시킬 수 있는지 클라이언트 입장
              에서 항상 고민하고 생각하는 개발자 입니다.
            </li>
            <li className="list">
              새로운 기술 스택을 배우는 것에 대한 두려움이 없고, 항상 변화를
              받아들일 준비가 되어있습니다.
            </li>
            <li className="list">
              프로젝트 팀장 경험을 통해 기른 협업 능력 및 리더십을 가지고 있는
              개발자 입니다.
            </li>
            <li className="list">
              매일 성장하는 개발자가 되기 위해 꾸준히 공부하며 개발 블로그에 TIL
              및 개발 지식들을 정리하여 작성합니다.
            </li>
          </ul>
          <p className="title">📠 연락처</p>
          <ul className="lists">
            {contactLists.map((contact) => (
              <ContactList contact={contact} key={contact.title} />
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
      align-items: flex-start;
      width: 65vw;
      padding-left: 5vw;

      .title {
        padding: 7.5px;
        border-radius: 5px;
        margin-bottom: 30px;
        background-color: #fbf3db;
        font-size: 32px;
        font-weight: 700;
      }

      .sub-title {
        margin: 30px 0;
        font-size: 32px;
        font-weight: 700;
      }

      .lists {
        .list {
          display: flex;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }
  }

  @media ${responsive.tablet} {
    .container {
      flex-direction: column;
      align-items: center;
      /* margin: 2vw; */

      .profile-wrapper {
        width: 80vw;

        .my-photo {
        }
      }

      .info-wrapper {
        width: 80vw;
        padding-left: 0;
        margin-top: 40px;
        .title {
        }

        .sub-title {
        }

        .lists {
          .list {
          }
        }
      }
    }
  }
`;

export default AboutMe;
