import React, { useState, useCallback, useEffect } from "react";
import { firestore } from "../../firebase";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Title from "../../components/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import ProjectDialog from "./ProjectDialog";
import { responsive } from "../../styles/theme";

export interface projectDataType {
  mainImg: string;
  isMobile: boolean;
  title: string;
  tags: string[];
  subTitle: string;
  mainTechs: string[];
  introduction: string;
  url: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("전체");
  const [projects, setProjects] = useState<projectDataType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<projectDataType[]>(
    []
  );
  const [isDialogOn, setIsDialogOn] = useState(false);
  const [selectedProject, setSelectedProject] = useState<projectDataType>({
    mainImg: "",
    isMobile: false,
    title: "",
    tags: [],
    subTitle: "",
    mainTechs: [],
    introduction: "",
    url: "",
  });

  const turnOffDialog = useCallback(() => setIsDialogOn(false), []);
  const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) => {
        return project.tags.includes(filter);
      })
    );
  }, [filter]);

  useEffect(() => {
    const projects = firestore.collection("projects");
    projects.get().then((docs) => {
      const projectsData: projectDataType[] = [];

      docs.docs.map((doc) => {
        const data: projectDataType | any = doc.data();
        projectsData.push(data);
      });
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setSelectedProject(projectsData[0]);
    });
  }, []);

  return (
    <StyledProjects id="Projects">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
        <Title text="Projects" />
        <div className="projects-container flex-center">
          <Filter filter={filter} handleOnClick={handleOnClick} />
          {filteredProjects.map((projectData) => (
            <ProjectBox
              key={projectData.title}
              projectData={projectData}
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
