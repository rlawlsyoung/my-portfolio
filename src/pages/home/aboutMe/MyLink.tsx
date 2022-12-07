import React from "react";
import styled from "styled-components";

const MyLink: React.FC<{
  link: {
    icon: string;
    title: string;
    link: string;
  };
}> = ({ link }) => {
  return (
    <StyledMyLink href={link.link} target="_blank">
      <img src={link.icon} alt={link.title} className="icon expansion" />
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
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export default MyLink;
