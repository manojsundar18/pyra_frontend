import { Login } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/" element={< />} /> */}
    </Routes>
  );
}