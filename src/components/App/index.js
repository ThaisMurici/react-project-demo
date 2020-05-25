import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { lightTheme } from "../../global/theme";
import { GlobalStyle } from "../../global/styles";

import MainHeader from "../MainHeader";
import Posts from "../../screens/Posts";
import store from "../../store/index";

import { ApplicationContainer } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <ApplicationContainer>
          <GlobalStyle />
          <MainHeader />
          <Posts />
        </ApplicationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
