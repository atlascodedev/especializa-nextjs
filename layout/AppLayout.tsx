import React from "react";
import Footer from "../components/AppComponents/Footer";
import { MenuItem } from "../pages";
import InfoSection from "../components/AppComponents/InfoSection";
import { Address } from "cluster";
import Navbar from "../components/AppComponents/Navbar/Main";

type AppLayoutProps = {
  children: React.ReactNode;
  menu?: Array<MenuItem> | any;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children, menu }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>

      <div>
        <InfoSection></InfoSection>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
