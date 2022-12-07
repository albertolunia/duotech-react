import React from "react";
import { Container, Img } from "./styles";
import { Title } from "./styles";
import { Number } from "./styles";

export default function Card({ icon, title, number }) {
  return (
    <Container>
      <div
        style={{
          width: 57,
          height: 58,
          borderRadius: 10,
          backgroundColor: "#FFFFFF",
          paddingTop: 16,
          paddingLeft: 10,
        }}
      >
        <Img src={icon} alt={title} />
      </div>
      <Title>{title}</Title>
      <Number>{number}</Number>
    </Container>
  );
}
