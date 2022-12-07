import React from "react";
import styled from "styled-components";

const InfoList: React.FC<{
  info: { title: string; text: string };
}> = ({ info }) => {
  return (
    <StyledInfoList className="list">
      <p className="list-title">{info.title}</p> : {info.text}
    </StyledInfoList>
  );
};

const StyledInfoList = styled.li`
  .list-title {
    font-weight: 800;
  }
`;

export default InfoList;
