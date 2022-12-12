import React from "react";
import { Container, ContainerPai } from "./styles";

export default function Telefone({ nome, nome2, nome3 }) {
  return (
    <ContainerPai>
      <div id="telefone">{nome}</div>
      <Container />
      <div id="buscar">{nome3}</div>
      <div id="numero">{nome2}</div>
    </ContainerPai>
  );
}
