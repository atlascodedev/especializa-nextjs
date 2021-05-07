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

const AboutCourseRoot = styled.div`
  width: 100%;
  height: auto;
  padding: 7% 7%;

  @media (min-width: 1024px) {
    padding: 5%;
  }
`;

const AboutCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AboutCourseTitle = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2.5%;

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

const AboutCourseText = styled.div`
  color: #333;
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

          <AboutCourseRoot>
            <AboutCourseContainer>
              <AboutCourseTitle>Sobre este curso</AboutCourseTitle>
              <AboutCourseText>
                {props.courseDescription} Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Unde, neque expedita praesentium
                exercitationem veniam dignissimos pariatur autem, aliquid
                voluptatem cum, numquam sequi. Ipsam dolorem doloribus quaerat
                dolor, delectus omnis quos consequuntur et. Consequatur adipisci
                accusamus quasi cumque vitae, itaque non laborum quidem? Nihil
                excepturi nam minima vitae fugit! Quod asperiores culpa nihil,
                dolorem itaque at tempora, deserunt accusantium quas, veritatis
                sequi fugit natus doloremque quia. Doloribus praesentium
                repudiandae necessitatibus deserunt ratione. Voluptatum ex esse
                maiores iure distinctio saepe ut reiciendis asperiores est
                explicabo error alias officiis dolorem tenetur, temporibus
                pariatur aut eligendi minus, praesentium nam cum eos earum ipsa!
                Suscipit eius accusamus dolores nobis odio magni eaque
                reiciendis nesciunt doloremque nisi ducimus inventore itaque
                veniam tempore, sint voluptatum blanditiis maxime minus
                reprehenderit quod eos tenetur quidem laboriosam? Accusamus
                ullam, voluptatibus nobis illo possimus eligendi fugit enim
                sequi vitae necessitatibus expedita fuga commodi, omnis eius
                vero saepe et ut ipsa. Provident, quidem! Ipsum impedit iste,
                autem commodi deleniti voluptas, vitae sapiente esse mollitia
                dignissimos excepturi numquam modi repudiandae facilis doloribus
                sed velit, deserunt tenetur molestias aliquam maxime labore
                placeat? Possimus quaerat, qui minima eveniet explicabo alias
                ratione ipsum, animi, in quo facere asperiores fuga obcaecati
                autem cum ea rerum dicta unde? Deleniti pariatur, debitis
                dolorem, sint rem consequatur dignissimos optio, atque facere
                tempore sequi voluptatem asperiores quam laborum ullam nulla
                quos. Ullam quidem aperiam dolorum minima facere officiis
                aspernatur ut ducimus itaque eos maxime vel quis possimus ea,
                cum nostrum harum porro quo? Blanditiis libero eligendi harum
                quidem recusandae! Et, inventore?{" "}
              </AboutCourseText>
            </AboutCourseContainer>
          </AboutCourseRoot>
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
