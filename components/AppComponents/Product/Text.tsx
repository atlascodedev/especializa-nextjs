import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding: 0px 10%;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    padding: 0px 15% 0px 0px;
    width: 95%;

    align-items: center;
  }
`;

const Text = (props: Props) => {
  return (
    <Container>
      <div>
        Soluções feitas sob medida para você e seu time. Conte com uma equipe de
        profissionais que irá analisar suas necessidades e construir a solução
        ideal para sua empresa.
      </div>
    </Container>
  );
};

export default Text;
