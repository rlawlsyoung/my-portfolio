import React from "react";
import { Fade } from "react-awesome-reveal";
import { timelineData } from "./timelineData";
import Title from "../../../components/Title";
import TimeBox from "./TimeBox";
import styled from "styled-components";

const Timeline: React.FC = () => {
  return (
    <StyledTimeline id="Timeline">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Timeline" />
        <div className="timeline-container flex-center">
          {timelineData.map((timeData) => (
            <TimeBox timeData={timeData} />
          ))}
        </div>
      </Fade>
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
