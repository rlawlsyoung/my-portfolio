import React from "react";
import styled from "styled-components";
import { timelineDataType } from "./Timeline";
import { responsive, lightGray, deepGray } from "../../styles/theme";

interface TimeBoxType {
  timeData: timelineDataType;
}

const TimeBox: React.FC<TimeBoxType> = ({ timeData }) => {
  return (
    <StyledTimeBox>
      <div className="icon-container flex-center">
        <img src={timeData.icon} alt={timeData.title} className="icon" />
      </div>
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
  align-items: center;
  height: 107px;
  width: 100%;
  margin-bottom: 15px;

  .icon-container {
    height: 100%;
    width: 107px;
    min-width: 107px;
    border: 1px solid black;

    .icon {
      width: 55px;
      height: 55px;
      margin: 25px;
    }
  }

  .text-container {
    height: 100%;
    width: 100%;
    padding: 18px;
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

    .introduce {
      font-size: 15px;
    }
  }

  @media ${responsive.mobile} {
    .text-container {
      padding: 15px 8px;

      .title {
        font-size: 13px;
      }

      .period {
        margin: 8px 0;
        font-size: 9.5px;
      }

      .introduce {
        font-size: 11px;
      }
    }
  }
`;

export default TimeBox;
