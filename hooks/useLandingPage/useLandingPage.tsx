import React from "react";
import convertToSlug from "../../helper/convertToSlug";

export interface MenuItem {
  label: string;
  ref: React.RefObject<HTMLDivElement | any> | null;
  hidden?: boolean;
}

export interface NavigableComponent extends MenuItem {
  component: JSX.Element | null;
}

const useLandingPage = (
  menuItems: NavigableComponent[],
  deps?: any[]
): { navigableList: JSX.Element[]; menuList: MenuItem[] } => {
  const [navigables, setNavigables] = React.useState<JSX.Element[]>([]);
  const [menuItemList, setMenuItemsList] = React.useState<MenuItem[]>([]);

  React.useEffect(() => {
    let navigablesTemp: JSX.Element[] = [];
    let menuItemListTemp: MenuItem[] = [];

    for (let i = 0; i < menuItems.length; i++) {
      const menuItemIterable = menuItems[i];

      let menuItemTemp: MenuItem = {
        label: "",
        ref: null,
        hidden: menuItemIterable.hidden ? true : false,
      };

      let navigableTempSingle: JSX.Element = <div></div>;

      let menuID: string = convertToSlug(menuItemIterable.label);

      menuItemTemp.label = menuItemIterable.label;

      navigableTempSingle = (
        <div ref={menuItemIterable.ref} id={menuID}>
          {menuItemIterable.component ? menuItemIterable.component : null}
        </div>
      );

      navigablesTemp.push(navigableTempSingle);
      menuItemListTemp.push(menuItemTemp);
    }

    setNavigables(navigablesTemp);
    setMenuItemsList(menuItemListTemp);
  }, [deps ? deps : null]);

  return { navigableList: navigables, menuList: menuItemList };
};

export default useLandingPage;
