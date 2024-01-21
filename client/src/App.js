import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
`

function App() {
  // Hooks
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Sidebar />
          Hello Video Streams</Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
