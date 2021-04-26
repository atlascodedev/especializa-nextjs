import React from "react";
import TestimonialsLayout, { TestimonialCard } from "./styles";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

interface TestimonialsProps {}

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const Testimonials = (props: TestimonialsProps) => {
  const populateList: any = [1, 1, 1, 1, 1, 1, 1];

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
        {populateList.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                imageURL="https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2F1-7.webp?alt=media"
                location="São Paulo/SP"
                name="Jane Doe"
                text={
                  "“Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non  enim praesent elementum facilisis leo.”"
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TestimonialsLayout>
  );
};

export default Testimonials;
