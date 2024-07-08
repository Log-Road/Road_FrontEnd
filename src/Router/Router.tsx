import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Rendering from "../pages/Rendering";
import PersonnelInformation from "../pages/Admin/Management/PersonnelInformation";
import ClubManagement from "../pages/Admin/Management/ClubManagement";
import ContestManagement from "../pages/Admin/Management/ContestManagement"
import ContestRegister from "../pages/Admin/Contest/ContestRegister";
import ContestUpdate from "../pages/Admin/Contest/ContestUpdate"
import ContestInformationCheck from "../pages/Admin/Contest/ContestInformationCheck"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/rendering" element={<Rendering/>}/>
        <Route path="/personnelInformation" element={<PersonnelInformation/>}/>
        <Route path="/clubManagement" element={<ClubManagement/>}/>
        <Route path="/contestManagement" element={<ContestManagement/>}/>
        <Route path="/contestRegister" element={<ContestRegister/>}/>
        <Route path="/contestUpdate" element={<ContestUpdate/>}/>
        <Route path="/contestInformationCheck" element={<ContestInformationCheck/>}/>
      </Routes>
    </BrowserRouter>
  );
}
