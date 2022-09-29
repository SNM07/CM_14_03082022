import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-WH.jpg";
import { Box, Button, Grid } from "@mui/material";

const Header = () => {
  return (
    <>
      <header className="header">
        <Box
          bgcolor="grey.main"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            border: 2,
            borderColor: "secondary.light",
            pt: 0.4,
          }}
        >
          <Grid className="createButtonContainer">
            <Button
              component={Link}
              to="/create-employee"
              variant="contained"
              className="button"
              aria-label="create-employee"
              sx={{ ml: 2 }}
            >
              Create New Employee
            </Button>
          </Grid>
          <Grid
            component={Link}
            to="/"
            className="logoContainer"
            aria-label="to-homepage"
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                maxHeight: "160px",
              }}
              alt="logo"
              src={logo}
            ></Box>
          </Grid>
          <Grid className="listButtonContainer">
            <Button
              component={Link}
              to="/employee-list"
              variant="contained"
              className="button"
              aria-label="employees-list"
              sx={{ mr: 2 }}
            >
              View Current Employees
            </Button>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Header;
