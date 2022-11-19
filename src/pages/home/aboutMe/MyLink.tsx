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
    <StyledMyLink className="flex-center" href={link.link} target="_blank">
      <button className="btn flex-center">
        {link.icon}
        <p className="text">{link.title}</p>
      </button>
    </StyledMyLink>
  );
};

const StyledMyLink = styled.a`
  width: 100%;
  margin: 5px;
  .btn {
    width: 100%;
    .text {
      margin-left: 5px;
      font-size: 18px;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;

export default MyLink;
