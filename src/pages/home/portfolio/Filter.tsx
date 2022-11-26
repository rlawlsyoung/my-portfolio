import React from "react";
import {
  mainRed,
  lightRed,
  hoveredLightRed,
  responsive,
} from "../../../styles/theme";
import styled from "styled-components";

const Filter: React.FC<{
  filter: string;
  handleOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ filter, handleOnClick }) => {
  const filterLists = ["전체", "팀 프로젝트", "개인 프로젝트", "인턴십"];

  return (
    <StyledFilter>
      {filterLists.map((filterList) => (
        <div
          id={filterList}
          className={
            filter === filterList
              ? "filter flex-center selected"
              : "filter flex-center"
          }
          onClick={handleOnClick}
          key={filterList}
        >
          {filterList}
        </div>
      ))}
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: ${lightRed};

  .filter {
    padding: 15px 20px;
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

  @media ${responsive.mobile} {
    .filter {
      padding: 2vw 3vw;
      font-size: 3vw;
    }
  }
`;

export default Filter;
