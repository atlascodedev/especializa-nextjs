import { motion, motionValue } from "framer-motion";
import InView from "react-intersection-observer";
import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";

const ContactRoot = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  padding: 8%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    padding: 5% 5% 0% 5%;
  }
`;

const ContactInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ContactInnerFormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: calc(100% - 43%);
    min-width: calc(100% - 43%);
    order: 0;
  }
`;

const ContactInnerImageContainer = styled(motion.div)`
  position: relative;
  z-index: 50;
  display: none;

  @media (min-width: 1024px) {
    max-width: 43%;
    display: block;
    min-width: 43%;
    order: 1;
    height: 40vw;
  }

  @media (min-width: 1600px) {
    height: 50vw;
  }
`;

const ImageBackground = styled.div`
  position: absolute;
  width: auto;
  height: 100%;
  left: -15%;
  z-index: -10;

  img {
    width: auto;
    height: 100%;
  }
`;

interface ContactLayoutContainerProps {
  imageURL: string;
  children: React.ReactNode;
}

const ContactLayoutContainer = ({
  imageURL = "https://via.placeholder.com/500",
  children,
}: ContactLayoutContainerProps) => {
  return (
    <InView triggerOnce={true} threshold={0.5}>
      {({ entry, inView, ref }) => {
        return (
          <ContactRoot ref={ref}>
            <ContactInnerContainer>
              <ContactInnerImageContainer
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}
              >
                <img
                  style={{
                    transform: "rotateY(180deg)",
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  src={imageURL}
                  alt="Senhora sorrindo ao utilizar celular"
                />

                <ImageBackground>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/especializa-next-hefesto.appspot.com/o/adonis%2Fgallery%2Fpattern-behind.webp?alt=media"
                    alt="Detalhe complementar para imagem"
                  />
                </ImageBackground>
              </ContactInnerImageContainer>

              <ContactInnerFormContainer>{children}</ContactInnerFormContainer>
            </ContactInnerContainer>
          </ContactRoot>
        );
      }}
    </InView>
  );
};

export default ContactLayoutContainer;
