import {
  StyledButton,
  StyledDeleteButton,
  StyledAddThemeButton,
} from "../StyledButtons";
import { StyledAddThemeWrapper } from "../../ColorForm/ColorFormStyles";
import styled from "styled-components";
import { useState } from "react";
import { StyledInput } from "../../ColorForm/ColorFormStyles";

const StyledDropdown = styled.select`
  background-color: #3dd1e7;
  color: #3814b8;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  max-width: 220px;
  width: 220px;
  margin-left: 10px;
`;

export default function ColorThemesForm({ onEdit, onDelete }) {
  const [editTheme, setEditTheme] = useState(false);
  const [deleteTheme, setDeleteTheme] = useState(false);

  function toggleEditTheme() {
    setEditTheme(!editTheme);
  }

  function toggleDeleteTheme() {
    setDeleteTheme(!deleteTheme);
  }

  return (
    <form>
      <StyledAddThemeWrapper>
        <StyledDropdown>
          <option value="defaultTheme">Default Theme</option>
          <option value="secondTheme">Second Theme</option>
          <option value="thirdTheme">Third Theme</option>
        </StyledDropdown>
        <StyledAddThemeButton type="button">Add</StyledAddThemeButton>
        <StyledButton type="button" onClick={toggleEditTheme}>
          Edit
        </StyledButton>
        <StyledDeleteButton type="button" onClick={toggleDeleteTheme}>
          Delete
        </StyledDeleteButton>

        {editTheme && (
          <div>
            <StyledInput placeholder="Edit Theme Name" />
          </div>
        )}

        {deleteTheme && (
          <div>
            <p>Delete Theme?</p>
            <StyledButton>Yes</StyledButton>
            <StyledDeleteButton>No</StyledDeleteButton>
          </div>
        )}
      </StyledAddThemeWrapper>
    </form>
  );
}
