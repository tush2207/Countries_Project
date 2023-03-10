import { Typography } from "@mui/material";
import React from "react";

const Title = ({ Title }) => {
  return (
    <Typography variant="h5" sx={{ mb: 2  , fontWeight:"700" , fontFamily:"serif"}}>
      {Title}
    </Typography>
  );
};

export default Title;
