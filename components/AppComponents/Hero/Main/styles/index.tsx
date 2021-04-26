import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";

const Root = styled.div`
  width: 100%;
  height: auto;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fmain-bg.webp?alt=media");
  /* background-size: 100vh; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 1024px) {
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;

  @media (min-width: 1024px) {
    max-width: 40vw;
    padding: 3%;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: #333;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const AuxText = styled.div`
  font-size: 1.15rem;
  color: #fff;

  span {
    color: ${(props) => props.theme.palette.primary.dark};
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ButtonsContainer = styled.div`
  margin: 5% 0px;
  display: flex;
  justify-content: space-between;

  .main {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }

  .MuiButtonBase-root {
    font-size: 0.75rem;
    margin: 0px 10px;
  }

  @media (min-width: 1024px) {
    .MuiButtonBase-root {
      font-size: initial;
      margin: 0px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 45vw;
  display: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const WavesDetail = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 50;
  display: none;
  transform: translateY(5px);

  @media (min-width: 1024px) {
    display: block;
  }
`;

interface HeroLayoutProps {}

const HeroLayout = ({}: HeroLayoutProps) => {
  return (
    <Root>
      <Container>
        <WavesDetail src="https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fwaves.webp?alt=media" />
        <TextContainer>
          <Title>Consultoria educacional</Title>
          <AuxText>
            Terceirização de serviços acadêmicos, pedagógicos e de secretaria.
            Conte com a Consultoria Especializa para garantir a qualidade de sua
            instituição e destaque-se no mercado.
          </AuxText>
          <ButtonsContainer>
            <Button
              className="main"
              size={
                global.window && global.window.innerWidth < 1024
                  ? "small"
                  : "medium"
              }
              variant="contained"
              color="primary"
            >
              Fale conosco
            </Button>

            <Button
              size={
                global.window && global.window.innerWidth < 1024
                  ? "small"
                  : "medium"
              }
              variant="outlined"
              color="secondary"
            >
              Conheça nossas soluções
            </Button>
          </ButtonsContainer>
        </TextContainer>

        <ImageContainer>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fcropped-img.webp?alt=media"
            alt="Mulher jovem segurando livros e sorrindo"
          />
        </ImageContainer>
      </Container>
    </Root>
  );
};

export default HeroLayout;
