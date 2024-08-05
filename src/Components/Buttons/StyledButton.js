import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #3dd1e7;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: green;
  margin: 15px;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 5%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }
`;

export const StyledDeleteButton = styled(StyledButton)`
  background-color: yellow;
  color: red;
`;

export const StyledHeadline = styled.h3`
  margin: 10px;
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

export const StyledInput = styled.input`
  background-color: #3dd1e7;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledLabel = styled.label`
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 26px;
  letter-spacing: 0.4px;
  word-spacing: -1.6px;
  color: #6f40ff;
  font-weight: 700;
  text-decoration: underline solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: none;
`;

export const StyledAddButton = styled(StyledButton)`
  background-color: green;
  color: orange;
  width: 150%;
  margin: 30px;
`;

export const StyledCopyButton = styled(StyledButton)`
  background-color: purple;
  color: teal;
`;

export const StyledCopiedButton = styled(StyledButton)`
  background-color: green;
  color: orange;
`;
