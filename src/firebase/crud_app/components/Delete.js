import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";

function Delete(props) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        size="small"
        color="error"
        variant="contained"
        onClick={async () => {
          await deleteDoc(doc(db, "todos", `${props.id}`));
          //   refreshing the page
          navigate("/");
          navigate("/crud");
        }}
      >
        Delete
      </Button>
    </>
  );
}

export default Delete;
