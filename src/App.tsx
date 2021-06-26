import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import SideNav from "./components/SideNav";
import { configureStore } from "./configureStore";
import {
  ROUTE_MAIN,
  ROUTE_PAGE_1,
  ROUTE_PAGE_3,
  ROUTE_POSTS_PAGE,
  ROUTE_POST_PAGE,
  ROUTE_TODOS,
} from "./constants/routes";
import { muiTheme } from "./containers/muiTheme";
import MainPage from "./pages/MainPage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/TodosPage";
import Page3 from "./pages/Page3";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import { QueryClient, QueryClientProvider } from "react-query";

const store = configureStore();

const queryClient = new QueryClient();

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
                  <Route path={ROUTE_POST_PAGE}>
                    <PostPage />
                  </Route>
                  <Route path={ROUTE_POSTS_PAGE}>
                    <PostsPage />
                  </Route>
                  <Route path={ROUTE_MAIN} exact>
                    <MainPage />
                  </Route>
                </Switch>
              </div>
            </MuiThemeProvider>
          </StylesProvider>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
