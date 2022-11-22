import Typewriter from "typewriter-effect";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <div className="top flex-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .typeString("<p class='text color-bg'>안녕하세요!</p>")
              .pauseFor(10)
              .typeString(
                "<p class='text color-bg'>프론트엔드 개발자, 김진영입니다.</p>"
              );
          }}
        />
        <p className="small-text color-bg flex-center">
          꾸준히 개발 지식을 쌓는 것을 좋아하고 내가 만든 서비스에 애정을 쏟는
          개발자입니다.
        </p>
      </div>
      <AboutMe />
      <Skills />
      <Portfolio />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  .Typewriter__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Typewriter__cursor {
    display: none;
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
      opacity: 0;
      animation: fadeIn 3s;
      animation-delay: 4.5s;
      animation-fill-mode: forwards;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }

  @media ${responsive.tablet} {
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
