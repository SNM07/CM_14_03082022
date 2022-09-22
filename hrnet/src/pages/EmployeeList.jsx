import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockedEmployee } from "../data/mockedEmployeeList";
import { useSelector } from "react-redux";

const columns = [
  { field: "firstName", headerName: "first name" },
  { field: "lastName", headerName: "last name" },
  { field: "dateOfBirth", headerName: "date of birth" },
  { field: "startDate", headerName: "start date" },
  { field: "department", headerName: "department" },
  { field: "street", headerName: "street" },
  { field: "city", headerName: "city" },
  { field: "state", headerName: "state" },
  { field: "zipCode", headerName: "zip code" },
];

console.log(mockedEmployee);

const EmployeeList = () => {
  const [tableData, setTableData] = useState([]);

  /* const employeeForLocalStorage = useSelector(state => state.data.employees);
  console.log(employeeForLocalStorage) */

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("../data/mockedEmployeeList.js").then((data) =>
      setTableData(mockedEmployee)
    );
  });

  let employeesList =
    JSON.parse(window.localStorage.getItem("employees")) || tableData;

  let updatedEmployeesList = tableData.concat(employeesList);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={updatedEmployeesList} columns={columns} pageSize={100} />
    </div>
  );
};

export default EmployeeList;
