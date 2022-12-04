import React, { useState, useCallback, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../../../components/title/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import ProjectDialog from "./ProjectDialog";
import { projectDatas } from "./ProjectDatas";
import styled from "styled-components";

const Projects: React.FC = () => {
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
    <StyledProjects id="Projects">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Projects" />
        <Filter filter={filter} handleOnClick={handleOnClick} />
        <div className="projects-container">
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
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw;
  padding-top: 120px;
  margin-top: -70px;

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
  }
`;

export default Projects;