import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Rendering from "../pages/Rendering";
import PersonnelInformation from "../pages/Admin/PersonnelInformation"
import ClubManagement from "../pages/Admin/ClubManagement";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/rendering" element={<Rendering/>}/>
        <Route path="/personnelInformation" element={<PersonnelInformation/>}/>
        <Route path="/clubManagement" element={<ClubManagement/>}/>
      </Routes>
    </BrowserRouter>
  );
}
