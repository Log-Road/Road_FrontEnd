import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rendering from "../pages/Rendering";

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/rendering" element={<Rendering/>}/>
      </Routes>
    </BrowserRouter>
  )
}