import React from "react";
import styled from "styled-components";

const MyLink: React.FC<{
  link: {
    icon: JSX.Element;
    title: string;
    link: string;
  };
}> = ({ link }) => {
  return (
    <StyledMyLink className="flex-center">
      {link.icon}
      <a href={link.link} target="_blank" className="link">
        {link.title}
      </a>
    </StyledMyLink>
  );
};

const StyledMyLink = styled.div`
  margin: 5px;
  .link {
    margin-left: 5px;
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default MyLink;
