import React, { useCallback } from "react";
import { projectDatasType } from "./ProjectDatas";
import { deepGray, lightGray, responsive } from "../../../styles/theme";
import styled from "styled-components";

const ProjectBox: React.FC<{
  projectData: projectDatasType;
  setIsDialogOn: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<projectDatasType>>;
}> = ({ projectData, setIsDialogOn, setSelectedProject }) => {
  const turnOnDialog = useCallback(() => {
    setIsDialogOn(true);
    setSelectedProject(projectData);
  }, []);

  return (
    <StyledProjectBox isMobile={projectData.isMobile} onClick={turnOnDialog}>
      <div className="img-container flex-center">
        <img
          src={projectData.mainImg}
          alt={projectData.title}
          className="project-img"
        />
      </div>

      <div className="project-info">
        <h3 className="project-title">{projectData.title}</h3>
        <p className="project-subtitle">{projectData.subTitle}</p>

        <p className="project-introduction">{projectData.introduction}</p>
      </div>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div<{ isMobile: boolean }>`
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: 500;
  cursor: pointer;

  .img-container {
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    background-color: ${lightGray};
    .project-img {
      width: ${(props) => !props.isMobile && "100%"};
      height: 430px;
    }
  }

  .project-info {
    margin: 20px 10px;

    .project-title {
      font-size: 24px;
      font-weight: 700;
    }
    .project-subtitle {
      margin: 10px 0;
      color: ${deepGray};
      font-weight: 600;
    }

    .project-introduction {
      margin-top: 5px;
      line-height: 20px;
    }
  }

  @media ${responsive.desktop} {
    .img-container {
      width: 90vw;
      .project-img {
        width: ${(props) => (props.isMobile ? "27%" : "100%")};
        height: 100%;
      }
    }
  }

  @media ${responsive.mobile} {
    .project-info {
      .project-title {
        font-size: 20px;
      }
      .project-subtitle {
        margin: 7.5px 0;
        font-size: 13.5px;
      }

      .project-introduction {
        margin-top: 5px;
        font-size: 13.5px;
      }
    }
  }
`;

export default ProjectBox;
