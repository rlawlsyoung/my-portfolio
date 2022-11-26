import Dialog from "@mui/material/Dialog";
import portfolioDatasType from "./portfolioDatas";
import { responsive } from "../../../styles/theme";
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
      </div>
    </StyledPortfolioDialog>
  );
};

const StyledPortfolioDialog = styled(Dialog)`
  .portfolio-container {
    display: flex;
    flex-direction: column;
    width: 1080px;
    height: 85vh;
    padding: 20px 20px;
    font-size: 20px;

    .portfolio-post {
      width: 100%;
      height: 100%;
    }
  }

  @media ${responsive.desktop} {
    .portfolio-container {
      width: 90vw;

      .portfolio-post {
        width: 90vw;
        height: 100%;
      }
    }
  }
`;

export default PortfolioDialog;
