import React from "react";
import InView from "react-intersection-observer";
import styled from "styled-components";
import Background from "./Background";
import BusinessManImage from "./BusinessManImage";
import Circle from "./Circle";
import NavigationButton from "./NavigationButton";
import Slider from "./Slider";
import SliderControls from "./SliderControls";
import Text from "./Text";

const Root = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`;

const ContentImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const ContentSliderOuterContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  row-gap: 75px;
  z-index: 200;
  position: relative;

  @media (min-width: 1024px) {
    row-gap: 20px;
  }
`;

interface Props {}

const Product = (props: Props) => {
  return (
    <InView triggerOnce={false} threshold={0.3}>
      {({ entry, inView, ref }) => {
        return (
          <Root ref={ref}>
            <Background>
              <ContentContainer>
                <ContentImageContainer>
                  <Circle visible={inView}></Circle>
                  <BusinessManImage visible={inView} />
                </ContentImageContainer>

                <ContentSliderOuterContainer>
                  <Text />
                  <Slider slidersItems={[1, 1, 1, 1, 1, 1, 1]} />

                  <SliderControls />
                </ContentSliderOuterContainer>
              </ContentContainer>
            </Background>
          </Root>
        );
      }}
    </InView>
  );
};

export default Product;
