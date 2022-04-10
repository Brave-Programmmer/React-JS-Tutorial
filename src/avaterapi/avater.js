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
function Avatar() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleClickOpen = () => {
    setOpen(!open);
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            variant="contained"
            sx={{ display: "flex", alignSelf: "center", width: 300 }}
            color="secondary"
            onClick={() => {
              if (name != "") {
                handleClickOpen();
              } else {
              }
            }}
          >
            Find Avatar
          </Button>
        </Stack>
      </Box>
      <Dialog open={open}>
        <Stack direction="row">
          <DialogTitle sx={{ marginRight: "100px" }}>Your Avater</DialogTitle>
          <Button
            onClick={() => {
              handleClickOpen();
            }}
          >
            x
          </Button>
        </Stack>
        <List sx={{ pt: 0 }}><img src={`https://joeschmoe.io/api/v1/${name}`} width="316" height="341"/></List>
      </Dialog>
    </>
  );
}

export default Avatar;
