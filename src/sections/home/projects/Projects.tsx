import React, { useState, useCallback, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../../../components/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import ProjectDialog from "./ProjectDialog";
import { projectDatas } from "./ProjectDatas";
import { responsive } from "../../../styles/theme";
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
        <div className="projects-container flex-center">
          <Filter filter={filter} handleOnClick={handleOnClick} />
          {projects.map((projectData) => (
            <ProjectBox
              projectData={projectData}
              key={projectData.title}
              setIsDialogOn={setIsDialogOn}
              selectedProject={selectedProject}
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
  justify-content: center;
  padding-top: 110px;
  padding-right: 20px;
  margin-top: -64px;
  margin-bottom: 80px;

  .projects-container {
    flex-wrap: wrap;
    width: 748px;
  }

  @media ${responsive.desktop} {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    margin-bottom: 40px;

    .projects-container {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default Projects;
