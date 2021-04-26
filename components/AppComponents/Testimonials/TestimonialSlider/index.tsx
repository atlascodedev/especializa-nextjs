import React from "react"
import styled from "styled-components"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./slider.css"
import TestimonialCard from "../TestimonialCard"
import { Testimonial } from ".."

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CardActiveProps {
  active: boolean
}

const CardActiveContainer = styled("div")<CardActiveProps>`
  opacity: ${props => (props.active ? "1" : "0.2")};
  transition: all 1s ease-in-out;
  will-change: opacity;
`

type Props = {
  testimonials: Array<Testimonial>
}

const TestimonialSlider = ({ testimonials = [] }: Props) => {
  return (
    <div>
      <Swiper
        centeredSlides
        id="swiper-2"
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={true}
        watchOverflow={true}
        spaceBetween={50}
        breakpoints={{
          1024: {
            slidesPerView: "auto",
            pagination: { clickable: true },
            spaceBetween: 0,
          },
        }}
      >
        {testimonials.map((testimonial: Testimonial, index: number) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }: any | boolean) => (
                <CardActiveContainer active={isActive}>
                  <TestimonialCard
                    active={isActive}
                    cardImage={testimonial.testimonialPicture}
                    cardText={testimonial.testimonialText}
                    cardTitle={testimonial.testimonialName}
                  />
                </CardActiveContainer>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider
