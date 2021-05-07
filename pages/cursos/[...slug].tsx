import React from "react";
import axios, { AxiosResponse } from "axios";
import { CourseCollection } from "../../@types";
import convertToSlug from "../../helper/convertToSlug";
import AppLayout from "../../layout/AppLayout";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { SvgIcon } from "@material-ui/core";
import { ArrowDownward, PowerOffSharp } from "@material-ui/icons";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import ContactForm from "../../components/AppComponents/Contact/Form";

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
    font-size: 3rem;
  }

  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;

const CourseAreaLevel = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
  z-index: 50;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media (min-width: 1600px) {
    font-size: 3rem;
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
      font-size: 3rem;
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

const AboutCourseTitle = styled(motion.div)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 3.5%;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;

const AboutCourseText = styled(motion.div)`
  color: #333;
`;

const CourseSyllabusRoot = styled.div`
  width: 100%;
  height: auto;
  background-color: #eeeeee;
  padding: 7% 7%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    padding: 5%;
  }
`;

const CourseSyllabusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 60%;
`;

const CourseSyllabusTitle = styled(motion.div)`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3.5%;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;

const CourseSyllabusGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 50% 50%;

  @media (min-width: 1024px) {
    grid-template-columns: 33.333% 33.333% 33.333%;
  }
`;

const CourseSyllabusItem = styled.div<{ color?: string }>`
  padding: 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  text-align: center;
  font-size: 10px;
  color: #333;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const CourseFormRoot = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  height: auto;
`;

const CourseFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CourseFormTitle = styled.div`
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3.5%;
  margin-top: 3.5%;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 3rem;
  }
`;

const CourseFormInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1024px) {
    justify-content: space-around;
    padding-left: 5%;
  }
`;

const CourseFormImageContainer = styled.div`
  display: none;
  width: 100%;
  position: relative;
  height: 40vw;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const CourseFormImage = styled.img`
  object-fit: cover;
  position: absolute;
  width: auto;
  height: 100%;
  right: 15%;
`;

const CourseFormWaves = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: auto;
  bottom: -2%;
  right: 0;
`;

const CourseFormWrapper = styled.img`
  padding: 5%;
`;

const CoursePage: React.FC<CourseCollection> = (props) => {
  const arrowControls = useAnimation();

  React.useEffect(() => {
    arrowControls.start("cycle");
  }, []);

  const contentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
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
              onClick={scrollToContent}
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

          <AboutCourseRoot ref={contentRef}>
            <AboutCourseContainer>
              <InView triggerOnce={false} threshold={0.4}>
                {({ entry, inView, ref }) => (
                  <AboutCourseTitle
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 50 },
                    }}
                    transition={{ duration: 0.6, type: "keyframes" }}
                    ref={ref}
                  >
                    Sobre este curso
                  </AboutCourseTitle>
                )}
              </InView>
              <InView triggerOnce={false} threshold={0.3}>
                {({ entry, inView, ref }) => {
                  return (
                    <AboutCourseText
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      transition={{ duration: 0.6, type: "keyframes" }}
                      ref={ref}
                    >
                      {props.courseDescription} Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Unde, neque expedita
                      praesentium exercitationem veniam dignissimos pariatur
                      autem, aliquid voluptatem cum, numquam sequi. Ipsam
                      dolorem doloribus quaerat dolor, delectus omnis quos
                      consequuntur et. Consequatur adipisci accusamus quasi
                      cumque vitae, itaque non laborum quidem? Nihil excepturi
                      nam minima vitae fugit! Quod asperiores culpa nihil,
                    </AboutCourseText>
                  );
                }}
              </InView>
            </AboutCourseContainer>
          </AboutCourseRoot>
          <CourseSyllabusRoot>
            <CourseSyllabusContainer>
              <InView triggerOnce={false} threshold={0.5}>
                {({ entry, inView, ref }) => (
                  <CourseSyllabusTitle
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 50 },
                    }}
                    transition={{ duration: 0.6, type: "keyframes" }}
                    ref={ref}
                  >
                    Matriz curricular
                  </CourseSyllabusTitle>
                )}
              </InView>

              <CourseSyllabusGrid>
                {props.courseSyllabus.map((syllabusItem, index) => {
                  return (
                    <CourseSyllabusItem
                      color={index % 2 === 0 ? "whitesmoke" : "#fff"}
                    >
                      {syllabusItem}
                    </CourseSyllabusItem>
                  );
                })}
              </CourseSyllabusGrid>
            </CourseSyllabusContainer>
          </CourseSyllabusRoot>
          <CourseFormRoot>
            <CourseFormContainer>
              <CourseFormTitle>
                Fale conosco, ficaremos felizes em atendê-lo.
              </CourseFormTitle>

              <CourseFormInnerContainer>
                <div
                  style={{
                    padding:
                      global.window && global.window.innerWidth < 1024
                        ? "8%"
                        : "0px",
                  }}
                >
                  <ContactForm loadingFn={() => console.log("ok")} />
                </div>

                <CourseFormImageContainer>
                  <CourseFormImage
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fpost-contact.webp?alt=media"
                    }
                  />
                  <CourseFormWaves src="https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fwaves.webp?alt=media" />
                </CourseFormImageContainer>
              </CourseFormInnerContainer>
            </CourseFormContainer>
          </CourseFormRoot>
        </Root>
      </AppLayout>
    </div>
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
  const courseRequestByID: AxiosResponse<CourseCollection> = await axios.get(
    `https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/coursesNew/${params.slug[3]}`
  );

  const courseRequestByIDData = courseRequestByID.data;

  return { props: courseRequestByIDData };
};

export default CoursePage;
