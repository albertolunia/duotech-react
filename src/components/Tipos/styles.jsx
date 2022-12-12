import styled from "styled-components";

export const Container = styled.select`
  width: 262px;
  height: 35px;

  background: #ffffff;
  border: 1px solid #2c2c2c;
  border-radius: 5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  option {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #666464;
  }
`;

export const Text = styled.p`
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
