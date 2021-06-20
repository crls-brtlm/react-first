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
import styled from "styled-components";

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

  const handleOpenNav = () => {
    setState((prevState) => ({ ...prevState, open: true }));
  };

  const handleCloseNav = () => {
    setState((prevState) => ({ ...prevState, open: false }));
  };

  return (
    <Fragment>
      <IconButton onClick={handleOpenNav} data-testid="menu-button">
        <MenuIcon />
      </IconButton>
      <Drawer open={state.open} onEscapeKeyDown={handleCloseNav}>
        <List>
          <StyledTypography>Menu</StyledTypography>
          <StyledListItem button>
            <ListItemText>Item 1</ListItemText>
          </StyledListItem>
          <StyledListItem button>
            <ListItemText>Item 2</ListItemText>
          </StyledListItem>
          <StyledListItem button>
            <ListItemText>Item 3</ListItemText>
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
