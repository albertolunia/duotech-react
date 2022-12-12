import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Text,
} from "./styles";

export default function Termos() {
  return (
    <CheckboxContainer>
      <HiddenCheckbox />
      <Text> Li e concordo com os termos </Text>
    </CheckboxContainer>
  );
}
