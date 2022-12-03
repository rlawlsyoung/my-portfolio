import bg from "../../assets/bg.jpg";
import { Link } from "react-scroll";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome id="Home">
      <Link to="About Me" spy={true} smooth={true} duration={500}>
        <SlArrowDown className="arrow" size={48} />
      </Link>
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
    cursor: pointer;
  }
`;

export default Home;
