import React from "react";
import Telefone from "../components/Telefone";
import Cadastrar from "../components/Buttons";

export default function App() {
  return (
    <div
      style={{
        width: 406,
        height: 500,
        left: 553,
        top: 241,

        background:
          "linear-gradient(158.54deg, #151515 16.54%, #4F5C70 93.45%)",
        borderRadius: 10,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <div
        style={{
          width: 108,
          height: 108,
          left: 702,
          top: 278,

          background: "#FFFFFF",
          color: "#000",
          borderRadius: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: 18,
          lineHeight: 27,
          marginTop: 37,
          marginBottom: 56,
        }}
      >
        LOGO
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: 19,
        }}
      >
        <Telefone cor={"#fff"} nome="Email" nome3="john.doe@email.com">
          Email
        </Telefone>
        <Telefone cor={"#fff"} nome="Senha" nome3="*********">
          Senha
        </Telefone>
      </div>

      <div style={{ marginBottom: 11 }}>
        <Cadastrar cor={"#FFF"} cor2={"#000"} />
      </div>
      <div style={{ color: "#fff" }}>Esqueceu a senha?</div>
    </div>
  );
}
