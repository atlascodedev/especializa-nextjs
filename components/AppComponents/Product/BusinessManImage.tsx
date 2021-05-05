import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  width: auto;
  height: 50vw;
  z-index: 100;
  position: relative;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  transform: rotateY(180deg);
`;

interface Props {
  visible: boolean;
}

const BusinessManImage = ({ visible }: Props) => {
  return (
    <Container
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={{
        visible: { x: 0 },
        hidden: { x: "-100%" },
      }}
      transition={{ delay: 0.7, duration: 0.75, type: "spring" }}
    >
      <Image src="https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fvideo-upgrade-3.webp?alt=media" />
    </Container>
  );
};

export default BusinessManImage;
