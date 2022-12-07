import React from "react";
import { lightRed, hoveredLightRed, responsive } from "../../../styles/theme";
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

  &:hover {
    background-color: ${hoveredLightRed};
    transition: 0.3s;
  }

  .text {
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
  }

  @media ${responsive.mobile} {
    .text {
      font-size: 14px;
    }
  } ;
`;

export default MyLink;
