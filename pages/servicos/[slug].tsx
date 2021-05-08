import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import React from "react";
import { ServiceCollection } from "../../@types";
import AppLayout from "../../layout/AppLayout";
import styled from "styled-components";
import { motion, useAnimation, Variants } from "framer-motion";
import TextRevealAnimation from "../../components/Util/TextRevealAnimation";
import { ArrowDownward } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";
import ContactForm from "../../components/AppComponents/Contact/Form";
import dynamic from "next/dynamic";

const Root = styled.div``;

const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 0px 15%;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.65rem;
  }
`;

const ArrowDownContainer = styled(motion.div)`
  position: absolute;
  bottom: 5%;
  /* left: 50%; */
  /* right: -50%; */
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 3rem;
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
`;

const ServiceContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 7.5%;
  overflow: hidden;

  * {
    font-size: max(1.5rem, 1vh) !important;
    line-height: 30px;
  }
  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1024px) {
    * {
      font-size: max(2rem, 2vh) !important;
      line-height: 45px;
    }
  }
`;

const ServiceFormRoot = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

const ServiceFormContainer = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 3%;
  }
`;
const FormRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const TextRoot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 50%;
    font-size: 2.25rem;
  }
  flex-direction: column;
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const DynamicTextAnimation = dynamic(
  () => import("../../components/Util/TextRevealAnimation")
);

const ServicePage = (props: ServiceCollection) => {
  const animateLine = useAnimation();
  const arrowControls = useAnimation();

  React.useEffect(() => {
    arrowControls.start("cycle");
  }, []);

  const contentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Head>
        <title>{props.serviceName} - Serviço - Consultoria Especializa</title>
      </Head>

      <AppLayout
        hideOnScroll={false}
        isGlobalLoading={false}
        items={[
          { label: "Voltar à pagina principal", ref: null, hidden: false },
        ]}
      >
        <Root>
          <HeroContainer>
            <div style={{ width: "max-content" }}>
              <TextRevealAnimation
                animationCompleteCallback={() => animateLine.start("expanded")}
                letterStyle={{ color: "#fff" }}
                text={`Conheça nosso serviço: ${props.serviceName}`}
              />

              <motion.div
                style={{
                  height: "2px",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  marginBottom: "2px",
                  marginTop: "2px",
                }}
                initial="shrinked"
                animate={animateLine}
                variants={{
                  shrinked: { width: "0%" },
                  expanded: { width: "100%" },
                }}
                transition={{
                  duration: 1,
                }}
              />
            </div>

            <ArrowDownContainer
              animate={arrowControls}
              onClick={scrollToContent}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                repeatType: "mirror",
                type: "spring",
              }}
              variants={{
                cycle: { y: [0, 20] },
              }}
            >
              <SvgIcon component={ArrowDownward} />
            </ArrowDownContainer>
          </HeroContainer>
          <ServiceContentContainer ref={contentRef}>
            <div
              dangerouslySetInnerHTML={{ __html: props.serviceContent }}
            ></div>
          </ServiceContentContainer>

          <ServiceFormRoot>
            <ServiceFormContainer>
              <FormRoot>
                <ContactForm loadingFn={() => console.log("abc")} />
              </FormRoot>
              <TextRoot>
                <TextRevealAnimation
                  text={
                    "Ficou com alguma dúvida? Entre em contato conosco. Nossos representantes ficarão felizes em atendê-lo(a)."
                  }
                  triggerOnView={true}
                  staggerDelay={0.035}
                />
              </TextRoot>
            </ServiceFormContainer>
          </ServiceFormRoot>
        </Root>
      </AppLayout>
    </div>
  );
};

export const getStaticPaths = async () => {
  const serviceRequest: AxiosResponse<ServiceCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/services"
  );

  const serviceRequestData = serviceRequest.data;

  const paths = serviceRequestData.map((value, index) => {
    return {
      params: { slug: value.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const serviceByIdRequest: AxiosResponse<ServiceCollection> = await axios.post(
    `https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/services/where`,
    {
      key: "slug",
      value: params.slug,
    }
  );

  const serviceByIdRequestData = serviceByIdRequest.data;

  console.log(params);

  return { props: serviceByIdRequestData };
};

export default ServicePage;
