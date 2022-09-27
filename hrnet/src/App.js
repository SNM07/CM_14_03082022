import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { mockedEmployee } from "./data/mockedEmployeeList";
import { theme as GlobalTheme } from "./styles/styles"

import { POST_EMPLOYEE } from "./store/actions/constant";

let theme = GlobalTheme;

export default function App() {
  const [tableData, setTableData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../data/mockedEmployeeList.js").then(
      (data) => setTableData(mockedEmployee),
      console.log(tableData)
    );
    dispatch({
      type: POST_EMPLOYEE,
      payload: tableData,
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-employee" element={<CreateEmployee />} />
          <Route exact path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
