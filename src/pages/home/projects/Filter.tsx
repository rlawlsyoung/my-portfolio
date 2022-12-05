import React from "react";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const Filter: React.FC<{
  filter: string;
  handleOnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ filter, handleOnClick }) => {
  const filterLists = ["전체", "팀 프로젝트", "개인 프로젝트", "인턴십"];

  return (
    <StyledFilter>
      {filterLists.map((filterList) => (
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
      ))}
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 5px;

  .filter {
    padding: 0 20px 15px 20px;
    font-size: 24px;
    font-weight: 700;
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

  @media ${responsive.mobile} {
    .filter {
      padding: 12.5px 3vw;
      font-size: 3vw;
    }
  }
`;

export default Filter;
