import React from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../../global/theme";
import { GlobalStyle } from "../../global/styles";

import MainHeader from "../MainHeader";
import Posts from "../../screens/Posts";

import { ApplicationContainer } from "./styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ApplicationContainer>
        <GlobalStyle />
        <MainHeader />
        <Posts />
      </ApplicationContainer>
    </ThemeProvider>
  );
}

export default App;
