import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/user/SignUp";
import SignUpSelectRole from "../pages/user/SignUp(SelectRole)";
import SignUpSelectClass from "../pages/user/SignUp(Student_SelectClass)";
import UserInput from "../components/User/Input";
import Rendering from "../pages/Rendering";
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
