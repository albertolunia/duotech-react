import React from "react";
import { Container, ContainerPai } from "./styles";

export default function Buscar() {
  return (
    <Container>
      <ContainerPai />
      <div id="buscar">Buscar</div>
      <div id="img">
        <img src="./assets/images/lupa.svg" alt="buscar" />
      </div>
    </Container>
  );
}
