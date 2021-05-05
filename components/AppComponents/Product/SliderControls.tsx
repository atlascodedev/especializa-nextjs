import React from "react";
import styled from "styled-components";
import NavigationButton from "./NavigationButton";

const Root = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  position: relative;
  bottom: 0;
  z-index: 500;
  gap: 50px;

  @media (min-width: 1024px) {
    margin-left: 30px;
    justify-content: flex-start;
  }

  @media (min-width: 1600px) {
    margin-left: 60px;
  }
`;

interface Props {}

const SliderControls = (props: Props) => {
  return (
    <Root>
      <div style={{ cursor: "pointer" }} className="product-back">
        <NavigationButton direction="left" />
      </div>

      <div style={{ cursor: "pointer" }} className="product-forward">
        <NavigationButton direction="right" />
      </div>
    </Root>
  );
};

export default SliderControls;
