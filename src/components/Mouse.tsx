import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { responsive } from "../styles/theme";

const Mouse: React.FC = () => {
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
  };

  return (
    <StyledMouse>
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </StyledMouse>
  );
};

const StyledMouse = styled.div`
  .cursor {
    width: 30px;
    height: 30px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
  }

  &:div:hover ~ .cursor {
    width: 500px;
  }

  @media ${responsive.desktop} {
    .cursor {
      display: none;
    }
  }
`;

export default Mouse;
