import "./App.css";
import React from "react";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {  Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      username: "",
      userMail: "",
      isTeacher: false,
    };
  }
  render() {
    //const {} = this.state;
    return (
      //<protectedRoute path="dashboard" element={<Dashboard />} component={<Dashboard />} />
      
      <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<SignUp />} />
          <Route element={<ProtectedRoute />} >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        
    );
  }
}

export default App;
