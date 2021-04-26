import { smoothScrollTo } from "../scrollIntoViewPolyfill";

const returnHome = () => {
  try {
    if (global.window.location.pathname === "/") {
      smoothScrollTo(0, 350);
    } else if (process.env.NODE_ENV !== "production") {
      global.window.location.href = `http://${global.window.location.host}`;
    } else {
      global.window.location.href = `https://${global.window.location.host}`;
    }
  } catch (error) {
    console.log(error);
  }
};

export default returnHome;
