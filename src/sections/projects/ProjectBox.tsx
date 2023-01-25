import React, { useCallback } from "react";
import styled from "styled-components";
import { projectDataType } from "./projectData";
import { deepGray, lightGray, responsive } from "../../styles/theme";

interface ProjectBoxType {
  projectData: projectDataType;
  setIsDialogOn: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProject: React.Dispatch<React.SetStateAction<projectDataType>>;
}

const ProjectBox: React.FC<ProjectBoxType> = ({
  projectData,
  setIsDialogOn,
  setSelectedProject,
}) => {
  const openDialog = useCallback(() => {
    setSelectedProject(projectData);
    if (window.innerWidth < 1024) window.open(projectData.url, "_blank");
    else setIsDialogOn(true);
  }, []);

  return (
    <StyledProjectBox isMobile={projectData.isMobile} onClick={openDialog}>
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
  background-color: white;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: invert(0.0425);
    transition: 0.4s;
  }

  .img-container {
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    background-color: ${lightGray};

    .project-img {
      width: ${(props) => !props.isMobile && "100%"};
      height: 345px;
    }
  }

  .project-info {
    margin: 16px 8px;

    .project-title {
      font-size: 20px;
      font-weight: 700;
    }
    .project-subtitle {
      margin: 10px 0;
      color: ${deepGray};
      font-size: 14px;
      font-weight: 600;
    }

    .project-introduction {
      margin-top: 5px;
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media ${responsive.desktop} {
    .img-container {
      width: 100%;

      .project-img {
        width: ${(props) => (props.isMobile ? "27%" : "100%")};
        height: 100%;
      }
    }
  }

  @media ${responsive.mobile} {
    .project-info {
      .project-title {
        font-size: 18px;
      }
      .project-subtitle {
        margin: 7.5px 0;
        font-size: 12px;
      }

      .project-introduction {
        font-size: 12px;
      }
    }
  }
`;

export default ProjectBox;
