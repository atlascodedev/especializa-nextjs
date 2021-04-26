import { Fade, LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface Props {
  isLoading: boolean;
}

const Container = styled.div`
  .MuiLinearProgress-colorPrimary {
    background-color: tomato;
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: #fff;
  }
`;

const Loading = ({ isLoading }: Props) => {
  return (
    <Fade
      style={{
        zIndex: 9999,
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      in={isLoading}
      timeout={{ enter: 100, exit: 100 }}
    >
      <Container>
        <LinearProgress className="linearProgress" />
      </Container>
    </Fade>
  );
};

export default Loading;
