import bg from "../../assets/bg.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <div className="top flex-center">
        <p className="name colorBg">김진영</p>
      </div>
      <div className="ignore">드래그 테스트용</div>
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
    background: url(${bg}) no-repeat;
    background-size: cover;
    height: 100vh;
    color: white;

    .name {
      font-size: 54px;
      font-weight: 700;
    }
  }

  .ignore {
    margin: 400px;
  }
`;

export default Home;
