import React from "react"
import styled from "styled-components"
import ContactFormMain from "../ContactForm"
import contactBg from "../../../images/contact-bg.png"
import pattern from "../../../images/pattern-behind.svg"
import { useMediaQuery } from "@material-ui/core"

type ContactSectionBaseProps = {
  color: string
}

const ContactSectionBase = styled.div<ContactSectionBaseProps>`
  background-color: ${props => props.color};
  overflow: hidden;
  padding-top: 5vh;
`

const ContactSectionBaseInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`

type ContactSectionPictureContainerProps = {
  height: string | number
  imagePosY: string
  imagePosX: string
}

const ContactSectionPictureContainer = styled.div<ContactSectionPictureContainerProps>`
  height: ${props =>
    typeof props.height == "number" ? props.height + "px" : props.height};
  width: fit-content;
  transform: rotateY(180deg);
  position: absolute;
  bottom: ${props => props.imagePosY};
  left: ${props => props.imagePosX};

  @media (min-width: 1024px) {
  }
`

const ContactSectionPicture = styled.img`
  height: 100%;
  width: 100%;
`

const ContactSectionPictureBehind = styled.img`
  opacity: 0.9;
  filter: blur(50px);
  position: absolute;
  bottom: 0;
  left: 7%;
`

const ContactSectionTextContainer = styled.div`
  color: #fff;
  font-family: "Suez One";
  font-size: 23px;
  justify-content: center;
  display: flex;
  align-items: center;
  padding-bottom: 5vh;
  padding-top: 5vh;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 30px;
    padding-bottom: 10vh;
  }
`

interface Props {
  sectionText: string
  image?: string
  backgroundColor?: string
  imageHeight?: string | number
  imagePosX?: string
  imagePosY?: string
}

const ContactSectionAlterative: React.FC<Props> = ({
  sectionText = "Contate-nos, ficaremos felizes em atendê-lo(a).  Nossa consulta é gratuita.",
  image = `${contactBg}`,
  backgroundColor = "#4C58A4",
  imageHeight = 600,
  imagePosX = "10%",
  imagePosY = "0",
}) => {
  const bigDevice = useMediaQuery("@media(min-width: 1024px)")

  return (
    <React.Fragment>
      {bigDevice ? (
        <ContactSectionBase color={backgroundColor}>
          <ContactSectionTextContainer>
            {sectionText}
          </ContactSectionTextContainer>

          <ContactSectionBaseInner>
            <ContactSectionPictureBehind src={pattern} />

            <ContactSectionPictureContainer
              imagePosX={imagePosX}
              imagePosY={imagePosY}
              height={imageHeight}
            >
              <ContactSectionPicture src={image} />
            </ContactSectionPictureContainer>
            <span></span>

            <ContactFormMain />
          </ContactSectionBaseInner>
        </ContactSectionBase>
      ) : (
        <ContactSectionBase color={backgroundColor}>
          <ContactSectionTextContainer>
            {sectionText}
          </ContactSectionTextContainer>

          <ContactFormMain />
        </ContactSectionBase>
      )}
    </React.Fragment>
  )
}

export default ContactSectionAlterative
