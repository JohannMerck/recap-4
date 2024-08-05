import { useState } from "react";
import "./Color.css";
import { StyledButton } from "../Buttons/StyledButton";
import { StyledDeleteButton } from "../Buttons/StyledButton";

export default function Color({ color, id, onDelete }) {
  const [isDelete, setIsDelete] = useState(false);

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

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-confirmed">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <StyledButton>Edit</StyledButton>

      {isDelete ? (
        <div>
          <p>Are you sure you want to delete?</p>
          <StyledButton onClick={confirmDelete}>Yes</StyledButton>
          <StyledDeleteButton onClick={cancelDelete}>No</StyledDeleteButton>
        </div>
      ) : (
        <StyledDeleteButton onClick={handleDelete}>Delete</StyledDeleteButton>
      )}
    </div>
  );
}
