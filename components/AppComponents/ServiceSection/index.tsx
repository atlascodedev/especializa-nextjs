import React from "react"
import ServiceCard from "./ServiceCard"
import styled from "styled-components"
import ServiceSlider, { ConsultingService } from "./Slider"

const ServiceSectionRoot = styled("div")`
  background-color: #f3f3f3;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`

const ServiceSectionTitle = styled("div")`
  text-align: center;
  font-size: 30px;
  font-family: "Suez One";
  font-weight: 600;
`

type Props = {
  services: Array<ConsultingService>
}

const ServiceSection = ({ services = [] }: Props) => {
  return (
    <ServiceSectionRoot>
      <ServiceSectionTitle>
        Conheça nossas soluções para sua instituição
      </ServiceSectionTitle>

      <ServiceSlider services={services} />
    </ServiceSectionRoot>
  )
}

export default ServiceSection
