import { AppBar, Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <AppBar position="static">
      <Typography variant="h2">Todo App</Typography>
    </AppBar>
  );
}

export default Header;
