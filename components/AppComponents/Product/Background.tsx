import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);

  @media (min-width: 1600px) {
    height: auto;
  }
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const Background: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <BackgroundImage src="/images/Background.svg"></BackgroundImage>
      {children}
    </Container>
  );
};

export default Background;
