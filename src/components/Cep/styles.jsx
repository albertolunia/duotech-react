import styled from "styled-components";

export const Container = styled.input`
  width: 112px;
  height: 35px;

  border: 1px solid;
  border-radius: 5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #151515;
  padding-left: 10px;
`;

export const ContainerPai = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  div {
    margin-bottom: 5px;
    margin-left: 5px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`;
