import React from "react";
import PartnersLayout, { PartnerCard } from "./styles";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface PartnersProps {}

const Partners = ({}: PartnersProps) => {
  const populateList: any[] = [1, 1, 1, 1, 1, 1, 1];

  return (
    <PartnersLayout>
      <Swiper
        id="swiper-partner"
        autoplay
        loop
        slidesPerView={1}
        centeredSlides
        breakpoints={{
          1024: {
            slidesPerView: populateList.length >= 3 ? 3 : 1,
          },
        }}
      >
        {populateList.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <PartnerCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PartnersLayout>
  );
};

export default Partners;
