import React from "react";
import Card from "../components/Card";
import Cadastrar from "../components/Buttons";
import LinkVer from "../components/VerMais";
import Cep from "../components/Cep";
import TiposUsuario from "../components/Tipos";
import Termos from "../components/Termos";
import Telefone from "../components/Telefone";
import Buscar from "../components/Buscar";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Cadastrar cor={"#000000"} />
          <Cadastrar cor={"#989898"} />
          <Cadastrar cor={"#F35151"} />
          <Cadastrar cor={"#34DD96"} />
        </div>
        <div>
          <LinkVer>Teste</LinkVer>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Cep cor={"#2C2C2C"} nome="CEP" />
          <Cep cor={"#F35151"} nome="CEP" />
          <Cep cor={"#FDAF18"} nome="CEP" />
        </div>
        <div>
          <TiposUsuario />
        </div>
        <div>
          <Termos />
        </div>
        <div>
          <Telefone
            nome="Telefone"
            nome2="+ _ _ (_ _) _ _ _ _ _-_ _ _ _"
            nome3="+ 55 (73) 9 9999-9999"
          />
        </div>
      </div>
      <div>
        <Buscar />
      </div>
    </div>
  );
}
