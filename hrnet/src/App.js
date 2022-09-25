import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, grey, lightGreen, lime } from "@mui/material/colors";
import GetEmployees from "./services/service";
import { mockedEmployee } from "./data/mockedEmployeeList";


import { POST_EMPLOYEE } from "./store/actions/constant";


const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[700],
    },
    secondary: {
      main: lime[900],
    },
    brown: {
      main: brown[300],
    },
    grey: {
      main: grey[300],
    },
  },
});

//GetEmployees();

export default function App() {
   const [tableData, setTableData] = useState([]);

  console.log(tableData)
  const dispatch = useDispatch();

  /* const newArray = tableData.map(obj => ({...obj}));
console.log(newArray) */

  useEffect(() => {
    
      fetch("../data/mockedEmployeeList.js").then((data) =>
        setTableData(mockedEmployee),
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
        <Route exact path="/create-employee" element={<CreateEmployee/>} />
        <Route exact path="/employee-list" element={<EmployeeList/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
  );
}