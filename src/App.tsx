import { MuiThemeProvider, Tooltip } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import SideNav from "./components/SideNav";
import { muiTheme } from "./containers/muiTheme";
import styled from "styled-components";

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
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <StyledMenuButtonWrapper>
            <SideNav />
          </StyledMenuButtonWrapper>
          <header className="App-header">
            <Tooltip title="You are over an alert">
              <Alert severity="warning">
                This is just a Material UI test alert
              </Alert>
            </Tooltip>
            <div>
              <Counter />
            </div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
