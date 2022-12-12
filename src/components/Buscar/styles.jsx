import styled from "styled-components";

export const ContainerPai = styled.input`
  box-sizing: border-box;
  width: 351px;
  height: 35px;

  border: 1px solid #2c2c2c;
  border-radius: 5px;
  margin: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #b4b4b4;
  padding-left: 10px;
`;

export const Container = styled.div`
  display: flex;
  #buscar {
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #b4b4b4;
  }
  #img {
    margin-left: -57px;
    margin-top: 10px;
    width: 47px;
    height: 35px;

    background: #151515;
    border: 1px solid #2c2c2c;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
