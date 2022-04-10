import React from 'react'
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Nav(props) {
  return (
  <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default Nav