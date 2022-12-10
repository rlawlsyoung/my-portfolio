import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { responsive } from "../styles/theme";
import styled from "styled-components";

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
      x: mousePosition.x + 5,
      y: mousePosition.y + 5,
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
    width: 40px;
    height: 40px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
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
