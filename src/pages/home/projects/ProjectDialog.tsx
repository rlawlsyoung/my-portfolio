import Dialog from "@mui/material/Dialog";
import { projectDatasType } from "./ProjectDatas";
import {
  responsive,
  mainGray,
  mainRed,
  lightRed,
  hoveredLightRed,
} from "../../../styles/theme";
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
        <div className="pop-up">
          포트폴리오를 새 창에서 보고싶다면?{" "}
          <a href={selectedProject.url} target="_blank" className="link">
            새 창에서 띄우기
          </a>
        </div>
      </div>
    </StyledProjectDialog>
  );
};

const StyledProjectDialog = styled(Dialog)`
  .project-container {
    display: flex;
    flex-direction: column;
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
      display: flex;
      align-items: center;
      padding-top: 20px;
      color: ${mainGray};
      font-weight: 700;

      .link {
        padding: 5px 8px;
        margin-left: 5px;
        border-radius: 3px;
        background-color: ${lightRed};
        color: ${mainRed};

        &:hover {
          background-color: ${hoveredLightRed};
          transition: 0.25s;
        }
      }
    }
  }

  @media ${responsive.desktop} {
    .project-container {
      width: 80vw;
    }
  }
`;

export default ProjectDialog;
