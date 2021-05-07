import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import React from "react";
import { CourseCollection } from "../../@types";
import convertToSlug from "../../helper/convertToSlug";
import AppLayout from "../../layout/AppLayout";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { SvgIcon } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

const Root = styled.div``;

const HeroContainer = styled.div`
  position: relative;
  width: auto;
  height: 50vh;

  @media (min-width: 1024px) {
    height: 85vh;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  filter: brightness(0.5);
  z-index: 10;
  position: absolute;
  object-position: center top;

  @media (min-width: 1024px) {
    height: 85vh;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 0px 0px 5% 0px;
  }
`;

const CourseName = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  z-index: 50;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const CourseAreaLevel = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  z-index: 50;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const ArrowDownContainer = styled(motion.div)`
  position: absolute;
  bottom: 5%;
  /* left: 50%; */
  /* right: -50%; */
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 3rem;
    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }
`;

const PlacePage = (props: CourseCollection) => {
  const arrowControls = useAnimation();

  React.useEffect(() => {
    arrowControls.start("cycle");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>
          {props.courseName} - {props.courseArea} - {props.courseLevel} -
          Consultoria Especializa
        </title>
      </Head>

      <AppLayout
        hideOnScroll={false}
        isGlobalLoading={false}
        items={[
          { label: "Voltar à pagina principal", ref: null, hidden: false },
        ]}
      >
        <Root>
          <HeroContainer>
            <ArrowDownContainer
              animate={arrowControls}
              onClick={() => console.log("nothing for now")}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                repeatType: "mirror",
                type: "spring",
              }}
              variants={{
                cycle: { y: [0, 20] },
              }}
            >
              <SvgIcon component={ArrowDownward} />
            </ArrowDownContainer>

            <HeroImage
              src={props.courseImage.imageURL}
              alt={props.courseImage.imageDescription}
            />
            <HeroInnerContainer>
              <CourseName>{props.courseName}</CourseName>
              <CourseAreaLevel>
                {props.courseArea + "-" + props.courseLevel}
              </CourseAreaLevel>
            </HeroInnerContainer>
          </HeroContainer>
        </Root>
      </AppLayout>
    </React.Fragment>
  );
};

export const getStaticPaths = async () => {
  const courseRequest: AxiosResponse<CourseCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/coursesNew"
  );

  const courseRequestData = courseRequest.data;

  const paths = courseRequestData.map(
    (course: CourseCollection, index: number) => {
      return {
        params: {
          slug: [
            convertToSlug(course.courseLevel),
            convertToSlug(course.courseArea),
            course.slug,
            course.uuid,
          ],
        },
      };
    }
  );

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // console.log(params);

  const courseRequestByID: AxiosResponse<CourseCollection> = await axios.get(
    `https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/coursesNew/${params.slug[3]}`
  );

  const courseRequestByIDData = courseRequestByID.data;

  return { props: courseRequestByIDData };
};

export default PlacePage;
