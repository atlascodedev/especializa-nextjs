import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  z-index: 50;
`;

const CircleImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

interface Props {
  visible: boolean;
}

const Circle: React.FC<Props> = ({ children, visible }) => {
  return (
    <Container
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }}
      transition={{
        type: "spring",
        duration: 1.5,
      }}
    >
      <CircleImage src="/images/Circle.svg" />
      {children}
    </Container>
  );
};

export default Circle;
