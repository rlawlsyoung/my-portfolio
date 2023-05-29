import React from "react";
import styled from "styled-components";

import MouseChanger from "./MouseChanger";

interface MyLinkType {
  link: {
    icon: string;
    title: string;
    link: string;
  };
}

const MyLink: React.FC<MyLinkType> = ({ link }) => {
  return (
    <StyledMyLink href={link.link} target="_blank">
      <MouseChanger>
        <img src={link.icon} alt={link.title} className="icon expansion" />
      </MouseChanger>
    </StyledMyLink>
  );
};

const StyledMyLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
`;

export default MyLink;
