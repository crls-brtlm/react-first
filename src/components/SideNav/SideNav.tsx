import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  ROUTE_PAGE_1,
  ROUTE_PAGE_3,
  ROUTE_TODOS,
} from "../../constants/routes";
import { TRootState } from "../../reducers/counterReducer";

const StyledTypography = styled(Typography)`
  padding: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StyledListItem = styled(ListItem)`
  min-width: 10rem;
`;

const StyledDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const StyledTop = styled.div``;

const StyledBottom = styled.div`
  padding: 1rem;
`;

interface ISideNavProps {}

const SideNav = (props: ISideNavProps) => {
  const counterValue = useSelector((state: TRootState) => state);
  const [state, setState] = useState({
    open: false,
  });
  const history = useHistory();

  const handleOpenNav = () => {
    setState((prevState) => ({ ...prevState, open: true }));
  };

  const handleCloseNav = () => {
    setState((prevState) => ({ ...prevState, open: false }));
  };

  const handleClickPage1 = () => {
    history.push(ROUTE_PAGE_1);
  };

  const handleClickTodosPage = () => {
    history.push(ROUTE_TODOS);
  };

  const handleClickPage3 = () => {
    history.push(ROUTE_PAGE_3);
  };

  return (
    <Fragment>
      <IconButton onClick={handleOpenNav} data-testid="menu-button">
        <MenuIcon />
      </IconButton>
      <Drawer
        open={state.open}
        onEscapeKeyDown={handleCloseNav}
        onClose={handleCloseNav}
      >
        <StyledDrawerContent>
          <StyledTop>
            <List>
              <StyledTypography>Menu</StyledTypography>
              <StyledListItem button onClick={handleClickPage1}>
                <ListItemText>Page 1</ListItemText>
              </StyledListItem>
              <StyledListItem button onClick={handleClickTodosPage}>
                <ListItemText>TodosPage</ListItemText>
              </StyledListItem>
              <StyledListItem button onClick={handleClickPage3}>
                <ListItemText>Page 3</ListItemText>
              </StyledListItem>
              <Divider />
              <StyledListItem button onClick={handleCloseNav}>
                <ListItemText>Close</ListItemText>
              </StyledListItem>
            </List>
          </StyledTop>
          <StyledBottom>Counter is: {counterValue}</StyledBottom>
        </StyledDrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default SideNav;
