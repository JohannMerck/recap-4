import { useState } from "react";
import { StyledAddButton } from "../Buttons/StyledButtons";
import { StyledForm, StyledInput, StyledLabel } from "./ColorFormStyles";
import { StyledInputWrapper } from "./ColorFormStyles";
import ColorThemes from "../Buttons/MultipleColorThemes/MultipleColorThemes";

export function ColorForm({ handleSubmit }) {
  const [$inputColor, setInputColor] = useState({
    role: "",
    hex: "#000000",
    contrasttext: "#ffffff",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setInputColor((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const formData = {
      role: $inputColor.role,
      hex: $inputColor.hex,
      contrastText: $inputColor.contrasttext,
    };

    if (!formData.role || !formData.hex || !formData.contrastText) {
      return;
    }

    handleSubmit(formData);

    setInputColor({
      role: "",
      hex: "#000000",
      contrasttext: "#ffffff",
    });
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <fieldset>
        <ColorThemes></ColorThemes>
        <StyledLabel htmlFor="role">Title</StyledLabel>
        <StyledInput
          name="role"
          placeholder="Enter Title"
          value={$inputColor.role}
          onChange={handleInput}
        />
      </fieldset>
      <fieldset>
        <StyledLabel htmlFor="hex">Hex</StyledLabel>
        <StyledInputWrapper>
          <StyledInput
            onChange={handleInput}
            name="hex"
            placeholder="Enter Hex"
            value={$inputColor.hex}
            type="text"
          />
          <StyledInput
            type="color"
            name="hex"
            value={$inputColor.hex}
            onChange={handleInput}
          />
        </StyledInputWrapper>
      </fieldset>
      <fieldset>
        <StyledLabel htmlFor="contrasttext">Contrast</StyledLabel>
        <StyledInputWrapper>
          <StyledInput
            onChange={handleInput}
            name="contrasttext"
            placeholder="Enter Contrast"
            value={$inputColor.contrasttext}
            type="text"
          />
          <StyledInput
            type="color"
            name="contrasttext"
            value={$inputColor.contrasttext}
            onChange={handleInput}
          />
        </StyledInputWrapper>
      </fieldset>
      <StyledAddButton type="submit">Add Color</StyledAddButton>
    </StyledForm>
  );
}
