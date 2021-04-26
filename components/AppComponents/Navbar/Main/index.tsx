import React from "react";
import NavbarLayout from "./styles";

export interface NavbarProps {
  toggleDrawer?: (open: boolean) => void;
  hideOnScroll?: boolean | null;
}

const Navbar: React.FC<NavbarProps> = ({
  children,
  toggleDrawer,
  hideOnScroll,
}) => {
  return (
    <NavbarLayout hideOnScroll={hideOnScroll} toggleDrawer={toggleDrawer} />
  );
};

export default Navbar;
