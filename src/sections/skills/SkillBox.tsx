import React, { useCallback, useState, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { lightGray, responsive } from "../../styles/theme";
import styled from "styled-components";

const SkillBox: React.FC<{
  title: string;
  contents: string;
}> = ({ title, contents }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  const handleButtonClick = useCallback(() => {
    if (parentRef.current!.clientHeight === 0) {
      parentRef.current!.style.height = `${childRef.current!.clientHeight}px`;
      parentRef.current!.style.marginTop = "15px";
    } else {
      parentRef.current!.style.height = "0";
      parentRef.current!.style.marginTop = "0";
    }
    setIsOpened(!isOpened);
  }, [isOpened]);

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonIcon =
    parentRefHeight === "0px" ? (
      <SlArrowDown size={24} />
    ) : (
      <SlArrowUp size={24} />
    );

  return (
    <StyledSkillBox onClick={handleButtonClick}>
      <div className="header">
        <p className="title">{title}</p>
        <button className="button">{buttonIcon}</button>
      </div>
      <div className="text-wrapper" ref={parentRef}>
        <p className="text" ref={childRef}>
          {contents}
        </p>
      </div>
    </StyledSkillBox>
  );
};

const StyledSkillBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-bottom: 12.5px;
  border: 1px solid black;
  background-color: ${lightGray};
  cursor: pointer;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 26px;
    font-size: 22.5px;
    font-weight: 700;

    .button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .text-wrapper {
    height: 0;
    width: 100%;
    overflow: hidden;
    transition: height 0.35s ease, margin-top 0.35s ease;

    .text {
      font-size: 14.5px;
      line-height: 20px;
    }
  }

  @media ${responsive.tablet} {
    padding: 15px;

    .header {
      font-size: 20px;
    }

    .text-wrapper {
      .text {
        font-size: 13px;
      }
    }
  }
`;

export default SkillBox;
