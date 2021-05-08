import { Button, ButtonBase } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import * as faker from "faker";
import { motion } from "framer-motion";
import { CourseCollection } from "../../../@types";
import Link from "next/link";
import convertToSlug from "../../../helper/convertToSlug";

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
    max-width: 400px;
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

type CourseCard = Pick<
  CourseCollection,
  "courseArea" | "courseImage" | "courseName" | "slug" | "uuid" | "courseLevel"
>;

interface Props extends CourseCard {
  active?: boolean;
}

const SliderCard = ({
  active,
  courseArea,
  courseImage,
  courseLevel,
  courseName,
  slug,
  uuid,
}: Props) => {
  return (
    <Root active={active}>
      <Container>
        <Image src={courseImage.imageURL} />
        <InfoContainer>
          <InfoTitle>{courseName}</InfoTitle>
          <InfoSubTitle>
            Curso de {courseArea} - {courseLevel}
          </InfoSubTitle>
          <InfoButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={`/cursos/${convertToSlug(courseLevel)}/${convertToSlug(
                courseArea
              )}/${slug}/${uuid}`}
            >
              <a>Saiba mais</a>
            </Link>
          </InfoButton>
        </InfoContainer>
      </Container>
    </Root>
  );
};

export default SliderCard;
