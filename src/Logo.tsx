import React from "react";
import pttLogo from "./assets/ptt_logo.png";
import { Box } from "@mui/material";

import "./index.css";

export default function Logo() {
  return (
    <Box>
      <img src={pttLogo} className="logo" alt="PTT logo" />
    </Box>
  );
}
