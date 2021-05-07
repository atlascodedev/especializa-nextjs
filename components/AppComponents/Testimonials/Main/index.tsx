import React from "react";
import TestimonialsLayout, { TestimonialCard } from "./styles";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCollection } from "../../../../@types";

interface TestimonialsProps {
  testimonials: TestimonialCollection[];
}

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <TestimonialsLayout>
      <Swiper
        navigation={{
          nextEl: ".testimonial-forward",
          prevEl: ".testimonial-back",
        }}
        id="swiper-testimonials"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 40,
            centeredSlides: true,
          },
          1600: {
            slidesPerView: 1.8,
            spaceBetween: 0,
            centeredSlides: true,
          },
        }}
      >
        {testimonials.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                location={value.testimonialCompany}
                name={value.testimonialName}
                text={value.testimonialText}
                imageURL={value.testimonialPicture.imageURL}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TestimonialsLayout>
  );
};

export default Testimonials;
