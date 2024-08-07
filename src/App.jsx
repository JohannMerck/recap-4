import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorThemesForm from "./Components/Buttons/MultipleColorThemes/ColorThemes";
import useLocalStorageState from "./Hooks/useLocalStorageState";
import { uid } from "react-uid";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import { StyledHeadline } from "./Components/ColorForm/ColorFormStyles";
import styled from "styled-components";

const StyledBody = styled.body`
  background-image: url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  padding: 10px;
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
      <ColorThemesForm></ColorThemesForm>
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
