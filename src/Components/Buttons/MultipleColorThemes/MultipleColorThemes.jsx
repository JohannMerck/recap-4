import {
  StyledButton,
  StyledDeleteButton,
  StyledAddThemeButton,
} from "../StyledButtons";
import {
  StyledAddThemeWrapper,
  StyledDropdown,
} from "../../ColorForm/ColorFormStyles";
import { initialThemes } from "../../../lib/themes";

export default function ColorThemes() {
  return (
    <StyledAddThemeWrapper>
      <StyledDropdown>
        <option value="defaultTheme">Default Theme</option>
        <option value="secondTheme">Second Theme</option>
        <option value="thirdTheme">Third Theme</option>
      </StyledDropdown>
      <StyledAddThemeButton>Add</StyledAddThemeButton>
      <StyledButton>Edit</StyledButton>
      <StyledDeleteButton>Delete</StyledDeleteButton>
    </StyledAddThemeWrapper>
  );
}
