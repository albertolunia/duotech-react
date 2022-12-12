import React from "react";
import { Button } from "./styles";

export default function Cadastrar({ cor, cor2 }) {
  return (
    <div>
      <Button style={{ backgroundColor: cor, color: cor2 }}>Cadastrar</Button>
    </div>
  );
}
