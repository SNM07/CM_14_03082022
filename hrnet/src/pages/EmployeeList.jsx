import React, { useState } from "react";
import { GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { StripedDataGrid as GridTheme } from "../styles/styles";

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

let StripedDataGrid = GridTheme;

const EmployeeList = () => {
  const employeeForLocalStorage = useSelector((state) => state.data.employees);

  const [pageSize, setPageSize] = useState(10);

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
          mt: 4
        }}
      />
    </div>
  );
};

export default EmployeeList;
