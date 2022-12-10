import bg from "../../assets/bg.jpg";
import { Link } from "react-scroll";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";
import { responsive } from "../../styles/theme";

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
  background-position: center center;
  height: 100vh;

  .arrow {
    position: absolute;
    bottom: 50px;
    left: calc(50vw - 32.4px);
    color: white;
    transform: scaleX(1.35);
    cursor: pointer;
  }

  @media ${responsive.tablet} {
    .arrow {
      bottom: 75px;
    }
  }
`;

export default Home;
