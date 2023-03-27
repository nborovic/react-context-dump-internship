import { StyledEngineProvider } from "@mui/material";

import MainPage from "pages/MainPage";
import ThemeProvider from "providers/ThemeProvider";
import DialogProvider from "providers/DialogProvider";

import "main.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <DialogProvider>
          <MainPage />
        </DialogProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
