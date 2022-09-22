import React from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-employee" element={<CreateEmployee/>} />
        <Route exact path="/employee-list" element={<EmployeeList/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}