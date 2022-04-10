import {
  Box,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Delete from "./Delete";
import Update from "./Update";

function Read() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    setData(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        data: doc.data(),
        id: doc.id,
      }))
    );
    if (data != []) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      <Box
        component="span"
        sx={{
          display: "block",
          mx: "2px",
          transform: "scale(1)",
        }}
      >
        {loading == true ? (
          <LinearProgress
            sx={{ marginTop: "10px", marginX: "40%" }}
            color="secondary"
          />
        ) : (
          data.map((data, index) => {
            return (
              <>
                <Card sx={{ minWidth: 275 }} key={index}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Todo #{index + 1}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {data.title}
                    </Typography>

                    <Typography variant="body2">
                      {data.desc}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                <Update id={data.id} />
                <Delete id={data.id} />
              </CardActions>
                </Card>
              </>
            );
          })
        )}
      </Box>
    </>
  );
}

export default Read;
