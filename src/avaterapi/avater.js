import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Nav from "./component/Nav";
import { spacing, width } from "@mui/system";
function avater() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Nav />
      <Box sx={{ mx: "auto", width: 520, display: "flex", height: "80vh" }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ my: "auto", width: "100%" }}
        >
          <TextField
            sx={{ mx: "auto", width: 300 }}
            label="Enter Your Name"
            color="secondary"
            fullWidth
          />
          <Button
            variant="contained"
            sx={{ display: "flex", alignSelf: "center", width: 300 }}
            color="secondary"
          >
            Find Avatar
          </Button>
        </Stack>
      </Box>
      <Button variant="outlined" onClick={()=>{handleClickOpen()}}>
        Open simple dialog
      </Button>
      <Dialog open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}></List>
      </Dialog>
      {/* <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography>Name</Typography>
          </CardContent>
        </Card>
      </Box> */}
    </>
  );
}

export default avater;
