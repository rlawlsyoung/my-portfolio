import React from "react";
import Tag from "./Tag";
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
      <div className="project-info">
        <h3 className="project-title">🎶 FLOrida</h3>
        <p className="project-subtitle">팀 프로젝트 (6인)</p>
        <div className="tags">
          <p className="techs">주요 기술 : </p>
          <Tag text="TypeScript" />
          <Tag text="React.js" />
        </div>
      </div>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  flex-direction: column;
  width: 40vw;
  margin: 10px;
  border: 1px solid ${mainGray};
  border-radius: 5px;
  cursor: pointer;

  .project-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .project-info {
    margin: 10px;

    .project-title {
      font-size: 22px;
      font-weight: 600;
    }
    .project-subtitle {
      margin: 7.5px 0;
      color: ${mainGray};
      font-weight: 500;
    }
    .tags {
      display: flex;
    }
  }
`;

export default ProjectBox;
