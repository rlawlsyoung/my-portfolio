import React from "react";
import Title from "../../../components/Title";
import TimeBox from "./TimeBox";
import styled from "styled-components";

const TimeLine: React.FC = () => {
  return (
    <StyledTimeLine id="Timeline">
      <Title text="Timeline" />
      <div className="timeline-container flex-center">
        <TimeBox />
        <TimeBox />
        <TimeBox />
      </div>
    </StyledTimeLine>
  );
};

const StyledTimeLine = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 110px;
  padding-right: 20px;
  margin-top: -64px;
  margin-bottom: 80px;

  .timeline-container {
    display: flex;
    flex-direction: column;
    width: 748px;
  }
`;

export default TimeLine;
