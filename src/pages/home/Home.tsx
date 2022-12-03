import bg from "../../assets/bg.jpg";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome id="메인">
      <SlArrowDown className="arrow" size={48} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: url(${bg}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  color: white;

  .arrow {
    position: absolute;
    bottom: 50px;
    left: calc(50vw - 36px);
    transform: scaleX(1.5);
  }
`;

export default Home;
