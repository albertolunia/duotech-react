import styled from "styled-components";

export const Container = styled.input`
  width: 250px;
  height: 35px;

  border: 1px solid;
  border-radius: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 10px;

  color: #151515;
`;

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  #telefone {
    margin-bottom: 5px;
    margin-left: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  #buscar {
    position: absolute;
    margin-left: 10px;
    margin-top: 30px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000;
  }

  #numero {
    margin-top: 2px;
    margin-left: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    color: #a4a6b2;
  }
`;
