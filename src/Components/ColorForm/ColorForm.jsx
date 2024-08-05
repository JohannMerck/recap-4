import { useState } from "react";
import styled from "styled-components";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
} from "../Buttons/StyledButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
  }

  .input-container {
    display: flex;
    align-items: center;
  }

  button {
    width: 150px;
    font-size: 14px;
    margin-left: 65px;
    border-radius: 10px;
    margin: 15px;
  }
`;

export function ColorForm({ handleSubmit }) {
  const [$inputColor, setInputColor] = useState({});

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
      role: event.target.role.value,
      hex: event.target.hex.value,
      contrastText: event.target.contrasttext.value,
    };

    handleSubmit(formData);
  }

  return (
    <StyledForm $inputColor={$inputColor} onSubmit={onSubmit}>
      <fieldset>
        <StyledLabel htmlFor="role">Title</StyledLabel>
        <StyledInput name="role" placeholder="Enter Title" />
      </fieldset>
      <fieldset>
        <StyledLabel htmlFor="hex">Hex</StyledLabel>
        <div className="input-container">
          <StyledInput
            onChange={handleInput}
            name="hex"
            placeholder="Enter Hex"
            value={$inputColor.hex}
          />
        </div>
      </fieldset>
      <fieldset>
        <StyledLabel htmlFor="contrasttext">Contrast</StyledLabel>
        <div className="input-container">
          <StyledInput
            onChange={handleInput}
            name="contrasttext"
            placeholder="Enter Contrast"
            value={$inputColor.contrasttext}
          />
        </div>
      </fieldset>
      <StyledButton>Add Color</StyledButton>
    </StyledForm>
  );
}
