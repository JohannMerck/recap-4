import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import { uid } from "react-uid";
import { ColorForm } from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmit(newColor) {
    if (!newColor.hex || !newColor.contrastText || !newColor.role) {
      // console.error("Form data is incomplete:", newColor);
      return;
    }

    const colorObject = { ...newColor, id: uid(newColor) };
    setColors((prevColors) => [colorObject, ...prevColors]);
  }

  function handleDelete(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  return (
    <>
      <ColorForm handleSubmit={handleSubmit} />
      <h1>Theme Creator</h1>

      {colors.length > 0 ? (
        colors.map((color) => (
          <Color
            key={color.id}
            id={color.id}
            color={color}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>No colors.. start by adding one!</p>
      )}
    </>
  );
}

export default App;
