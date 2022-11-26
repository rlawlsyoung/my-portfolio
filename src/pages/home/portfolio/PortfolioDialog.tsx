import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

const PortfolioDialog: React.FC<{
  isDialogOn: boolean;
  turnOffDialog: () => void;
}> = ({ isDialogOn, turnOffDialog }) => {
  console.log(turnOffDialog);

  return (
    <StyledPortfolioDialog open={isDialogOn} onClose={turnOffDialog}>
      <div className="portfolio-container">
        <h2>제목제목</h2>
      </div>
    </StyledPortfolioDialog>
  );
};

const StyledPortfolioDialog = styled(Dialog)`
  .portfolio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 420px;
    padding: 20px;

    h2 {
      width: 80vw;
    }
  }
`;

export default PortfolioDialog;
