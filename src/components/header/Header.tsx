import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Header = () => {
  const menuList = ["About Me", "Skills", "Projects", "Timeline"];

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    window.scrollY < 5 && setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <StyledHeader scrollPosition={scrollPosition}>
      <div className="header-container">
        <Link to="Home" spy={true} smooth={true} duration={500}>
          <h1 className="title">
            金辰營 <p className="kr-name">김진영</p>
          </h1>
        </Link>
        <div className="menu-wrapper flex-center">
          {menuList.map((menu) => {
            return (
              <Link
                to={menu}
                spy={false}
                smooth={true}
                duration={500}
                key={menu}
              >
                <div className="menu-el expansion">{menu}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ scrollPosition: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  width: 100%;
  background-color: ${(props) =>
    props.scrollPosition ? "white" : "transparents"};
  color: ${(props) => (props.scrollPosition ? "black" : "white")};
  font-weight: 600;
  transition: background-color 0.3s;

  .header-container {
    display: flex;
    justify-content: space-between;
    width: 1200px;

    .title {
      display: flex;
      position: absolute;
      top: 30px;
      margin-left: 30px;
      font-size: 74px;
      white-space: nowrap;
      cursor: pointer;

      .kr-name {
        margin-left: 5px;
        font-size: 18px;
      }
    }

    .menu-wrapper {
      .menu-el {
        margin: 0 30px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  @media ${responsive.desktop} {
    .header-container {
      width: 100vw;
    }
  }

  @media ${responsive.tablet} {
    .header-container {
      .menu-wrapper {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        color: black;
        background-color: white;
        .menu-el {
          margin: 20px 2vw;
          font-size: 18px;
          white-space: nowrap;
        }
      }
    }
  }
`;

export default Header;
