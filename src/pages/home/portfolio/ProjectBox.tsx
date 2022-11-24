import React from "react";
import Tag from "./Tag";
import portfolioDatasType from "./portfolioDatas";
import { mainGray } from "../../../styles/theme";
import styled from "styled-components";

const ProjectBox: React.FC<{ portfolioData: portfolioDatasType }> = ({
  portfolioData,
}) => {
  return (
    <StyledProjectBox>
      <img
        src={portfolioData.mainImg}
        alt={portfolioData.title}
        className="project-img"
      />
      <div className="project-info">
        <h3 className="project-title">{portfolioData.title}</h3>
        <p className="project-subtitle">{portfolioData.subTitle}</p>
        <div className="tags">
          {portfolioData.mainTechs.map((tech) => (
            <Tag text={tech} key={tech} />
          ))}
        </div>
        <p className="project-introduction">{portfolioData.introduction}</p>
      </div>
    </StyledProjectBox>
  );
};

const StyledProjectBox = styled.div`
  flex-direction: column;
  width: 45%;
  margin: 2.5%;
  border: 1px solid ${mainGray};
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;

  .project-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  .project-info {
    margin: 10px;

    .project-title {
      font-size: 22px;
      font-weight: 700;
    }
    .project-subtitle {
      margin: 7.5px 0;
      color: ${mainGray};
      font-weight: 600;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
    }

    .project-introduction {
      margin-top: 5px;
      font-size: 14px;
    }
  }
`;

export default ProjectBox;
