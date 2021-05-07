import React from "react";
import { MenuItem } from "../../@types";
import Footer from "../../components/AppComponents/Footer";
import LayoutDrawer from "../../components/AppComponents/Navbar/Drawer";
import Navbar, {
  NavbarProps,
} from "../../components/AppComponents/Navbar/Main";
import { Anchor } from "../../components/AppComponents/Navbar/Main/styles";
import WhatsAppButton from "../../components/AppComponents/WhatsAppButton/Main";
import Loading from "../../components/Util/GlobalLoader";
import ScrollTop from "../../components/Util/ScrollTop";

type AppLayoutNavbarProps = Pick<NavbarProps, "hideOnScroll">;

interface AppLayoutProps extends AppLayoutNavbarProps {
  isGlobalLoading: boolean;
  items: MenuItem[];
  scrollTopButton?: boolean | null;
  anchored?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  isGlobalLoading,
  items,
  hideOnScroll,
  scrollTopButton,
  anchored = true,
}) => {
  const [drawerVisibility, setDrawerVisibility] = React.useState<boolean>(
    false
  );

  const toggleDrawerVisibility = (open: boolean) => {
    setDrawerVisibility(open);
  };

  return (
    <div id="top">
      <LayoutDrawer
        backgroundColor
        logo="/images/logo.svg"
        open={drawerVisibility}
        toggleDrawer={toggleDrawerVisibility}
        sidebarItems={items}
      />

      <Navbar
        hideOnScroll={hideOnScroll}
        toggleDrawer={toggleDrawerVisibility}
      />
      {anchored ? <Anchor anchored={anchored} /> : null}

      <Loading isLoading={isGlobalLoading} />
      {children}

      <WhatsAppButton />
      <Footer />
      {scrollTopButton ? <ScrollTop /> : null}
    </div>
  );
};

export default AppLayout;
