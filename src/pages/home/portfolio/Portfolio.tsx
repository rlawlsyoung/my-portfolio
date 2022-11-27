import React, { useState, useCallback, useEffect } from "react";
import Title from "../../../components/title/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import PortfolioDialog from "./PortfolioDialog";
import { portfolioDatas } from "./portfolioDatas";
import styled from "styled-components";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("전체");
  const [portfolios, setPortfolios] = useState(portfolioDatas);
  const [isDialogOn, setIsDialogOn] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolioDatas[0]);

  const turnOffDialog = useCallback(() => setIsDialogOn(false), []);
  const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  }, []);

  useEffect(() => {
    setPortfolios(
      portfolioDatas.filter((portfolio) => {
        return portfolio.tags.includes(filter);
      })
    );
  }, [filter]);

  return (
    <StyledPortfolio className="flex-center" id="포트폴리오">
      <Title text="포트폴리오" />
      <Filter filter={filter} handleOnClick={handleOnClick} />
      <div className="project-container">
        {portfolios.map((portfolioData) => (
          <ProjectBox
            portfolioData={portfolioData}
            key={portfolioData.title}
            setIsDialogOn={setIsDialogOn}
            setSelectedPortfolio={setSelectedPortfolio}
          />
        ))}
      </div>
      <PortfolioDialog
        isDialogOn={isDialogOn}
        turnOffDialog={turnOffDialog}
        selectedPortfolio={selectedPortfolio}
      />
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  flex-direction: column;
  margin: 5vw;
  padding-top: 100px;
  margin-top: -50px;

  .project-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export default Portfolio;
