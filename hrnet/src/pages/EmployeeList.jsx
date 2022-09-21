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

  /* const employees = useSelector(state => state.data.employees) || localStorage.getItem('employees');
console.log(employees) */

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  /*  useEffect(() => {
    fetch("../data/mockedEmployeeList.js")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])  */
  useEffect(() => {
    fetch("../data/mockedEmployeeList.js").then((data) =>
      setTableData(mockedEmployee)
    );
  });
  console.log(tableData);

  /* const employeeForLocalStorage = useSelector(state => state.data.employees);

  console.log(employeeForLocalStorage)
 */
  let employeesList =
    JSON.parse(window.localStorage.getItem("employees")) || tableData;
  console.log(employeesList);

  let updatedEmployeesList = tableData.concat(employeesList);
  console.log(updatedEmployeesList);

  const rowstest = employeesList.map((item, index) => ({
    id: index,
    firstName: item.firstname,
    lastName: item.lastName,
    dateOfBirth: item.dateOfBirth,
  }));

  console.log(rowstest);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={updatedEmployeesList}
        columns={columns}
        pageSize={100}
        //getRowId={(row) => row._id}

        //onSelectionModelChange={({ employeesList }) => {
          //const rowIds = employeesList.map((rowId) =>
            //parseInt(String(rowId), 10)
          //);
          //const rowsToDelete = employeesList.filter((row) =>
            //rowIds.includes(row.id)
          //);
        //}}
        /*setDeletedRows(rowsToDelete);
          console.log(deletedRows);*/
        //}}
      />
    </div>
  );
};

export default EmployeeList;