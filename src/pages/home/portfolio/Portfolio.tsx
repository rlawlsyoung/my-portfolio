import React, { useState } from "react";
import Title from "../../../components/title/Title";
import ProjectBox from "./ProjectBox";
import styled from "styled-components";
import {
  mainGray,
  mainRed,
  lightRed,
  hoveredLightRed,
} from "../../../styles/theme";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("전체");

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  };

  return (
    <StyledPortfolio className="flex-center">
      <Title text="포트폴리오" />
      <div className="project-filter">
        <div
          id="전체"
          className={
            filter === "전체"
              ? "filter flex-center selected"
              : "filter flex-center"
          }
          onClick={handleOnClick}
        >
          전체
        </div>
        <div
          id="개인 프로젝트"
          className={
            filter === "개인 프로젝트"
              ? "filter flex-center selected"
              : "filter flex-center"
          }
          onClick={handleOnClick}
        >
          개인 프로젝트
        </div>
        <div
          id="팀 프로젝트"
          className={
            filter === "팀 프로젝트"
              ? "filter flex-center selected"
              : "filter flex-center"
          }
          onClick={handleOnClick}
        >
          팀 프로젝트
        </div>
        <div
          id="인턴십"
          className={
            filter === "인턴십"
              ? "filter flex-center selected"
              : "filter flex-center"
          }
          onClick={handleOnClick}
        >
          인턴십
        </div>
      </div>
      <div className="project-container">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  flex-direction: column;
  margin: 5vw;

  .project-filter {
    display: flex;
    border-radius: 5px;
    background-color: ${lightRed};

    .filter {
      padding: 15px 25px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;

      &:first-of-type {
        border-radius: 5px 0 0 5px;
      }

      &:last-of-type {
        border-radius: 0 5px 5px 0;
      }

      &:hover {
        background-color: ${hoveredLightRed};
        color: ${mainRed};
        transition: 0.2s;
      }
    }

    .selected {
      background-color: ${hoveredLightRed};
      color: ${mainRed};
    }
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Portfolio;
