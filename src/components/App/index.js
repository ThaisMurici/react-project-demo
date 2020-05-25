import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";

import { lightTheme } from "../../global/theme";
import { GlobalStyle } from "../../global/styles";

import MainHeader from "../MainHeader";
import Posts from "../../screens/Posts";
import store from "../../store/index";

import { ApplicationContainer } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={lightTheme}>
          <ApplicationContainer>
            <GlobalStyle />
            <MainHeader />
            <Posts />
          </ApplicationContainer>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default App;
