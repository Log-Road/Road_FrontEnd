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
import AdminMain from "../pages/Admin/Main"
import ProjectAcceptOrReject from "../pages/Admin/WriteManagement/ProjectAcceptOrReject";
import AwardsProject from "../pages/Admin/AwardsProject"
import AllWriteManagement from "../pages/Admin/WriteManagement/AllWriteManagement"

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
        <Route path="/adminMain" element={<AdminMain/>} />
        <Route path="/projectAcceptOrReject" element={<ProjectAcceptOrReject/>} />
        <Route path="/awardsProject" element={<AwardsProject/>} />
        <Route path="/allWriteManagement" element={<AllWriteManagement/>} />
      </Routes>
    </BrowserRouter>
  );
}
