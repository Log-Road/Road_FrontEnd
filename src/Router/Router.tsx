import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/user/SignUp";
import SignUpSelectRole from "../pages/user/SignUp(SelectRole)";
import SignUpSelectClass from "../pages/user/SignUp(Student_SelectClass)";
import UserInput from "../components/User/Input";
import Rendering from "../pages/Rendering";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpSelectUser" element={<SignUpSelectRole />} />
        <Route path="/SignUpSelectClass" element={<SignUpSelectClass />} />
        <Route path="userinput" element={<UserInput />} />
        <Route path="/rendering" element={<Rendering/>}/>
      </Routes>
    </BrowserRouter>
  );
}
