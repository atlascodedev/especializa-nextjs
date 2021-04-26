import React from "react"
import styled, { keyframes } from "styled-components"

type TestimonialCardRootProps = {
  active?: boolean
}

const TestimonialCardRoot = styled("div")<TestimonialCardRootProps>`
  width: 330px;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  background-color: #fff;
  max-height: ${props => (props.active ? "1000px" : "300px")};
  overflow: hidden;
  transition: all 1s ease-in-out;
`

interface TestimonialCardImageProps {
  img?: string
}

const TestimonialCardImageContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
  position: absolute;
  left: 50%;
`

const TestimonialCardImage = styled("div")<TestimonialCardImageProps>`
  background: #78e08f;
  border-radius: 4px;
  width: 108px;
  height: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  left: -50%;
`

const TestimonialCardTitle = styled("div")`
  text-align: center;
  font-family: "Suez One";
  font-weight: 700;
  font-size: 16px;
  margin-top: 78px;
  margin-bottom: 25px;
`

type TestimonialBodyProps = {
  active?: boolean
}

const TestimonialBody = styled("div")<TestimonialBodyProps>`
  font-size: 13px;
  margin-bottom: 25px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  transition: all 1s ease-in-out;
  overflow: hidden;
  max-height: ${props => (props.active ? "1000px" : "0px")};
  padding-bottom: ${props => (props.active ? "0px" : "-2000px")};
  & .innerText {
    transition: all 1s ease-in-out;
    max-height: ${props => (props.active ? "1000px" : "0px")};
  }
`

interface Props {
  cardImage?: string
  cardTitle?: string
  cardText?: string
  active?: boolean
}

const TestimonialCard = ({
  cardImage = "https://via.placeholder.com/75x75",
  cardTitle = "Nome para depoimento",
  cardText = "Depoimento vai aqui, lorem ipsum text para simular um depoimento que será inserido através de um painel de controle amigável ao usuário",
  active = false,
}: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TestimonialCardRoot active={active}>
        <TestimonialCardImageContainer>
          <TestimonialCardImage img={cardImage} />
        </TestimonialCardImageContainer>
        <TestimonialCardTitle>{cardTitle}</TestimonialCardTitle>
        <TestimonialBody active={active}>
          <div className="innerText">{cardText}</div>
        </TestimonialBody>
      </TestimonialCardRoot>
    </div>
  )
}

export default TestimonialCard
