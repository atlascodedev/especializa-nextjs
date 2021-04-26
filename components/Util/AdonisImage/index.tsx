import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import getAdonisOrderedTriple, {
  AdonisOrderedTriple,
} from "../../../helper/getAdonisOrderedTriple";
import styled from "styled-components";

type ObjectFitProperty = "fill" | "contain" | "cover" | "none" | "scale-down";

type ObjectPositionProperty = "right" | "left" | "top" | "bottom" | "center";

interface Props {
  imageURL: string;
  alt?: string;
  height?: number;
  mobileHeight?: number;
  xl?: number;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty | string;
  borderRadius?: string;
  small?: boolean;
}

const AdonisImage = ({
  imageURL,
  alt,
  height,
  mobileHeight,
  objectFit = "contain",
  objectPosition = "50% 50%",
  borderRadius = "0px",
  small,
  xl,
}: Props) => {
  const {
    fullImage,
    thumbnailBlurImage,
    thumbnailImage,
  }: AdonisOrderedTriple = getAdonisOrderedTriple(imageURL);

  let containerHeight: string | number = "0px";

  if (global.window && global.window.innerWidth < 768 && mobileHeight) {
    containerHeight = mobileHeight + "vw";
  } else if (global.window && global.window.innerWidth > 768 && height) {
    containerHeight = height + "vw";
  } else if (global.window && global.window.innerWidth > 1600 && xl) {
    containerHeight = xl + "vw";
  } else {
    containerHeight = "100%";
  }

  let activeImage: string = "";

  if (small) {
    activeImage = thumbnailImage;
  } else if (global.window && global.window.innerWidth < 768) {
    activeImage = thumbnailImage;
  } else if (global.window && global.window.innerWidth > 768) {
    activeImage = fullImage;
  }
  return (
    <div
      style={{
        height: `${containerHeight}`,
        width: "auto",
        borderRadius: `${borderRadius}`,
      }}
    >
      <LazyLoadImage
        effect={"blur"}
        width={"100%"}
        style={{
          objectFit: objectFit,
          borderRadius: borderRadius,
          objectPosition: objectPosition,
        }}
        alt={alt}
        height={"100%"}
        placeholderSrc={thumbnailBlurImage}
        src={
          global.window && global.window.innerWidth < 768
            ? thumbnailImage
            : fullImage
        }
      />
    </div>
  );
};

export default AdonisImage;
