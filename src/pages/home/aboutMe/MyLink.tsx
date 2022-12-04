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
      <img src={link.icon} alt={link.title} className="icon" />
    </StyledMyLink>
  );
};

const StyledMyLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;

export default MyLink;
