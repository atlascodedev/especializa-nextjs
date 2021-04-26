import React from "react"
import styled from "styled-components"
import scrollHelper from "../../../helper/scrollIntoViewType"
import background from "../../../images/main-bg.svg"
import waves from "../../../images/waves.svg"
import heroImage from "../../../images/cropped-img.png"
import { Box, Button, Slide, useMediaQuery } from "@material-ui/core"

const HeroBackGroundDesktop = styled("div")`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  font-family: "Suez One";
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const HeroBackGroundMobile = styled.div`
  height: 65vh;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: "Suez One";
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`

const HeroBackgroundWaves = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
`

const HeroBackgroundImageContainer = styled.div`
  height: 900px;
  display: none;
  width: auto;
  position: absolute;
  bottom: 1%;
  right: 10%;
  z-index: 1;
  overflow: hidden;
  transform: rotateY(180deg);

  @media (min-width: 1024px) {
    height: 625px;
    display: block;
  }

  @media (min-width: 1600px) {
    height: 750px;
  }
`

const HeroBackgroundImage = styled.img`
  height: 100%;
  width: 100%;
`

const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 100%;
  text-align: center;

  @media (min-width: 1024px) {
    padding-left: 24px;
  }
`

const HeroHeader = styled.div`
  color: #3b4043;
  @media (min-width: 1024px) {
    font-size: 40px;
  }

  @media (min-width: 1600px) {
    font-size: 50px;
  }
`

const HeroText = styled.div`
  color: #fff;

  & > span {
    color: #29378e;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }

  @media (min-width: 1600px) {
    font-size: 34px;
  }
`

const HeroMobileInnerContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 20% 40% 40%;
  font-family: "Suez One";
  place-items: center;
`

const HeroMobileHeaderText = styled.div`
  color: #3b4043;
  font-size: 26px;
`

const HeroMobileText = styled.div`
  color: #fff;
  font-size: 18px;
  width: 90%;
  & > span {
    color: #29378e;
  }
`

const HeroMobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

type Props = {
  ctaRef: React.RefObject<HTMLElement> | null
  ctaRefSecond: React.RefObject<HTMLElement> | null
}

const LandingHero = ({ ctaRef = null, ctaRefSecond = null }: Props) => {
  const bigDevice = useMediaQuery("@media(min-width: 1024px)")

  return (
    <React.Fragment>
      {bigDevice ? (
        <HeroBackGroundDesktop>
          <HeroTextContainer>
            <HeroHeader>Consultoria educacional</HeroHeader>
            <HeroText>
              Terceirização de serviços acadêmicos, pedagógicos e de secretaria.
              Conte com a <span>Consultoria Especializa</span> para garantir a
              qualidade de sua instituição e destaque-se no mercado.
            </HeroText>

            <Box
              width="100%"
              pt={3}
              display="flex"
              justifyContent="space-around"
            >
              <Box color="#fff">
                <Button
                  onClick={() => scrollHelper(ctaRef, "contato")}
                  variant="contained"
                  color="inherit"
                  style={{ backgroundColor: "#29378E" }}
                >
                  Fale conosco
                </Button>
              </Box>

              <Box color="#fff">
                <Button
                  onClick={() => scrollHelper(ctaRefSecond, "servicos")}
                  variant="outlined"
                  color="inherit"
                >
                  Conheça nossas soluções
                </Button>
              </Box>
            </Box>
          </HeroTextContainer>

          <HeroBackgroundWaves src={waves} />
          <HeroBackgroundImageContainer>
            <HeroBackgroundImage src={heroImage} />
          </HeroBackgroundImageContainer>
        </HeroBackGroundDesktop>
      ) : (
        <HeroBackGroundMobile>
          <HeroMobileInnerContainer>
            <HeroMobileHeaderText>Consultoria educacional</HeroMobileHeaderText>
            <HeroMobileText>
              Terceirização de serviços acadêmicos, pedagógicos e de secretaria.
              Conte com a <span>Consultoria Especializa</span> para garantir a
              qualidade de sua instituição e destaque-se no mercado.
            </HeroMobileText>

            <HeroMobileButtonsContainer>
              <Box color="#fff">
                <Button
                  onClick={() => scrollHelper(ctaRef, "contato")}
                  variant="contained"
                  color="inherit"
                  style={{ backgroundColor: "#29378E" }}
                >
                  Fale conosco
                </Button>
              </Box>

              <Box pt={3} color="#fff">
                <Button
                  onClick={() => scrollHelper(ctaRefSecond, "servicos")}
                  variant="contained"
                  color="inherit"
                  style={{ backgroundColor: "#6c79c7" }}
                >
                  Conheça nossas soluções
                </Button>
              </Box>
            </HeroMobileButtonsContainer>
          </HeroMobileInnerContainer>
        </HeroBackGroundMobile>
      )}
    </React.Fragment>
  )
}

export default LandingHero
