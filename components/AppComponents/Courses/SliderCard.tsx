import { Button, ButtonBase } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import * as faker from "faker";
import { motion } from "framer-motion";
import { CourseCard } from "../../../@types";

const Root = styled(motion.div)<{ active: boolean }>`
  height: 425px;
  width: 95%;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  transform: ${(props) => (props.active ? `scale(1)` : "scale(0.75)")};
  filter: ${(props) => (props.active ? "grayscale(0)" : "grayscale(1)")};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  transition: all 0.5s ease;

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 12px 12px 0px 0px;
  width: 100%;
  height: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InfoTitle = styled.div``;

const InfoSubTitle = styled.div``;

const InfoButton = styled(motion(ButtonBase))`
  color: ${(props) => props.theme.palette.primary.contrastText} !important;
  background-color: ${(props) => props.theme.palette.primary.main} !important;
  padding: 12px !important;
  border-radius: 4px !important;
  font-size: 1.1rem;
  font-weight: 600;
`;

interface Props extends CourseCard {
  active?: boolean;
}

const SliderCard = ({ active, imageURL, subTitle, title }: Props) => {
  return (
    <Root active={active}>
      <Container>
        <Image src={imageURL} />
        <InfoContainer>
          <InfoTitle>{title}</InfoTitle>
          <InfoSubTitle>Curso de {subTitle}</InfoSubTitle>
          <InfoButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Saiba mais
          </InfoButton>
        </InfoContainer>
      </Container>
    </Root>
  );
};

export default SliderCard;
