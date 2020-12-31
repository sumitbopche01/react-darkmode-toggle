import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        Hello World
        <button onClick={themeToggler}>Change Theme</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
