import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "./utils/Themes";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
`

function App() {
  // Hooks
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
      <Container>Hello Video Streams</Container>
    </ThemeProvider>
    
  );
}

export default App;
