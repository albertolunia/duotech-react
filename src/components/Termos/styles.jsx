import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin: 10px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;

export const Text = styled.label`
  margin-left: 5px;
`;
