import React from "react";
import { useRouter } from "next/router";
import scrollPolyfill from "../scrollIntoViewPolyfill";
import converToSlug from "../convertToSlug";
import returnHome from "../returnHome";

const scrollIntoView = (
  menuName: string,
  ref: React.RefObject<HTMLDivElement | HTMLElement> | null,
  callback?: ((...args: any[]) => void) | any
) => {
  const isChrome: boolean = global.window.navigator.userAgent.includes(
    "Chrome"
  );

  const smoothScrollSupport: boolean =
    "scrollBehavior" in global.window.document.documentElement.style;

  if (global.window.location.pathname === "/") {
    if (isChrome || !smoothScrollSupport || !ref) {
      scrollPolyfill(`#${converToSlug(menuName).toLowerCase()}`);
    } else {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (callback) {
      callback();
    }
  } else {
    returnHome();
  }
};

export default scrollIntoView;
