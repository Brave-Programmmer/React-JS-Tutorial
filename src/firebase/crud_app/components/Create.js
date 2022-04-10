import { Box, Button, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../../../firebase";
function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: "100%",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>
        <TextField
          color="secondary"
          label="Enter Todo Title"
          sx={{ width: "40%", marginY: "10px" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          color="secondary"
          label="Enter Todo Description"
          sx={{ width: "40%" }}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <Button
          color="secondary"
          variant="contained"
          sx={{ width: "40%", marginTop: "10px" }}
          onClick={async () => {
            if (title == "" && desc == "") {
              toast.error("Please enter title or description", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else if (title != "" && desc != "") {
              const docSnap = await addDoc(collection(db, "todos"), {
                title: title,
                desc: desc,
              });
              toast.success('Todo created successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            }
          }}
        >
          Add
        </Button>
      </Box>{" "}
    </>
  );
}

export default Create;
