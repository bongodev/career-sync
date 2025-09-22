import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"; // adjust the path if needed

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}
