import styled from "styled-components";
import { motion } from "framer-motion";
import { SvgIcon } from "@material-ui/core";
import { ArrowForward, ArrowLeft } from "@material-ui/icons";

const Root = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0%;
  white-space: normal;
  background-color: ${(props) => props.theme.palette.background.secondary};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1.875rem;
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  line-height: 53px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.8125rem;
    text-align: left;
  }
`;

const SliderContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0px 0px;
  position: relative;
`;

const CardRoot = styled.div`
  /* width: 375px; */
  width: 100%;
  height: auto;
  margin: 15px;
  min-height: 258.13px;

  color: ${(props) => props.theme.palette.primary.contrastText};
  background: ${(props) => props.theme.palette.primary.darker};
  box-shadow: 0px 3.08016px 3.08016px rgba(0, 0, 0, 0.25);
  border-radius: 20.5506px;
  padding: 40px;

  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 60px;
    margin: 0px;
    max-width: 650px;
  }

  @media (min-width: 1600px) {
    max-width: 750px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CardText = styled.div`
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-bottom: 35px;

  font-size: 1rem;
  line-height: 28px;

  @media (min-width: 1024px) {
    font-size: 1.475rem;
  }
`;

const CardProfileInfoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CardProfilePicture = styled.div`
  width: 85.07px;
  height: 85.07px;
  background: #e7e7e7;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
  }
`;

const CardNameLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

const CardProfileName = styled.div`
  font-weight: normal;
`;

const CardProfileLocation = styled.div``;

interface TestimonialCardProps {
  text: string;
  imageURL?: string;
  name: string;
  location: string;
}

const SliderNavigationContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  bottom: 5px;
  z-index: 900;

  @media (min-width: 1024px) {
    bottom: 0;
  }
`;

const SliderNavigationButtonRoot = styled.div`
  width: 51.03px;
  height: 51.03px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 20px;

  background: ${(props) => props.theme.palette.primary.light};
  border-radius: 50%;

  @media (min-width: 1024px) {
    width: 50.27px;
    height: 50.27px;
  }

  .MuiSvgIcon-root {
    fill: ${(props) => props.theme.palette.secondary.contrastText};
    font-size: 1.85rem;
  }
`;

export const TestimonialCard = ({
  imageURL = "https://via.placeholder.com/750",
  location,
  name,
  text,
}: TestimonialCardProps) => {
  return (
    <CardRoot>
      <CardContainer>
        <CardText>{text}</CardText>
        <CardProfileInfoContainer>
          <CardProfilePicture>
            <img
              src={imageURL}
              alt="Foto de cliente em depoimento sobre a empresa."
            />
          </CardProfilePicture>
          <CardNameLocationContainer>
            <CardProfileName>{name}</CardProfileName>
            <CardProfileLocation>{location}</CardProfileLocation>
          </CardNameLocationContainer>
        </CardProfileInfoContainer>
      </CardContainer>
    </CardRoot>
  );
};

interface TestimonialsLayoutProps {}

const TestimonialsLayout: React.FC<TestimonialsLayoutProps> = ({
  children,
}) => {
  return (
    <Root>
      <Container>
        <Title>Depoimentos.</Title>
        <SliderContainer>
          {children}

          <SliderNavigationContainer>
            <motion.div
              className="testimonial-back"
              variants={{
                hover: { scale: 1.1 },
                tap: { scale: 0.9 },
              }}
              whileTap="tap"
              whileHover="hover"
            >
              <SliderNavigationButtonRoot>
                <SvgIcon
                  component={ArrowForward}
                  style={{ transform: "rotate(180deg)" }}
                />
              </SliderNavigationButtonRoot>
            </motion.div>
            <motion.div
              className="testimonial-forward"
              variants={{
                hover: { scale: 1.1 },
                tap: { scale: 0.9 },
              }}
              whileTap="tap"
              whileHover="hover"
            >
              <SliderNavigationButtonRoot>
                <SvgIcon component={ArrowForward} />
              </SliderNavigationButtonRoot>
            </motion.div>
          </SliderNavigationContainer>
        </SliderContainer>
      </Container>
    </Root>
  );
};

export default TestimonialsLayout;
