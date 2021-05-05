import { ButtonBase, SvgIcon } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

type ArrowButtonDirection = "left" | "right" | "up" | "down";

const Root = styled(ButtonBase)<{
  direction: ArrowButtonDirection;
  color?: string;
}>`
  color: #f15d3c !important;
  width: 66px;
  height: 66px;
  border: 2px solid #f15d3c !important;
  box-sizing: border-box;
  border-radius: 12.7294px !important;

  .MuiSvgIcon-root {
    font-size: 2rem;
    fill: ${(props) => (props.color ? props.color : "#f15d3c")};
    transform: ${(props) =>
      props.direction === "down"
        ? "rotate(-90deg)"
        : props.direction === "up"
        ? "rotate(90deg)"
        : props.direction === "right"
        ? "rotateY(180deg)"
        : "initial"};
  }
`;

interface Props {
  color?: string;
  direction?: ArrowButtonDirection;
}

const NavigationButton = ({ color, direction = "left" }: Props) => {
  return (
    <Root color={color} direction={direction}>
      <SvgIcon component={ArrowBack} />
    </Root>
  );
};

export default NavigationButton;
