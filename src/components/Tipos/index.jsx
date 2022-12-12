import React from "react";
import { Container, Text } from "../Tipos/styles";

export default function TiposUsuario() {
  return (
    <Text>
      <div>Tipo de usuário</div>
      <Container>
        <option value="teste">Basic</option>
        <option value="teste">Premium</option>
        <option value="teste">Pro</option>
      </Container>
    </Text>
  );
}
