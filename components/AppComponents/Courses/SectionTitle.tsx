import React from "react";
import styled from "styled-components";

interface Props {}

const Root = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  display: flex;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  margin-top: 15%;

  @media (min-width: 1024px) {
    margin-top: 5%;
  }
`;

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default SectionTitle;
