import Head from "next/head";
import React from "react";
import AppLayout from "../layout/AppLayout";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
import Hero from "../components/AppComponents/Hero/Main";
import DefenseSection from "../components/AppComponents/DefenseSection";
import Testimonials from "../components/AppComponents/Testimonials/Main";
import Contact from "../components/AppComponents/Contact/Main";
import Partners from "../components/AppComponents/Partners/Main";
import Posts from "../components/AppComponents/BlogList/Main";
import {
  BlogCollection,
  BlogPostType,
  CourseCard,
  CourseCollection,
  PartnerCollection,
  ServiceCollection,
  TestimonialCollection,
} from "../@types";
import * as faker from "faker";
import Product from "../components/AppComponents/Product";
import Courses from "../components/AppComponents/Courses";
import axios, { AxiosResponse } from "axios";

export type MenuItem = {
  menuName: string;
  reference: React.RefObject<HTMLElement> | null;
};

const fakeCourseCard = (amount?: number): CourseCard | CourseCard[] => {
  if (amount && amount > 0) {
    let courseCardTempArray: CourseCard[] = [];

    for (let i = 0; i < amount; i++) {
      let courseCardTempInner: CourseCard = {
        imageURL: `${faker.image.imageUrl(
          1366,
          768,
          "business",
          true,
          true
        )}?random=${Math.round(Math.random() * 1000)}`,
        subTitle: faker.lorem.word(10),
        title: faker.lorem.word(12),
        to: "#",
      };

      courseCardTempArray.push(courseCardTempInner);
    }

    return courseCardTempArray;
  } else {
    let courseCardTempInner: CourseCard = {
      imageURL: `${faker.image.imageUrl(
        1366,
        768,
        "business",
        true,
        true
      )}?random=${Math.round(Math.random() * 1000)}`,
      subTitle: faker.lorem.word(10),
      title: faker.lorem.word(12),
      to: "#",
    };

    return courseCardTempInner;
  }
};

const fakeBlogPost = (amount?: number): BlogPostType | BlogPostType[] => {
  if (amount && amount > 0) {
    let blogPostTempArray: BlogPostType[] = [];

    for (let i = 0; i < amount; i++) {
      let blogPostTempInner: BlogPostType = {
        blogActive: true,
        blogDescription: faker.lorem.paragraph(),
        blogPost: faker.lorem.paragraphs(10),
        blogTitle: faker.lorem.sentence(3),
        featuredImage: {
          imageURL: `${faker.image.imageUrl(
            1366,
            768,
            "business",
            true,
            true
          )}?random=${Math.round(Math.random() * 1000)}`,
          imageDescription: faker.lorem.sentence(4),
        },
        slug: faker.lorem.slug(),
        uuid: faker.datatype.uuid(),
      };

      blogPostTempArray.push(blogPostTempInner);
    }

    return blogPostTempArray;
  } else {
    let blogPostTemp: BlogPostType = {
      blogActive: true,
      blogDescription: faker.lorem.paragraph(),
      blogPost: faker.lorem.paragraphs(10),
      blogTitle: faker.lorem.sentence(3),
      featuredImage: {
        imageURL: `${faker.image.imageUrl(
          1366,
          768,
          "business",
          true,
          true
        )}?random=${Math.round(Math.random() * 1000)}`,
        imageDescription: faker.lorem.sentence(4),
      },
      slug: faker.lorem.slug(),
      uuid: faker.datatype.uuid(),
    };

    return blogPostTemp;
  }
};

export const getStaticProps = async () => {
  const blogRequest: AxiosResponse<BlogCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/portalBlog"
  );

  const courseRequest: AxiosResponse<CourseCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/coursesNew"
  );

  const serviceRequest: AxiosResponse<ServiceCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/services"
  );

  const testimonialRequest: AxiosResponse<
    TestimonialCollection[]
  > = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/testimonials"
  );

  const partnersCollection: AxiosResponse<
    PartnerCollection[]
  > = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/partners"
  );

  return {
    props: {
      blog: blogRequest.data,
      partners: partnersCollection.data,
      testimonials: testimonialRequest.data,
      services: serviceRequest.data,
      courses: courseRequest.data,
    },
  };
};

interface HomePageProps {
  blog: BlogCollection[];
  partners: PartnerCollection[];
  testimonials: TestimonialCollection[];
  services: ServiceCollection[];
  courses: CourseCollection[];
}

export default function Home({
  blog,
  courses,
  partners,
  services,
  testimonials,
}: HomePageProps) {
  console.log(services);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const contactSectionRef = React.useRef<HTMLDivElement>(null);

  const { menuList, navigableList } = useLandingPage([
    {
      label: "Hero",
      component: <Hero />,
      ref: null,
      hidden: true,
    },

    {
      label: "Defense section",
      component: <DefenseSection />,
      ref: null,
      hidden: true,
    },

    {
      label: "Serviços",
      component: <Product serviceList={services} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Cursos",
      component: <Courses slidersItems={courses} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Depoimentos",
      component: <Testimonials testimonials={testimonials} />,
      ref: null,
      hidden: true,
    },

    {
      label: "Blog",
      component: <Posts blogPosts={blog} />,
      ref: null,
      hidden: false,
    },

    {
      label: "Contato",
      component: <Contact loadingFn={() => console.log("not now")} />,
      ref: contactSectionRef,
      hidden: false,
    },
    {
      label: "Parceiros",
      component: <Partners items={partners} />,
      ref: null,
      hidden: false,
    },
  ]);

  return (
    <React.Fragment>
      <Head>
        <title>
          Consultoria Especializa - Serviços acadêmicos, pedagógicos e de
          secretaria
        </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout
        isGlobalLoading={isLoading}
        scrollTopButton
        hideOnScroll
        items={menuList}
      >
        {navigableList.map((navigable, index: number) => {
          return <div key={index}>{navigable}</div>;
        })}
      </AppLayout>
    </React.Fragment>
  );
}
