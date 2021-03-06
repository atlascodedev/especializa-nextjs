import React from "react";
import styled from "styled-components";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoursesProps } from ".";
import { CourseCard } from "../../../@types";
import SliderCard from "./SliderCard";

SwiperCore.use([Pagination, Navigation]);

const Root = styled.div`
  width: 100%;
  height: auto;

  .swiper-container {
    padding: 5vh 0px 8vh 0px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

interface Props extends CoursesProps {}

const Slider = ({ slidersItems }: Props) => {
  return (
    <Root>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: slidersItems.length > 5 ? true : false,
        }}
        slideToClickedSlide
        spaceBetween={20}
        id="swiper-course"
        slidesPerView={1}
        draggable
        breakpoints={{
          1024: {
            centeredSlides: true,
            spaceBetween: 50,
            slidesPerView: slidersItems.length >= 3 ? 3 : 1,
          },
        }}
      >
        {slidersItems.map((value, index: number) => {
          return (
            <SwiperSlide key={index}>
              {(props) => (
                <SliderCard
                  courseArea={value.courseArea}
                  courseImage={value.courseImage}
                  courseLevel={value.courseLevel}
                  courseName={value.courseName}
                  slug={value.slug}
                  uuid={value.uuid}
                  active={props.isActive}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Root>
  );
};

export default Slider;
