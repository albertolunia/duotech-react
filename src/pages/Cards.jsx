import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Card
          number={15054}
          title={"Clientes"}
          icon={"./assets/images/clientes.svg"}
        />
        <Card
          number={15054}
          title={"Processos"}
          icon={"./assets/images/processos.svg"}
        />
        <Card
          number={354}
          title={"Novos Clientes"}
          icon={"./assets/images/novos.svg"}
        />
      </div>
    </div>
  );
}
