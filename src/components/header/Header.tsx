import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const Header = () => {
  const menuList = [
    { title: "자기소개" },
    { title: "기술 스택" },
    { title: "프로젝트" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    window.scrollY < 5 && setScrollPosition(window.scrollY);
    window.scrollY > 3940 && setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    setScrollPosition(window.scrollY);
  }, []);

  return (
    <StyledHeader scrollPosition={scrollPosition}>
      <Link to="메인" spy={true} smooth={true} duration={500}>
        <h1 className="title">KJY</h1>
      </Link>
      <div className="menu-wrapper flex-center">
        {menuList.map((menu) => {
          return (
            <Link
              to={menu.title}
              spy={false}
              smooth={true}
              duration={500}
              key={menu.title}
            >
              <div className="menu-el">{menu.title}</div>
            </Link>
          );
        })}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ scrollPosition: number }>`
  .flex-center {
    display: flex;
    align-items: center;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  padding: 17.5px 0;
  box-shadow: ${(props) => props.scrollPosition && "0.5px 3px 5px -2px gray"};
  background-color: ${(props) =>
    props.scrollPosition ? "white" : "transparents"};
  color: ${(props) => (props.scrollPosition ? "black" : "white")};
  font-weight: 600;
  transition: background-color 0.3s, box-shadow 0.3s;

  .title {
    margin: 0 30px;
    font-family: "BhuTuka Expanded One";
    font-size: 38px;
    cursor: pointer;
  }

  .menu-el {
    margin: 0 30px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(1.075);
      transition: 0.3s;
    }
  }

  @media ${responsive.mobile} {
    .title {
      margin: 0 2vw;
      font-size: 30px;
    }

    .menu-el {
      margin: 0 2vw;
      font-size: 12px;
      white-space: nowrap;
    }
  }
`;

export default Header;
