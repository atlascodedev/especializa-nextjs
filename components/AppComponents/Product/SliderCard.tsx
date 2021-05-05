import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 350px;
  height: 269px;

  @media (min-width: 1024px) {
    width: 589px;
    height: 441px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #333;
  font-size: 1.15rem;
  font-weight: bold;
`;

interface Props {
  title: string;
  url: string;
  img: string;
}

const SliderCard = ({
  img = "https://via.placeholder.com/750",
  title = "Placeholder title",
  url = "#",
}: Partial<Props>) => {
  return (
    <Root>
      <ImageContainer>
        <Image src={img} />
      </ImageContainer>
      <Title>{title}</Title>
    </Root>
  );
};

export default SliderCard;
