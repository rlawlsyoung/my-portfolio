import Dialog from "@mui/material/Dialog";
import { portfolioDatasType } from "./portfolioDatas";
import {
  responsive,
  mainGray,
  mainRed,
  lightRed,
  hoveredLightRed,
} from "../../../styles/theme";
import styled from "styled-components";

const PortfolioDialog: React.FC<{
  isDialogOn: boolean;
  turnOffDialog: () => void;
  selectedPortfolio: portfolioDatasType;
}> = ({ isDialogOn, turnOffDialog, selectedPortfolio }) => {
  return (
    <StyledPortfolioDialog
      open={isDialogOn}
      onClose={turnOffDialog}
      maxWidth={false}
    >
      <div className="portfolio-container">
        <iframe src={selectedPortfolio.url} className="portfolio-post"></iframe>
        <div className="pop-up">
          포트폴리오를 새 창에서 보고싶다면?{" "}
          <a href={selectedPortfolio.url} target="_blank" className="link">
            새 창에서 띄우기
          </a>
        </div>
      </div>
    </StyledPortfolioDialog>
  );
};

const StyledPortfolioDialog = styled(Dialog)`
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 1140px;
    height: 88vh;
    padding: 20px;
    overflow-x: hidden;

    .portfolio-post {
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
    .portfolio-container {
      width: 80vw;
    }
  }
`;

export default PortfolioDialog;
