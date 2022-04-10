import {
  Button,
  Stack,
  TextField,
  Box,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase";
import 'react-toastify/dist/ReactToastify.css'

function Tut_mui() {
  const mediaQuery = useMediaQuery("(max-width:538px)");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ToastContainer/>
        <Stack
          direction="column"
          sx={{ width: `${mediaQuery ? "70%" : "40%"}` }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#2e7d32", marginBottom: "5px" }}
          >
            Login
          </Typography>
          <TextField
            label="Enter your userName"
            color="success"
            sx={{ width: "100%", paddingBottom: "15px" }}
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            label="Enter your Password"
            color="success"
            sx={{ width: "100%", paddingBottom: "15px" }}
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            sx={{marginBottom:'10px'}}
            variant="contained"
            color="success"
            onClick={() => {
              signInWithEmailAndPassword(auth, Username, Password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  // ...
                  toast.success(`🚀 Welcome ${user.email}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                  toast.error(`Error!! ${errorMessage}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                });
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              createUserWithEmailAndPassword(auth, Username, Password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  // ...
                  toast.success(`🚀 Welcome ${user.email}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                  console.log(errorMessage);
                  toast.error(`Error!! ${errorMessage}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                });
            }}
          >
            SignUp
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Tut_mui;
