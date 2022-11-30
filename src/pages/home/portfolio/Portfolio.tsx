import React, { useState, useCallback, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
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
    <StyledPortfolio id="포트폴리오">
      <Fade cascade={true} delay={350} triggerOnce={true} damping={0.4}>
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
      </Fade>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vw;
  padding-top: 120px;
  margin-top: -50px;

  .project-container {
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
  }
`;

export default Portfolio;
