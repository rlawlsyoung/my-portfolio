import React from "react";
import styled from "styled-components";

const InfoList: React.FC<{
  info: { title: string; text: string };
}> = ({ info }) => {
  return (
    <StyledInfoList className="list">
      <li className="list-title">{info.title}</li> : {info.text}
    </StyledInfoList>
  );
};

const StyledInfoList = styled.div`
  .list-title {
    font-weight: 800;
  }
`;

export default InfoList;
