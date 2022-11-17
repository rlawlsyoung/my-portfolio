import { FaReact } from "react-icons/fa";

import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="title">KJY</h1>
      <div className="menu-wrapper flex-center">
        <div className="menu-el">About me</div>
        <div className="menu-el">Skills</div>
        <div className="menu-el">Projects</div>
        <div className="menu-el">dd</div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
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
  padding: 10px;
  font-family: "BhuTuka Expanded One";
  color: white;

  .title {
    font-size: 38px;
    font-weight: 800;
  }

  .menu-el {
    margin: 0 30px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Header;
