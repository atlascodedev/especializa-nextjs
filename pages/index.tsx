import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import AppLayout from "../layout/AppLayout";
import useLandingPage from "../hooks/useLandingPage/useLandingPage";
import Hero from "../components/AppComponents/Hero/Main";
import DefenseSection from "../components/AppComponents/DefenseSection";

export type MenuItem = {
  menuName: string;
  reference: React.RefObject<HTMLElement> | null;
};

export default function Home() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
      hidden: true
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
        items={[]}
      >
        {navigableList.map((navigable, index: number) => {
          return <div key={index}>{navigable}</div>;
        })}
      </AppLayout>
    </React.Fragment>
  );
}
