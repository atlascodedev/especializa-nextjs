import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { ServiceCollection } from "../../../@types";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  cursor: pointer;
  border-radius: 6px;
`;

const ImageContainer = styled.div`
  width: auto;
  height: 269px;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media (min-width: 1024px) {
    height: 441px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  padding-top: 10px;
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1.15rem;
  text-shadow: 10px 0 30px #fff;
  font-weight: bold;
`;

type ServiceCard = Pick<
  ServiceCollection,
  "serviceName" | "servicePicture" | "slug" | "uuid"
>;

const SliderCard = ({
  serviceName,
  servicePicture,
  slug,
  uuid,
}: ServiceCard) => {
  return (
    <Link href={`/servicos/${slug}`}>
      <a style={{ display: "flex", justifyContent: "center" }}>
        <Root>
          <ImageContainer>
            <Image
              alt={servicePicture.imageDescription}
              src={servicePicture.imageURL}
            />
          </ImageContainer>
          <Title>{serviceName}</Title>
        </Root>
      </a>
    </Link>
  );
};

export default SliderCard;
