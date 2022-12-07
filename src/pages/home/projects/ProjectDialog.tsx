import Dialog from "@mui/material/Dialog";
import { projectDatasType } from "./ProjectDatas";
import { responsive } from "../../../styles/theme";
import styled from "styled-components";

const ProjectDialog: React.FC<{
  isDialogOn: boolean;
  turnOffDialog: () => void;
  selectedProject: projectDatasType;
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
    width: 1200px;
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
      right: 70px;
      padding: 15px;
      background-color: #e4e4e4;
      opacity: 0.6;
      color: black;
      font-size: 18px;
      font-weight: 700;

      &:hover {
        opacity: 1;
        transition: 0.3s;
      }
    }
  }

  @media ${responsive.desktop} {
    .project-container {
      width: 80vw;

      .pop-up {
        right: 50px;
        padding: 12.5px;
        font-size: 16px;
      }
    }
  }

  @media ${responsive.mobile} {
    .project-container {
      .pop-up {
        right: 40px;
        bottom: 40px;
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;

export default ProjectDialog;
