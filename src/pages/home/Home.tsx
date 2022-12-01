import { Typewriter } from "react-simple-typewriter";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Project from "./project/Project";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome id="메인">
      <div className="top flex-center">
        <p className="text color-bg">안녕하세요!</p>
        <p className="text color-bg">프론트엔드 개발자, 김진영입니다.</p>

        <p className="small-text color-bg">
          저는{" "}
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
        </p>
      </div>
      <AboutMe />
      <Skills />
      <Project />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  .styles-module_blinkingCursor__yugAC {
    margin-left: -5px;
    margin-right: 5px;
  }

  .color-bg {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top {
    display: flex;
    flex-direction: column;
    background: url(${bg}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    color: white;

    .text {
      margin: 10px 0;
      font-size: 54px;
      font-weight: 700;
    }

    .small-text {
      margin: 20px 0;
      font-size: 26px;
      font-weight: 700;
    }
  }

  @media ${responsive.tablet} {
    .styles-module_blinkingCursor__yugAC {
      margin-left: -4px;
      margin-right: 4px;
    }
    .top {
      .text {
        font-size: 6vw;
      }

      .small-text {
        font-size: 2.75vw;
      }
    }
  }
`;

export default Home;
