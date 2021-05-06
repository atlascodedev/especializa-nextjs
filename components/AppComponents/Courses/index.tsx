import React from "react";
import styled from "styled-components";
import { CourseCard } from "../../../@types";
import SectionTitle from "./SectionTitle";
import Slider from "./Slider";

const Root = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1366px;
  height: auto;
`;

export interface CoursesProps {
  slidersItems: CourseCard[];
}

const Courses = ({ slidersItems }: CoursesProps) => {
  return (
    <Root>
      <Container>
        <SectionTitle>Conheça também nossos cursos</SectionTitle>
        <Slider slidersItems={slidersItems} />
      </Container>
    </Root>
  );
};

export default Courses;
