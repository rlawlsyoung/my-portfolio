import React from "react";
import styled from "styled-components";

import MouseChanger from "../../components/MouseChanger";
import { responsive } from "../../styles/theme";

interface FilterType {
  filter: string;
  handleOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Filter: React.FC<FilterType> = ({ filter, handleOnClick }) => {
  const filterLists = ["전체", "팀 프로젝트", "개인 프로젝트", "인턴십"];

  return (
    <StyledFilter>
      {filterLists.map((filterList) => (
        <MouseChanger>
          <div className="filter flex-center" key={filterList}>
            <div
              className={
                filter === filterList ? "selected-underline" : "underline"
              }
              id={filterList}
              onClick={handleOnClick}
            >
              {filterList}
            </div>
          </div>
        </MouseChanger>
      ))}
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  margin-bottom: 50px;
  border-radius: 5px;

  .filter {
    padding: 0 20px 15px 20px;
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;

    .underline {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0px;
        height: 2px;
        margin: 5px 0 0;
        transition: all 0.2s ease-in-out;
        transition-duration: 0.2s;
        opacity: 0;
        background-color: black;
      }

      &:hover:after {
        width: 100%;
        opacity: 1;
      }
    }

    .selected-underline {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 2px;
        margin: 5px 0 0;
        background-color: black;
      }
    }
  }

  @media ${responsive.desktop} {
    .filter {
      margin-top: 20px;
    }
  }

  @media ${responsive.tablet} {
    .filter {
      padding: 12.5px 3vw;
      font-size: 18px;
    }
  }

  @media ${responsive.mobile} {
    .filter {
      padding: 12.5px 8px;
      font-size: 15px;
    }
  }
`;

export default Filter;
