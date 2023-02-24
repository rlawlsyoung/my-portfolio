import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import TimeBox from "./TimeBox";
import { responsive } from "../../styles/theme";

export interface timelineDataType {
  icon: string;
  title: string;
  period: string;
  introduce: string;
}
const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<timelineDataType[]>([]);

  useEffect(() => {
    const timelineCollection = firestore.collection("timeline");
    timelineCollection.get().then((docs) => {
      const timelineData: timelineDataType[] = [];

      docs.docs.map((doc) => {
        const data: timelineDataType | any = doc.data();
        timelineData.push(data);
      });
      setTimeline(timelineData);
    });
  }, []);

  return (
    <StyledTimeline id="Timeline">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Timeline" />
        <div className="timeline-container flex-center">
          {timeline.map((timeData) => (
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
