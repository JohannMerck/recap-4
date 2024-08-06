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

export const StyledAddThemeButton = styled(StyledButton)`
  background-color: green;
  color: orange;
`;
