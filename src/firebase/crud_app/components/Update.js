import {
  Button,
  Dialog,
  DialogTitle,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../../firebase";

function Update(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [newtitle, setNewtitle] = useState("");
  const [newDesc, setnewDesc] = useState("");
  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        size="small"
        color="info"
        variant="contained"
        onClick={() => {
          handleClickOpen();
        }}
      >
        Update
      </Button>
      <Dialog open={open}>
        <Stack direction="row">
          <DialogTitle sx={{ marginRight: "100px" }}>Updating Todo</DialogTitle>
          <Button
            onClick={() => {
              handleClickOpen();
            }}
          >
            x
          </Button>
        </Stack>
        <List
          sx={{
            pt: 0,
            display: "flex",
            flexDirection: "column",
            paddingX: "10px",
          }}
        >
          <Stack spacing={2} direction="column">
            <TextField
              color="secondary"
              label="Enter Title"
              value={newtitle}
              onChange={(e) => {
                setNewtitle(e.target.value);
              }}
            />
            <TextField
              color="secondary"
              label="Enter Description"
              value={newDesc}
              onChange={(e) => {
                setnewDesc(e.target.value);
              }}
            />
            <Button
              color="secondary"
              variant="contained"
              onClick={async () => {
                const washingtonRef = doc(db, "todos", `${props.id}`);
                updateDoc(washingtonRef, {
                  title: newtitle,
                  desc: newDesc,
                }).then(() => {
                  toast.success("Todo Updated !!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  handleClickOpen();
                  navigate("/");
                  navigate("/crud");
                });
              }}
            >
              Update
            </Button>
          </Stack>
        </List>
      </Dialog>
    </>
  );
}

export default Update;
