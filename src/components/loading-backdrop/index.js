import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const LoadingBackDrop = (props) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 10 }} open={props.isWait}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackDrop;
