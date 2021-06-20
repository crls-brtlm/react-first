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
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  ROUTE_PAGE_1,
  ROUTE_PAGE_2,
  ROUTE_PAGE_3,
} from "../../constants/routes";

const StyledTypography = styled(Typography)`
  padding: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StyledListItem = styled(ListItem)`
  min-width: 10rem;
`;

interface ISideNavProps {}

const SideNav = (props: ISideNavProps) => {
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

  const handleClickPage2 = () => {
    history.push(ROUTE_PAGE_2);
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
        <List>
          <StyledTypography>Menu</StyledTypography>
          <StyledListItem button onClick={handleClickPage1}>
            <ListItemText>Page 1</ListItemText>
          </StyledListItem>
          <StyledListItem button onClick={handleClickPage2}>
            <ListItemText>Page 2</ListItemText>
          </StyledListItem>
          <StyledListItem button onClick={handleClickPage3}>
            <ListItemText>Page 3</ListItemText>
          </StyledListItem>
          <Divider />
          <StyledListItem button onClick={handleCloseNav}>
            <ListItemText>Close</ListItemText>
          </StyledListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default SideNav;
