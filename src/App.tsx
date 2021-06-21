import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import styled from "styled-components";
import "./App.css";
import SideNav from "./components/SideNav";
import { muiTheme } from "./containers/muiTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ROUTE_MAIN,
  ROUTE_PAGE_1,
  ROUTE_PAGE_3,
  ROUTE_TODOS,
} from "./constants/routes";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import MainPage from "./pages/MainPage";

const StyledMenuButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  .MuiSvgIcon-root {
    color: #fff;
  }
`;

function App() {
  return (
    <Router>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={muiTheme}>
          <div className="App">
            <StyledMenuButtonWrapper>
              <SideNav />
            </StyledMenuButtonWrapper>
            <Switch>
              <Route path={ROUTE_PAGE_1}>
                <Page1 />
              </Route>
              <Route path={ROUTE_TODOS}>
                <Page2 />
              </Route>
              <Route path={ROUTE_PAGE_3}>
                <Page3 />
              </Route>
              <Route path={ROUTE_MAIN} exact>
                <MainPage />
              </Route>
            </Switch>
          </div>
        </MuiThemeProvider>
      </StylesProvider>
    </Router>
  );
}

export default App;
