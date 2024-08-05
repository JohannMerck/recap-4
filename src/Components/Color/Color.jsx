import { useState } from "react";
import "./Color.css";
import { StyledButton } from "../Buttons/StyledButton";
import { StyledDeleteButton } from "../Buttons/StyledButton";

export default function Color({ color, onDelete }) {
  const [deleteVisible, setDeleteVisible] = useState(false);

  function toggleDelete() {
    setDeleteVisible(!deleteVisible);
  }
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
      {!deleteVisible ? (
        <StyledDeleteButton onClick={toggleDelete}>Delete</StyledDeleteButton>
      ) : (
        <div>
          <p className="color-card-confirmed">Are you sure?</p>
          <button onClick={toggleDelete}>Cancel</button>
          <button
            onClick={() => {
              onDelete(color.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
