import { CircularProgress } from "@mui/material";
import React from "react";
import "./loading-cover.scss";

const LoadingCover = () => {
  return (
    <div className="loading-wrapper">
      <CircularProgress className="loading-bar" />
    </div>
  );
};

export default LoadingCover;
