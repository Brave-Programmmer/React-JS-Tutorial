import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
function Mui() {
  const mediaQuery = useMediaQuery("(max-width:446px)");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="column"
          sx={{ width: `${mediaQuery ? "70%" : "40%"}` }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#2e7d32", marginBottom: "20px" }}
          >
            Login
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            label="Enter your Username"
            color="success"
            variant="outlined"
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(Username);
            }}
          />
          <TextField
            sx={{ marginY: "10px", width: "100%" }}
            label="Enter your Password"
            color="success"
            variant="outlined"
          />
          <Button variant="contained" color="success">
            Login
          </Button>
        </Stack>
      </Box>
      
    </>
  );
}

export default Mui;
