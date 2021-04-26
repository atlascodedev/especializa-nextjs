import styled from "styled-components";
import { motion } from "framer-motion";
import { ListItem } from "@material-ui/core";

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.background.main};
  width: 100%;
  height: auto;
  padding: 5% 0%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.primary.main};

  font-size: 1.815rem;

  @media (min-width: 1024px) {
    font-size: 2.815rem;
  }
`;

const SliderContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0px 0px;
  position: relative;
`;

export interface PartnerCardProps {
  imageURL?: string;
  name?: string;
  websiteURL?: string;
}

const CardRoot = styled.div`
  width: 220px;
  height: 140.34px;
  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  a {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const PartnerCard = ({
  imageURL = "https://via.placeholder.com/750",
  name = "Placeholder Name",
  websiteURL = "#",
}: PartnerCardProps) => {
  return (
    <CardRoot>
      <ListItem href={websiteURL} component={"a"}>
        <img src={imageURL} alt={`${name} - logo`} />
      </ListItem>
    </CardRoot>
  );
};

export interface PartnersLayoutProps {}

const PartnersLayout: React.FC<PartnersLayoutProps> = ({ children }) => {
  return (
    <Root>
      <Container>
        <Title>Nossos parceiros</Title>
        <SliderContainer>{children}</SliderContainer>
      </Container>
    </Root>
  );
};

export default PartnersLayout;
