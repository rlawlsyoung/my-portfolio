import React, { useState, useCallback, useEffect } from "react";
import Title from "../../../components/title/Title";
import Filter from "./Filter";
import ProjectBox from "./ProjectBox";
import { portfolioDatas } from "./portfolioDatas";
import styled from "styled-components";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("전체");
  const [portfolios, setPortfolios] = useState(portfolioDatas);

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
    <StyledPortfolio className="flex-center">
      <Title text="포트폴리오" />
      <Filter filter={filter} handleOnClick={handleOnClick} />
      <div className="project-container">
        {portfolios.map((portfolioData) => (
          <ProjectBox portfolioData={portfolioData} key={portfolioData.title} />
        ))}
      </div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.div`
  flex-direction: column;
  margin: 5vw;

  .project-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export default Portfolio;
