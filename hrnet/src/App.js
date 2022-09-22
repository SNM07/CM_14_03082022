import React from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown, grey, lightGreen, lime } from "@mui/material/colors";


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

export default function App() {
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