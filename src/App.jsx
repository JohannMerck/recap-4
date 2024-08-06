import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
// import { useState } from "react";
import useLocalStorageState from "./Hooks/useLocalStorageState";
import { uid } from "react-uid";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import { StyledHeadline } from "./Components/ColorForm/ColorFormStyles";
import styled from "styled-components";

const StyledBody = styled.body`
  background-image: url(https://uhdwallpapers.org/uploads/converted/23/10/20/blue-macos-sonoma-2560x1440_574494-rm-90.webp);
`;

function App() {
  const [colors, setColors] = useLocalStorageState("colors", initialColors);

  function handleSubmit(newColor) {
    if (!newColor.hex || !newColor.contrastText || !newColor.role) {
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
    <StyledBody>
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
    </StyledBody>
  );
}

export default App;
