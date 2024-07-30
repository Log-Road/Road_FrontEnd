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
import SignUpEmail from "../pages/user/SignUpEmail";
import FindId from "../pages/user/FindId";
import FindPw from "../pages/user/FindPw";
import MainStudent from "../pages/main/Main_Student";
import ContestComponent from "../components/main/Contest";
import MainTeacher from "../pages/main/Main_Teacher";

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
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpSelectUser" element={<SignUpSelectRole />} />
        <Route path="/SignUpSelectClass" element={<SignUpSelectClass />} />
        <Route path="/SignupEmail" element={<SignUpEmail />} />
        <Route path="/UserInput" element={<UserInput />} />
        <Route path="/rendering" element={<Rendering/>}/>
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/MainStudent" element={<MainStudent />} />
        <Route path="/MainTeacher" element={<MainTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}
