import { Slide, SvgIcon, useScrollTrigger } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import styled, { StyledTheme } from "styled-components";
import { NavbarProps } from "..";
import returnHome from "../../../../../helper/returnHome";

const navbarMobileHeight: number = 70;
const navbarDesktopHeight: number = 96;

const Root = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1100;
  left: 0;
  height: ${navbarMobileHeight + "px"};
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    height: ${navbarDesktopHeight + "px"};
  }
`;

interface AnchorProps {
  anchored?: boolean;
}

export const Anchor = styled.div<AnchorProps>`
  width: 100%;
  visibility: hidden;
  top: 0;
  left: 0;
  position: ${(props) => (props.anchored ? "relative" : "fixed")};
  height: ${navbarMobileHeight + "px"};

  @media (min-width: 1024px) {
    height: ${navbarDesktopHeight + "px"};
  }
`;

const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
`;

const LogoContainer = styled.div`
  flex-grow: 0.6;
  display: flex;
  justify-content: flex-start;
  order: 0;
  margin-left: 15px;
  cursor: pointer;

  @media (min-width: 1024px) {
    flex-grow: 0.5;
    margin-left: 50px;
    justify-content: flex-end;
  }
`;

const BurguerMenuContainer = styled.div`
  flex-grow: 0.4;
  order: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;

  @media (min-width: 1024px) {
    flex-grow: 0.5;
    margin-right: 50px;
  }

  .MuiSvgIcon-root {
    fill: ${(props) => props.theme.palette.primary.contrastText};
    width: 40px;
    height: 35px;
    cursor: pointer;
  }
`;

interface NavbarLayoutProps extends NavbarProps {}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  children,
  toggleDrawer,
  hideOnScroll,
}) => {
  const scrollTrigger = useScrollTrigger();

  return (
    <React.Fragment>
      {hideOnScroll ? (
        <Slide appear={false} direction="down" in={!scrollTrigger}>
          <Root>
            <ContainerMain>
              <BurguerMenuContainer>
                <SvgIcon onClick={() => toggleDrawer(true)} component={Menu} />
              </BurguerMenuContainer>
              <LogoContainer onClick={returnHome}>
                <img
                  src="/logo.svg"
                  alt="Logotipo - Munay Cartas Contempladas"
                />
              </LogoContainer>
            </ContainerMain>
          </Root>
        </Slide>
      ) : (
        <Root>
          <ContainerMain>
            <BurguerMenuContainer>
              <SvgIcon onClick={() => toggleDrawer(true)} component={Menu} />
            </BurguerMenuContainer>
            <LogoContainer onClick={returnHome}>
              <img src="/logo.svg" alt="Logotipo - Munay Cartas Contempladas" />
            </LogoContainer>
          </ContainerMain>
        </Root>
      )}
    </React.Fragment>
  );
};

export default NavbarLayout;
