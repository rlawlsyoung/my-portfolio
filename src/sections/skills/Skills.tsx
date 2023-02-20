import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import firebase from "firebase/compat";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import SkillBox from "./SkillBox";
import { responsive } from "../../styles/theme";

interface techStacksType {
  name: string;
  text: string;
}

const Skills: React.FC = () => {
  const [techStacks, setTechStacks] = useState<techStacksType[]>([]);

  useEffect(() => {
    const skills = firestore.collection("skills");
    skills.get().then((docs) => {
      const techStackData: techStacksType[] = [];

      docs.docs.map((doc) => {
        const data: techStacksType | any = doc.data();
        techStackData.push(data);
      });
      setTechStacks(techStackData);
    });
  }, []);

  return (
    <StyledSkills id="Skills">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Skills" />
        <div className="skills-container">
          {techStacks.map((techStack) => (
            <SkillBox
              title={techStack.name}
              contents={techStack.text}
              key={techStack.name}
            />
          ))}
        </div>
      </Fade>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 110px;
  padding-right: 20px;
  margin-top: -64px;
  margin-bottom: 80px;

  .skills-container {
    flex-wrap: wrap;
    width: 748px;
  }

  @media ${responsive.desktop} {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    margin-bottom: 40px;

    .skills-container {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default Skills;
