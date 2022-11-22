import React from "react";
import { mainGray } from "../../../styles/theme";
import styled from "styled-components";

const ProjectBox: React.FC = () => {
  return (
    <StyledProjectBox>
      <img
        src="https://velog.velcdn.com/images/jinyoung985/post/c9c41a3c-d588-4093-aada-a54bb42945d9/image.gif"
        alt="FLOrida 프로젝트"
        className="project-img"
      />
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  width: 30vw;
  border: 1px solid ${mainGray};
  border-radius: 5px;
  .project-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

export default ProjectBox;
