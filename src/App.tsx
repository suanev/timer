import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CyclesContextProvider } from "./contexts/CyclesContext";
import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/themes/default";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
