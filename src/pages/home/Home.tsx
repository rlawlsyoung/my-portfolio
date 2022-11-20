import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import bg from "../../assets/bg.jpg";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <div className="top flex-center">
        <p className="text colorBg">안녕하세요!</p>
        <p className="text colorBg">프론트엔드 개발자, 김진영입니다.</p>
        <p className="small-text colorBg">
          꾸준히 개발 공부를 하는 것을 좋아하고 내가 만든 서비스에 애정을 쏟는
          개발자입니다.
        </p>
      </div>
      <AboutMe />
      <Skills />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  .colorBg {
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
