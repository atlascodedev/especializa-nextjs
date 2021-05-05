import React from "react";
import InView from "react-intersection-observer";
import styled from "styled-components";
import Background from "./Background";
import BusinessManImage from "./BusinessManImage";
import Circle from "./Circle";
import Slider from "./Slider";
import Text from "./Text";

const Root = styled.div`
  width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
`;

const ContentImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentSliderOuterContainer = styled.div`
  display: grid;
  grid-template-rows: 25% 75%;
  justify-items: center;
  row-gap: 20px;
  overflow: hidden;
  z-index: 200;
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
