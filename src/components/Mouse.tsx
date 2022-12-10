import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Mouse: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
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
    width: 45px;
    height: 45px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    border-radius: 50%;
    z-index: 300000000;
  }
`;

export default Mouse;
