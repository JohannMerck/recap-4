import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
  }

  .input-group {
    display: flex;
    align-items: center;
  }

  .hex-color-box {
    width: 35px;
    height: 15px;
    background: ${({ $inputColor }) => $inputColor.hex || "black"};
  }

  .contrast-color-box {
    width: 35px;
    height: 15px;
    background: ${({ $inputColor }) => $inputColor.contrasttext || "black"};
  }

  .outerDiv {
    padding: 5px;
    border: 1px solid black;
    background: lightgray;
  }

  button {
    width: 100px;
    font-size: 14px;
    margin-left: 12px;
  }
`;

export function ColorForm({ handleSubmit }) {
  const [$inputColor, setInputColor] = useState({
    hex: "",
    contrasttext: "",
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
      role: event.target.role.value,
      hex: event.target.hex.value,
      contrastText: event.target.contrasttext.value,
    };
    console.log("Form data:", formData);
    handleSubmit(formData);
  }

  return (
    <StyledForm $inputColor={$inputColor} onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="role">Title</label>
        <input name="role" placeholder="Enter Title" />
      </fieldset>
      <fieldset>
        <label htmlFor="hex">Hex</label>
        <div className="input-group">
          <input
            onChange={handleInput}
            name="hex"
            placeholder="Enter Hex"
            value={$inputColor.hex}
          />
          <div className="outerDiv">
            <div className="hex-color-box"></div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="contrasttext">Contrast Text</label>
        <div className="input-group">
          <input
            onChange={handleInput}
            name="contrasttext"
            placeholder="Enter Contrast"
            value={$inputColor.contrasttext}
          />
          <div className="outerDiv">
            <div className="contrast-color-box"></div>
          </div>
        </div>
      </fieldset>
      <button>Add Color</button>
    </StyledForm>
  );
}
