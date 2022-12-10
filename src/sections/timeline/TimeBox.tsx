import React from "react";
import { timelineDataType } from "./timelineData";
import { responsive, lightGray, deepGray } from "../../styles/theme";
import styled from "styled-components";

const TimeBox: React.FC<{ timeData: timelineDataType }> = ({ timeData }) => {
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
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 15px;

  .icon-container {
    border: 1px solid black;

    .icon {
      width: 55px;
      height: 55px;
      margin: 25px;
    }
  }

  .text-container {
    height: 107px;
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
    .icon-container {
      .icon {
        width: 35px;
        height: 35px;
        margin: 12.5px;
      }
    }

    .text-container {
      height: 62px;
      padding: 10px 6px;

      .title {
        font-size: 12.5px;
      }

      .period {
        margin: 5px 0;
        font-size: 9.5px;
      }

      .introduce {
        font-size: 10px;
      }
    }
  }
`;

export default TimeBox;
