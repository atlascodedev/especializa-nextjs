import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
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
