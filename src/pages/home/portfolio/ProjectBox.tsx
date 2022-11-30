import React, { useCallback } from "react";
import Tag from "./Tag";
import portfolioDatasType from "./portfolioDatas";
import { mainGray, lightGray, responsive } from "../../../styles/theme";
import styled from "styled-components";

const ProjectBox: React.FC<{
  portfolioData: portfolioDatasType;
  setIsDialogOn: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPortfolio: React.Dispatch<
    React.SetStateAction<portfolioDatasType>
  >;
}> = ({ portfolioData, setIsDialogOn, setSelectedPortfolio }) => {
  const turnOnDialog = useCallback(() => {
    setIsDialogOn(true);
    setSelectedPortfolio(portfolioData);
  }, []);

  return (
    <StyledProjectBox isMobile={portfolioData.isMobile} onClick={turnOnDialog}>
      <div className="img-container flex-center">
        <img
          src={portfolioData.mainImg}
          alt={portfolioData.title}
          className="project-img"
        />
      </div>

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

const StyledProjectBox = styled.div<{ isMobile: boolean }>`
  flex-direction: column;
  width: 45%;
  margin: 2.5%;
  border: 1px solid ${mainGray};
  border-radius: 5px;
  box-shadow: 0 2px 2px -2px ${mainGray};
  font-weight: 500;
  cursor: pointer;

  .img-container {
    width: 100%;
    border-bottom: 1px solid #e4e4e4;
    border-radius: 5px 5px 0 0;
    background-color: ${lightGray};
    .project-img {
      width: ${(props) => !props.isMobile && "100%"};
      height: 19vw;
      border-radius: ${(props) => !props.isMobile && "5px 5px 0 0;"};
    }
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
      line-height: 18px;
    }
  }

  @media ${responsive.tablet} {
    width: 100%;
    .img-container {
      .project-img {
        height: 38vw;
      }
    }

    .project-info {
      margin: 10px;

      .project-title {
        font-size: 18px;
      }
      .project-subtitle {
        font-size: 15px;
      }
    }
  }
`;

export default ProjectBox;
