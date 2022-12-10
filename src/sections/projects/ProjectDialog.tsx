import Dialog from "@mui/material/Dialog";
import { projectDataType } from "./ProjectData";
import { responsive } from "../../styles/theme";
import styled from "styled-components";

const ProjectDialog: React.FC<{
  isDialogOn: boolean;
  turnOffDialog: () => void;
  selectedProject: projectDataType;
}> = ({ isDialogOn, turnOffDialog, selectedProject }) => {
  return (
    <StyledProjectDialog
      open={isDialogOn}
      onClose={turnOffDialog}
      maxWidth={false}
    >
      <div className="project-container">
        <iframe src={selectedProject.url} className="project-post"></iframe>
        <a href={selectedProject.url} target="_blank" className="pop-up">
          새 창에서 열기
        </a>
      </div>
    </StyledProjectDialog>
  );
};

const StyledProjectDialog = styled(Dialog)`
  .project-container {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
    width: 80vw;
    height: 88vh;
    padding: 20px;
    overflow-x: hidden;

    .project-post {
      width: 100%;
      height: 100%;
    }

    .pop-up {
      position: absolute;
      bottom: 25px;
      right: 50px;
      padding: 12.5px;
      background-color: #e4e4e4;
      opacity: 0.6;
      color: black;
      font-size: 15px;
      font-weight: 700;

      &:hover {
        opacity: 1;
        transition: 0.3s;
      }
    }
  }

  @media ${responsive.mobile} {
    .project-container {
      .pop-up {
        right: 40px;
        bottom: 40px;
        padding: 10px;
        font-size: 13px;
      }
    }
  }
`;

export default ProjectDialog;
