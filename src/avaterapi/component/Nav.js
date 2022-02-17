import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Avater
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
