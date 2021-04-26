import { Fade, makeStyles, Slide, useMediaQuery } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import OffsetPictureCard from "../OffsetPictureCard";

const AboutUsRoot = styled.div`
  background-color: #ececec;
  margin-bottom: 5vh;

  margin-top: 5vh;
  padding-top: 10vh;
  padding-bottom: 10vh;

  @media (min-width: 1024px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`;

const AboutUsSecondRoot = styled.div`
  background-color: #ffffff;
  margin-bottom: 5vh;

  margin-top: 5vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const AboutUsSection = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }

  & .offsetRoot {
    order: 0;
  }

  & .offsetRoot-2 {
    & .offsetWrapper {
      top: -60px !important;
    }

    @media (min-width: 1024px) {
      order: 1;

      & .offsetWrapper {
        top: -135px !important;
      }
    }
  }

  & .offsetWrapper {
    display: flex;
    top: -50px !important;
    justify-content: center;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }
  }
`;

const AboutUsTextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: "Suez One";
  align-items: center;
  text-align: center;

  & > .aboutUsTitle {
    width: 90%;

    & > h2 {
      font-family: "Suez One";
      text-align: start;
    }
  }

  & > div {
    font-family: "Arial";
    text-align: start;
    width: 90%;
  }
`;

interface Props {}

const AboutUs = ({}: Props) => {
  const [aboutUsOne, setAboutUsOne] = React.useState<boolean>(false);
  const [aboutUsTwo, setAboutUsTwo] = React.useState<boolean>(false);

  const isBigDevice = useMediaQuery("(min-width: 1024px)");

  const deviceSize: number = isBigDevice ? 350 : 250;

  return (
    <div style={{ overflow: "hidden" }}>
      <AboutUsRoot>
        <AboutUsSection>
          <div className={"offsetRoot"}>
            <Slide
              in={aboutUsOne}
              direction={"right"}
              timeout={{ enter: 1000 }}
            >
              <div
                className={"offsetWrapper"}
                style={{ position: "relative", top: "-110px" }}
              >
                <OffsetPictureCard imageUrl={"/images/especializa-1.png"} />
              </div>
            </Slide>
          </div>

          <AboutUsTextContainer>
            <div className="aboutUsTitle">
              <h2>Sobre nós</h2>
            </div>

            <Fade in={aboutUsOne} timeout={{ enter: 750 }}>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                illo aut maiores asperiores doloremque corporis, eaque molestias
                praesentium vero quasi labore, cum earum porro quam. Soluta amet
                sed nobis ipsam minus possimus quod molestias numquam vel
                expedita id, doloremque similique odit error. Quisquam, et
                inventore. Id, dicta ab doloribus cumque error tempora minima
                quam unde. Tempore, itaque! Ut ipsam quaerat alias sapiente. Est
                asperiores eligendi reiciendis nisi iure expedita doloremque a
                commodi maiores consequatur corrupti sint officia voluptas ea
                dignissimos qui ad nesciunt, molestias aut aspernatur blanditiis
                dolor autem. Et autem quos, est maiores omnis facere consectetur
                tenetur placeat veniam quam, facilis, eveniet voluptate hic
                corrupti culpa quidem voluptatum. Maiores, dolorem animi
                delectus ipsum quae ut est ipsam et saepe consequuntur labore
                deleniti accusantium voluptates! Voluptatem exercitationem
                blanditiis nostrum error possimus, quos laboriosam consequuntur?
                Saepe quibusdam modi omnis ducimus fuga soluta cumque debitis
                quam voluptatum! Dolorum, sapiente? Rem nihil doloremque
                voluptas vero, possimus distinctio, voluptate, suscipit qui
                consequatur similique facilis. Quo esse doloribus quidem non,
                fugiat aliquid perspiciatis, natus facere enim, ea porro dolore
                perferendis.
              </div>
            </Fade>
          </AboutUsTextContainer>
        </AboutUsSection>
      </AboutUsRoot>

      <AboutUsSecondRoot>
        <AboutUsSection>
          <div className={"offsetRoot-2"}>
            <Slide in={aboutUsTwo} direction={"left"} timeout={{ enter: 1000 }}>
              <div
                className={"offsetWrapper"}
                style={{ position: "relative", top: "-110px" }}
              >
                <OffsetPictureCard imageUrl={"/images/especializa-2.png"} />
              </div>
            </Slide>
          </div>

          <AboutUsTextContainer>
            <div className="aboutUsTitle">
              <h2>Nossa missão</h2>
            </div>

            <Fade in={aboutUsTwo} timeout={{ enter: 750 }}>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque inventore quisquam excepturi nesciunt dicta
                consectetur id suscipit, assumenda deserunt ea veritatis
                similique numquam labore? Laudantium labore eos debitis beatae
                id quo tempore est qui reiciendis reprehenderit impedit
                distinctio vel voluptatibus dignissimos eaque optio aliquid aut,
                cum, quis quibusdam aspernatur incidunt atque. Voluptatum
                tempore accusantium molestias! Inventore quasi itaque impedit
                tenetur id ad nihil, voluptate mollitia odit commodi maxime
                neque, dicta fuga. Quasi repellat eveniet alias autem tempora
                illum, laudantium ea, minus nemo sit numquam, distinctio nihil
                unde aliquid aspernatur sint ipsum mollitia. Qui, nam alias
                repudiandae debitis tenetur expedita harum sunt quae. Dolorem
                voluptates, possimus doloribus, fugiat assumenda deserunt
                nostrum hic ratione, illum quasi alias reiciendis laboriosam
                obcaecati quis! Quod reprehenderit voluptate laborum numquam
                obcaecati harum exercitationem? Rem porro corporis tenetur.
                Officiis dicta vel vero magni voluptatum ab, ex odio deserunt,
                molestias placeat quaerat, labore voluptas dolorem porro
                similique maiores!
              </div>
            </Fade>
          </AboutUsTextContainer>
        </AboutUsSection>
      </AboutUsSecondRoot>
    </div>
  );
};

export default AboutUs;
