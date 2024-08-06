import { useState } from "react";
import "./Color.css";
import { StyledButton } from "../Buttons/StyledButtons";
import { StyledDeleteButton } from "../Buttons/StyledButtons";
import { CopyToClipboard } from "../Buttons/CopyToClipboard/CopyToClipBoard";
import CheckColorContrast from "../FetchAPI/FetchAPI";
import { StyledColor, StyledColorInput } from "./ColorStyles";

export default function Color({ color, id, onDelete, onEdit }) {
  const [isDelete, setIsDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editColor, setEditColor] = useState({ ...color });

  const handleDelete = () => {
    setIsDelete(true);
  };

  const confirmDelete = () => {
    onDelete(id);
    setIsDelete(false);
  };

  const cancelDelete = () => {
    setIsDelete(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(id, editColor);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditColor({ ...color });
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditColor((prevColor) => ({
      ...prevColor,
      [name]: value,
    }));
  };

  return (
    <StyledColor
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <div>
          <StyledColorInput>
            <input
              type="text"
              name="role"
              value={editColor.role}
              onChange={handleChange}
            />
          </StyledColorInput>
          <StyledColorInput>
            <input
              type="text"
              name="hex"
              value={editColor.hex}
              onChange={handleChange}
            />
            <input
              type="color"
              name="hex"
              value={editColor.hex}
              onChange={handleChange}
            />
          </StyledColorInput>
          <StyledColorInput>
            <input
              type="text"
              name="contrastText"
              value={editColor.contrastText}
              onChange={handleChange}
            />
            <input
              type="color"
              name="contrastText"
              value={editColor.contrastText}
              onChange={handleChange}
            />
          </StyledColorInput>
          <StyledButton onClick={handleSaveEdit}>Save</StyledButton>
          <StyledDeleteButton onClick={handleCancelEdit}>
            Cancel
          </StyledDeleteButton>
        </div>
      ) : (
        <>
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          <CheckColorContrast />
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
      <CopyToClipboard color={color} />

      {isDelete ? (
        <div>
          <p>Are you sure you want to delete?</p>
          <StyledButton onClick={confirmDelete}>Yes</StyledButton>
          <StyledDeleteButton onClick={cancelDelete}>No</StyledDeleteButton>
        </div>
      ) : (
        <StyledDeleteButton onClick={handleDelete}>Delete</StyledDeleteButton>
      )}
    </StyledColor>
  );
}
