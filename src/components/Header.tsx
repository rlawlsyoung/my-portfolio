import { useEffect, useState, useCallback } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import Logo from "./Logo";
import MouseChanger from "./MouseChanger";
import { deepGray, responsive } from "../styles/theme";

const Header = () => {
  const menuList = ["About Me", "Timeline", "Skills", "Projects"];

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

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
          <Logo />
        </Link>
        <nav className="menu-wrapper flex-center">
          {menuList.map((menu) => {
            return (
              <div className="menu-el expansion">
                <Link
                  to={menu}
                  spy={false}
                  smooth={true}
                  duration={500}
                  key={menu}
                >
                  <MouseChanger>{menu}</MouseChanger>
                </Link>
              </div>
            );
          })}
        </nav>
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
  height: 64px;
  width: 100%;
  background-color: ${(props) =>
    props.scrollPosition ? "white" : "transparents"};
  color: ${(props) => (props.scrollPosition ? "black" : "white")};
  font-weight: 600;
  transition: background-color 0.3s;

  .header-container {
    display: flex;
    justify-content: space-between;
    width: 1024px;

    .menu-wrapper {
      margin-right: 20px;

      .menu-el {
        margin-left: 50px;
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
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
        margin-right: 0;
        box-shadow: 0 -4.5px 5px -5px ${deepGray};
        background-color: white;
        color: black;

        .menu-el {
          margin: 20px 2.5vw;
          font-size: 16px;
        }
      }
    }
  }

  @media ${responsive.mobile} {
    .header-container {
      .menu-wrapper {
        .menu-el {
          font-size: 14px;
        }
      }
    }
  }
`;

export default Header;
