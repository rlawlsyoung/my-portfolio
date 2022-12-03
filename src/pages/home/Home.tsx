import { Typewriter } from "react-simple-typewriter";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome id="메인">
      <div className="top flex-center" />
      <AboutMe />
      <Skills />
      <Projects />
    </StyledHome>
  );
};

const StyledHome = styled.div`
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
