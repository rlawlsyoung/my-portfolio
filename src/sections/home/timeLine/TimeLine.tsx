import React from "react";
import Title from "../../../components/Title";
import TimeBox from "./TimeBox";
import { timelineData } from "./timelineData";
import styled from "styled-components";

const Timeline: React.FC = () => {
  return (
    <StyledTimeline id="Timeline">
      <Title text="Timeline" />
      <div className="timeline-container flex-center">
        {timelineData.map((timeData) => (
          <TimeBox timeData={timeData} />
        ))}
      </div>
    </StyledTimeline>
  );
};

const StyledTimeline = styled.div`
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

export default Timeline;
