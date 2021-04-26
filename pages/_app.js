import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme, { styledTheme } from "../theme";
import "../styles/globals.css";
require("swiper/swiper.min.css");
require("swiper/components/navigation/navigation.min.css");
require("swiper/components/pagination/pagination.min.css");
require("swiper/components/scrollbar/scrollbar.min.css");
require("swiper/components/effect-fade/effect-fade.min.css");
require("swiper/components/scrollbar/scrollbar.min.css");
require("swiper/components/lazy/lazy.min.css");

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StyledThemeProvider theme={styledTheme}>
            <Component {...pageProps} />
          </StyledThemeProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
