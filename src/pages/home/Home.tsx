import React from "react";
import styled from "styled-components";
import bg from "../../assets/bg.jpg";

const Home = () => {
  return (
    <StyledHome>
      <div className="top flex-center">
        <p className="name">김진영</p>
      </div>
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
    background: url(${bg}) no-repeat;
    background-size: cover;
    height: 100vh;
    color: white;
  }
`;

export default Home;
