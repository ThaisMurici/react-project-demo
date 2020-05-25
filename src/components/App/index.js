import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../../global/theme";
import { GlobalStyle } from "../../global/styles";

import MainHeader from "../MainHeader";

import { ApplicationContainer } from "./styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ApplicationContainer>
        <GlobalStyle />
        <MainHeader />
      </ApplicationContainer>
    </ThemeProvider>
  );
}

export default App;
