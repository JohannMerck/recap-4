import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import { uid } from "react-uid";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import { StyledHeadline } from "./Components/ColorForm/ColorFormStyles";

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

  const handleEditColor = (id, newColor) => {
    setColors((prevColors) =>
      prevColors.map((color) => (color.id === id ? newColor : color))
    );
  };

  return (
    <>
      <StyledHeadline>Theme Creator</StyledHeadline>
      <ColorForm handleSubmit={handleSubmit} />

      {colors.length > 0 ? (
        colors.map((color) => (
          <Color
            key={color.id}
            id={color.id}
            color={color}
            onDelete={handleDelete}
            onEdit={handleEditColor}
          />
        ))
      ) : (
        <p>Nothing here...</p>
      )}
    </>
  );
}

export default App;
