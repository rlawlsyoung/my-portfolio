import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import styled from "styled-components";

import { cursorVariantAtom } from "../atom";
import { responsive } from "../styles/theme";

const Mouse: React.FC = () => {
  const cursorVariant = useRecoilValue(cursorVariantAtom);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      window.innerWidth > 1024 &&
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
    };
    window.addEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x + 16,
      y: mousePosition.y + 16,
    },
    expanded: {
      x: mousePosition.x + 16,
      y: mousePosition.y + 16,
      height: 60,
      width: 60,
    },
  };

  return (
    <StyledMouse>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </StyledMouse>
  );
};

const StyledMouse = styled.div`
  .cursor {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${responsive.desktop} {
    .cursor {
      display: none;
    }
  }
`;

export default Mouse;
