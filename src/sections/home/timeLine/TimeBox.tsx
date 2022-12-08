import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { timelineDataType } from "./timelineData";
import { responsive, lightGray, deepGray } from "../../../styles/theme";
import styled from "styled-components";

const TimeBox: React.FC<{ timeData: timelineDataType }> = ({ timeData }) => {
  console.log(typeof timeData.icon);

  return (
    <StyledTimeBox>
      <div className="icon-container flex-center">{timeData.icon}</div>
      <div className="text-container">
        <p className="title">{timeData.title}</p>
        <p className="period">{timeData.period}</p>
        <p className="introduce">{timeData.introduce}</p>
      </div>
    </StyledTimeBox>
  );
};

const StyledTimeBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12.5px;

  .icon-container {
    border: 1px solid black;

    .icon {
      width: 55px;
      height: 55px;
      margin: 25px;
    }
  }

  .text-container {
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid black;
    background-color: ${lightGray};

    .title {
      font-size: 18px;
      font-weight: 700;
    }

    .period {
      margin: 10px 0;
      color: ${deepGray};
      font-size: 14px;
    }
  }
`;

export default TimeBox;
