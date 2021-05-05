import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import AppLayout from "../layout/AppLayout";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
import Hero from "../components/AppComponents/Hero/Main";
import DefenseSection from "../components/AppComponents/DefenseSection";
import Testimonials from "../components/AppComponents/Testimonials/Main";
import Contact from "../components/AppComponents/Contact/Main";
import Partners from "../components/AppComponents/Partners/Main";
import Posts from "../components/AppComponents/BlogList/Main";
import { BlogPostType } from "../@types";
import * as faker from "faker";
import Product from "../components/AppComponents/Product";

export type MenuItem = {
  menuName: string;
  reference: React.RefObject<HTMLElement> | null;
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
          imageURL: faker.image.business(1366, 768),
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
        imageURL: faker.image.business(1366, 768),
        imageDescription: faker.lorem.sentence(4),
      },
      slug: faker.lorem.slug(),
      uuid: faker.datatype.uuid(),
    };

    return blogPostTemp;
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const contactSectionRef = React.useRef<HTMLDivElement>(null);

  const toggleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const [fakePosts, setFakePosts] = React.useState<BlogPostType[]>([]);

  React.useEffect(() => {
    let fakePosts = fakeBlogPost(10) as BlogPostType[];

    console.log(fakePosts);

    setFakePosts(fakePosts);
  }, []);

  const { menuList, navigableList } = useLandingPage([
    {
      label: "Hero",
      component: <Hero />,
      ref: null,
      hidden: false,
    },

    {
      label: "Defense section",
      component: <DefenseSection />,
      ref: null,
      hidden: true,
    },

    {
      label: "Serviços",
      component: <Product />,
      ref: null,
      hidden: false,
    },

    {
      label: "Depoimentos",
      component: <Testimonials />,
      ref: null,
      hidden: true,
    },

    {
      label: "Blog",
      component: <Posts blogPosts={fakePosts} />,
      ref: null,
      hidden: true,
    },

    {
      label: "Contato",
      component: <Contact loadingFn={() => console.log("not now")} />,
      ref: contactSectionRef,
      hidden: false,
    },
    {
      label: "Parceiros",
      component: <Partners />,
      ref: null,
      hidden: false,
    },
  ]);

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
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
