import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import { mockedEmployee } from "../data/mockedEmployeeList";
import { useSelector } from "react-redux";
import GetEmployees from "../services/service";
import { alpha, styled } from "@mui/material/styles";

const columns = [
  { field: "firstName", headerName: "First Name", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "dateOfBirth", headerName: "Date of Birth", flex: 1 },
  { field: "startDate", headerName: "Start Date", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "street", headerName: "Street", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "state", headerName: "State", flex: 1 },
  { field: "zipCode", headerName: "Zip Code", flex: 1 },
];

const columnGroupingModel = [
  {
    groupId: "Identity",
    description: "",
    children: [
      { field: "firstName" },
      { field: "lastName" },
      { field: "dateOfBirth" },
    ],
  },
  {
    groupId: "Informations",
    children: [{ field: "startDate" }, { field: "department" }],
  },
  {
    groupId: "Address",
    description: "",
    children: [
      { field: "street" },
      { field: "city" },
      { field: "state" },
      { field: "zipCode" },
    ],
  },
];

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

const EmployeeList = () => {
  const [tableData, setTableData] = useState([]);

  const employeeForLocalStorage = useSelector(state => state.data.employees);
  console.log(employeeForLocalStorage)

  const [pageSize, setPageSize] = useState(10);

  /* useEffect(() => {
    fetch("../data/mockedEmployeeList.js").then((data) =>
      setTableData(mockedEmployee)
    );
  }); */

 /*  let employeesList =
    JSON.parse(window.localStorage.getItem("employees")) || tableData;

  let updatedEmployeesList = tableData.concat(employeesList);
 */

  

  return (
    <div style={{ height: 700, width: "100%" }}>
      <StripedDataGrid
        rows={employeeForLocalStorage}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 50, 100]}
        pagination
        {...columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "secondary.light",
            color: "white",
            fontSize: 16,
          },
        }}
      />
    </div>
  );
};

export default EmployeeList;
