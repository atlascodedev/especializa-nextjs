import React from "react";
import PartnersLayout, { PartnerCard } from "./styles";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PartnerCollection } from "../../../../@types";

SwiperCore.use([Autoplay, Pagination, Navigation]);

interface PartnersProps {
  items: PartnerCollection[];
}

const Partners = ({ items }: PartnersProps) => {
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
            slidesPerView: items.length >= 3 ? 3 : 1,
          },
        }}
      >
        {items.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <PartnerCard
                imageURL={value.partnerLogo.imageURL}
                name={value.partnerName}
                websiteURL={value.partnerWebsite}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </PartnersLayout>
  );
};

export default Partners;
