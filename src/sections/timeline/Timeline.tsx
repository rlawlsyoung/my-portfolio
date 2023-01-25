import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import TimeBox from "./TimeBox";
import { timelineData } from "./timelineData";
import { responsive } from "../../styles/theme";

const Timeline: React.FC = () => {
  return (
    <StyledTimeline id="Timeline">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Timeline" />
        <div className="timeline-container flex-center">
          {timelineData.map((timeData) => (
            <TimeBox timeData={timeData} key={timeData.title} />
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

  @media ${responsive.desktop} {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    margin-bottom: 40px;

    .timeline-container {
      width: 100vw;
      padding: 20px;
    }
  }
`;

export default Timeline;
