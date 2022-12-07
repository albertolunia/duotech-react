import React from "react";
import { Button } from "./styles";

export default function Cadastrar({ cor }) {
  return (
    <div>
      <Button style={{ backgroundColor: cor }}>Cadastrar</Button>
    </div>
  );
}
