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
import ServiceCard from "../ServiceCard"
import { graphql, useStaticQuery } from "gatsby"
import { ServiceBenefit } from "../../../../templates/Post"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CardActiveProps {
  active: boolean
}

const CardActiveContainer = styled("div")<CardActiveProps>`
  opacity: ${props => (props.active ? "1" : "0.6")};
  scale: ${props => (props.active ? "1" : "0.75")};
  transition: all 0.8s ease;
  will-change: scale;
`

type Props = {
  services: Array<ConsultingService>
}

export type ConsultingService = {
  benefits: Array<ServiceBenefit>
  featuredImage: string
  summary: string
  title: string
  slug: string
}

const ServiceSlider = ({ services = [] }: Props) => {
  const [serviceData, setServiceData] = React.useState([])

  return (
    <div>
      <Swiper
        centeredSlides
        id="swiper-1"
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
        {services.map((consultingService, index) => (
          <SwiperSlide key={index}>
            {({ isActive }: any | boolean) => (
              <CardActiveContainer active={isActive}>
                <ServiceCard
                  serviceCardURL={consultingService.slug}
                  serviceCardImg={consultingService.featuredImage}
                  serviceCardText={consultingService.summary}
                  serviceCardTitle={consultingService.title}
                />
              </CardActiveContainer>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ServiceSlider
