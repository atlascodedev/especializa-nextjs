import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  height: 100%;
  width: 75%;
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 1.5rem;
  display: flex;
  align-items: flex-end;
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
