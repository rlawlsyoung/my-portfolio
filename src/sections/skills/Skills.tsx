import React, { useEffect } from "react";
import { firestore } from "../../firebase";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import SkillBox from "./SkillBox";
import { techStacks } from "./techStacks";
import { responsive } from "../../styles/theme";

const Skills: React.FC = () => {
  useEffect(() => {
    const skills = firestore.collection("skills");
    console.log(skills);

    skills
      .doc("krPZ2r1uFTTeF5Aft5nv")
      .get()
      .then((doc) => {
        console.log(doc.data());
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
