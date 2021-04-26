import React from "react"
import styled from "styled-components"

interface OffsetCardBaseProps {
  height: string
  width: string
  color: string
}

const OffsetCardBase = styled("div")<OffsetCardBaseProps>`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  height: 170px;
  width: 350px;
  background-color: ${props => props.color};
  position: relative;

  @media (min-width: 1024px) {
    height: ${props => props.height};
    width: ${props => props.width};
  }
`

interface OffsetCardImageContainerProps {
  url: string
  height: string
  width: string
}

const OffsetCardImageContainer = styled("div")<OffsetCardImageContainerProps>`
  width: ${props => `calc(${props.width} * 0.84)`};
  height: ${props => `calc(${props.height} * 1.078)`};
  width: calc(350px * 0.84);
  height: calc(170px * 1.078);
  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${props =>
    `translate(calc(${props.height} * -0.042), calc(${props.height} * 0.03972))`};

  @media (min-width: 1024px) {
    width: ${props => `calc(${props.width} * 0.84)`};
    height: ${props => `calc(${props.height} * 1.078)`};
  }
`

interface Props {
  cardHeight?: string
  cardWidth?: string
  cardColor?: string
  imageUrl?: string
}

const OffsetPictureCard = ({
  cardHeight = "428px",
  cardWidth = "802px",
  cardColor = "#8A95D3",
  imageUrl = `https://via.placeholder.com/${cardWidth}x${cardHeight}`,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "min-content",
      }}
    >
      <OffsetCardBase color={cardColor} height={cardHeight} width={cardWidth}>
        <OffsetCardImageContainer
          height={cardHeight}
          width={cardWidth}
          url={imageUrl}
        />
      </OffsetCardBase>
    </div>
  )
}

export default OffsetPictureCard
