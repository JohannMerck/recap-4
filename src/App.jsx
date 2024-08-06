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
  background-image: url(https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
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
