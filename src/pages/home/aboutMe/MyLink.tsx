import React from "react";
import { lightRed } from "../../../styles/theme";
import styled from "styled-components";

const MyLink: React.FC<{
  link: {
    icon: JSX.Element;
    title: string;
    link: string;
  };
}> = ({ link }) => {
  return (
    <StyledMyLink className="flex-center" href={link.link} target="_blank">
      {link.icon}
      <p className="text">{link.title}</p>
    </StyledMyLink>
  );
};

const StyledMyLink = styled.a`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${lightRed};
  color: black;

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: inset 0px 0px 0px #6098ff;
    display: block;
    -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
    transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
  }

  &:hover::before {
    box-shadow: inset 300px 0px 0px #6098ff;
  }

  .text {
    margin-left: 5px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default MyLink;
