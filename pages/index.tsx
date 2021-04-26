import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import AppLayout from "../layout/AppLayout";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
import Hero from "../components/AppComponents/Hero/Main";
import DefenseSection from "../components/AppComponents/DefenseSection";
import Testimonials from "../components/AppComponents/Testimonials/Main";
import Contact from "../components/AppComponents/Contact/Main";

export type MenuItem = {
  menuName: string;
  reference: React.RefObject<HTMLElement> | null;
};

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const contactSectionRef = React.useRef<HTMLDivElement>(null);

  const toggleLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

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
      label: "Depoimentos",
      component: <Testimonials />,
      ref: null,
      hidden: true,
    },

    {
      label: "Contato",
      component: <Contact loadingFn={() => console.log("not now")} />,
      ref: contactSectionRef,
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
