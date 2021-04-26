import React from "react";
import DefenseCard from "../DefenseCard";
import styled from "styled-components";
import {
  AccountBalance,
  Assessment,
  Check,
  CreditCard,
  EmojiObjects,
  Facebook,
} from "@material-ui/icons";
import { Fade, Slide, useMediaQuery } from "@material-ui/core";

const DefenseSectionRoot = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  overflow: hidden;
`;

const DefenseSectionTitle = styled("h2")`
  font-family: "Suez One";
  margin-top: 10vh;
  color: #333;
  text-rendering: optimizeLegibility;
  font-size: 30px;
`;

const DefenseSectionContainer = styled("div")`
  margin-top: 5vh;
  margin-bottom: 10vh;

  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

interface Props {}

const DefenseSection = (props: Props) => {
  const [defenseAnimation, setDefenseAnimation] = React.useState<boolean>(
    false
  );
  const isBigDevice = useMediaQuery("(min-width: 1024px)");

  const deviceSize = isBigDevice ? 400 : 400;

  return (
    <div>
      <DefenseSectionRoot>
        <DefenseSectionTitle>
          Por que escolher a <span>Consultoria Especializa</span>?
        </DefenseSectionTitle>
        <DefenseSectionContainer>
          <div>
            <DefenseCard
              icon={Assessment}
              text={
                "A Consultoria Especializa acredita em o que faz; empresas que trabalham junto com a Especializa obtém retornos claros e objetivos"
              }
              title={"Resultados"}
            />
          </div>

          <div>
            <DefenseCard
              icon={EmojiObjects}
              text={
                "Através do trabalho realizado com diversas instituições educacionais, conseguimos analisar a situação por diversos ângulos e determinar o caminho certo para ajudar sua instituição atingir seus objetivos."
              }
              title={"Perspectiva"}
            />
          </div>

          <div>
            <DefenseCard
              icon={AccountBalance}
              text={
                "A Consultoria Especializa auxiliará formar e/ou reforçar os alicerces da sua instituição, garantindo que seus funcionários e alunos consigam alcançar metas e obter sucesso duradouro."
              }
              title={"Estrutura"}
            />
          </div>
        </DefenseSectionContainer>
      </DefenseSectionRoot>
    </div>
  );
};

export default DefenseSection;
