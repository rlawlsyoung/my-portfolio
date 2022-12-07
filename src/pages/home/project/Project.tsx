import React, { useState, useCallback, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../../../components/title/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import ProjectDialog from "./ProjectDialog";
import { projectDatas } from "./ProjectDatas";
import styled from "styled-components";

const Project: React.FC = () => {
  const [filter, setFilter] = useState("전체");
  const [projects, setProjects] = useState(projectDatas);
  const [isDialogOn, setIsDialogOn] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projectDatas[0]);

  const turnOffDialog = useCallback(() => setIsDialogOn(false), []);
  const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  }, []);

  useEffect(() => {
    setProjects(
      projectDatas.filter((project) => {
        return project.tags.includes(filter);
      })
    );
  }, [filter]);

  return (
    <StyledProject id="프로젝트">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.35}>
        <Title text="프로젝트" />
        <Filter filter={filter} handleOnClick={handleOnClick} />
        <div className="project-container">
          {projects.map((projectData) => (
            <ProjectBox
              projectData={projectData}
              key={projectData.title}
              setIsDialogOn={setIsDialogOn}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
        <ProjectDialog
          isDialogOn={isDialogOn}
          turnOffDialog={turnOffDialog}
          selectedProject={selectedProject}
        />
      </Fade>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw;
  padding-top: 120px;
  margin-top: -50px;

  .project-container {
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
  }
`;

export default Project;
