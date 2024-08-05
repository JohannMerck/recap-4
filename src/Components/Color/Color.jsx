import { useState } from "react";
import "./Color.css";

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
      {!deleteVisible ? (
        <button onClick={toggleDelete}>Delete</button>
      ) : (
        <div>
          <p className="color-card-confirmed">Confirmed?</p>
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
