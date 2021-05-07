import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { Grade } from "@material-ui/icons";
import scrollIntoView from "../../../../helper/scrollIntoView";
import { MenuItem } from "../../../../@types";

interface Props {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  logo: string;
  sidebarItems: MenuItem[];
  backgroundColor?: boolean;
}

interface LayoutDrawerImageContainerProps {
  backgroundColor?: boolean;
}

const DrawerRoot = styled.div`
  .logoItem {
    padding: 0px !important;
  }
`;

const LayoutDrawerImageContainer = styled.div<LayoutDrawerImageContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.theme.palette.primary.main : "#fff"};

  img {
    width: 75%;
    padding: 10px;
    height: 75%;
    max-width: 200px;
    max-height: auto;
    padding-top: 23px;
    padding-bottom: 23px;
  }

  @media (min-width: 1024px) {
    img {
      height: 100%;
      width: 100%;
      padding: 33px 33px;
    }
  }
`;

const LayoutDrawer = ({
  open,
  toggleDrawer,
  logo,
  sidebarItems,
  backgroundColor,
}: Props) => {
  return (
    <DrawerRoot>
      <SwipeableDrawer
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        open={open}
        anchor="left"
      >
        <List disablePadding>
          <ListItem style={{ padding: "0px" }} divider>
            <LayoutDrawerImageContainer backgroundColor={backgroundColor}>
              <img src={"/images/logo.svg"} alt="Logo" />
            </LayoutDrawerImageContainer>
          </ListItem>

          {sidebarItems.map((item, index: number) => {
            if (!item.hidden) {
              return (
                <ListItem
                  onClick={() =>
                    scrollIntoView(item.label, item.ref, toggleDrawer(false))
                  }
                  key={index}
                  style={{
                    padding: "10px",
                    paddingLeft: "20px",
                    marginTop: "15px",
                  }}
                  alignItems="center"
                >
                  <ListItemIcon>
                    <SvgIcon component={Grade} />
                  </ListItemIcon>
                  <ListItemText style={{ padding: "5px 30px 5px 5px" }}>
                    {item.label}
                  </ListItemText>
                </ListItem>
              );
            }
          })}
        </List>
      </SwipeableDrawer>
    </DrawerRoot>
  );
};

export default LayoutDrawer;
