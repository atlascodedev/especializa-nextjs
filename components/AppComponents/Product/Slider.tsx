import React from "react";
import SwiperCore, { A11y, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import { ProductSectionProps } from ".";

// When a Swiper slider is inside a CSS Grid or sometimes a flexbox, the "fix" below must be applied so it gets properly calculated

// CSS Grid/Flexbox bug size workaround
// @see https://github.com/kenwheeler/slick/issues/982

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: grid;

  .swiper-container {
    width: 100% !important;
    max-width: 100% !important;
    max-height: 100vh !important;

    min-height: 0 !important;
    min-width: 0 !important;
  }

  .swiper-wrapper {
    max-height: 100% !important;
    height: 100% !important;
    display: flex !important;
  }

  .swiper-slide {
    /* width: 100% !important; */
    flex-shrink: 0 !important;
    display: flex !important;
    justify-content: center;
    height: 100% !important;
    max-height: 100% !important;
  }
`;

SwiperCore.use([A11y, Pagination, Navigation]);

interface Props extends ProductSectionProps {}

const Slider: React.FC<Props> = ({ children, serviceList }) => {
  return (
    <Root>
      <Swiper
        navigation={{
          nextEl: ".product-forward",
          prevEl: ".product-back",
        }}
        slidesPerView={1}
        spaceBetween={20}
        draggable
        loop
        id="swiper-services"
        breakpoints={{
          1024: {
            spaceBetween: 0,
            slidesPerView: 1.4,
          },
          1600: {
            slidesPerView: 1.4,
          },
        }}
      >
        {serviceList.map((value, index: number) => {
          return (
            <SwiperSlide key={index}>
              <SliderCard
                serviceName={value.serviceName}
                servicePicture={value.servicePicture}
                slug={value.slug}
                uuid={value.uuid}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Root>
  );
};

export default Slider;
