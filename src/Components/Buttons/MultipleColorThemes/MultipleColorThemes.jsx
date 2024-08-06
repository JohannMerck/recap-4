import {
  StyledButton,
  StyledDeleteButton,
  StyledAddThemeButton,
} from "../StyledButtons";
import { StyledAddThemeWrapper } from "../../ColorForm/ColorFormStyles";

export default function ColorThemes() {
  return (
    <StyledAddThemeWrapper>
      <input type="dropdown" name="ColorThemes" value="DefaultTheme" />
      <StyledAddThemeButton>Add</StyledAddThemeButton>
      <StyledButton>Edit</StyledButton>
      <StyledDeleteButton>Delete</StyledDeleteButton>
    </StyledAddThemeWrapper>
  );
}
