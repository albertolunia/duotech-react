import React from "react";
import { Container, ContainerPai } from "./styles";

export default function Cep({ cor, nome }) {
  return (
    <ContainerPai>
      <div style={{ color: cor }}>{nome}</div>
      <Container style={{ color: cor }} />
    </ContainerPai>
  );
}
