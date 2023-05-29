import { Link } from "react-scroll";
import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";

import MouseChanger from "../../components/MouseChanger";
import { responsive } from "../../styles/theme";
import bg from "../../assets/bg.jpg";

const Home = () => {
  return (
    <StyledHome id="Home">
      <Link to="About Me" spy={true} smooth={true} duration={500}>
        <MouseChanger>
          <SlArrowDown className="arrow" size={48} />
        </MouseChanger>
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
      left: calc(50vw - 24px);
    }
  }
`;

export default Home;
