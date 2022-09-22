import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-WH.jpg";

import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="home">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 8,
          }}
        >
          <Grid className="createButtonContainer">
            <Typography
              component={Link}
              to="/"
              variant="h2"
              color="secondary.light"
              className="welcome"
              style={{ textDecoration: "none" }}
              sx={{ ml: 2 }}
            >
              Welcome{" "}
            </Typography>
          </Grid>
          <Grid component={Link} to="/" className="logoContainer">
            <Box
              component="img"
              sx={{
                height: "200%",
                opacity: ".5",
              }}
              alt="logo"
              src={logo}
            ></Box>
          </Grid>
        </Box>
      </div>
    </>
  );
}
