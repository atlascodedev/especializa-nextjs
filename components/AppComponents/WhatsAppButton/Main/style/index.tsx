import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { SvgIcon } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import React from "react";
import useReferenceSize from "../../../../../hooks/useReferenceSize";

const Root = styled(motion.div)`
  position: fixed;
  bottom: 10%;
  left: 0;
  width: auto;
  color: ${(props) => props.theme.palette.primary.contrastText};
  background: ${(props) => props.theme.palette.primary.light};
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`;

const Container = styled(motion.div)`
  display: flex;
  height: 100%;
  padding: 10px 0px;
`;

const Title = styled(motion.div)`
  font-style: normal;
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 30px;
  display: flex;
  padding: 0px 20px;
  align-items: center;
  text-align: center;
  white-space: nowrap;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0px 15px 0px 15px;

  .MuiSvgIcon-root {
    fill: ${(props) => props.theme.palette.primary.contrastText};
    font-size: 3rem;
  }
`;

interface WhatsAppButtonLayoutProps {}

const WhatsAppButtonLayout = ({}: WhatsAppButtonLayoutProps) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <AnimateSharedLayout>
      <Root
        layout
        transition={{ type: "keyframes" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Container layout transition={{ type: "just" }}>
          <AnimatePresence>
            {hovered && (
              <Title
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1] }}
                exit={{ opacity: 0 }}
              >
                Fale conosco
              </Title>
            )}
          </AnimatePresence>
          <IconContainer layout transition={{ type: "just" }}>
            <SvgIcon component={WhatsApp} />
          </IconContainer>
        </Container>
      </Root>
    </AnimateSharedLayout>
  );
};

export default WhatsAppButtonLayout;
