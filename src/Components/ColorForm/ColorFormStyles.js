import styled from "styled-components";

export const StyledForm = styled.form`
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
`;

export const StyledInput = styled.input`
  background-color: #3dd1e7;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  max-width: 220px;
  color: #3814b8;
`;

export const StyledLabel = styled.label`
  font-size: 25px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #c60c31;
  margin: 5px;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
    1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
    1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
    1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2);
`;

export const StyledHeadline = styled.h3`
  font-size: 70px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: yellow;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px #957dad, 1px 2px 0px #957dad, 1px 3px 0px #957dad,
    1px 4px 0px #957dad, 1px 5px 0px #957dad, 1px 6px 0px #957dad,
    1px 10px 5px rgba(16, 16, 16, 0.5), 1px 15px 10px rgba(16, 16, 16, 0.4),
    1px 20px 30px rgba(16, 16, 16, 0.3), 1px 25px 50px rgba(16, 16, 16, 0.2);
`;

export const StyledInputWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledAddThemeWrapper = styled.section`
  display: flex;
  align-items: center;
`;
