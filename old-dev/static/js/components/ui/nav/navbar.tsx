import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Anima
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
