import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const ImageContainer = styled.div`
  width: auto;
  height: 269px;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    height: 441px;
  }
`;

const Image = styled.img`
  object-fit: contain;
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
  img = "https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2F1-7.webp?alt=media",
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
