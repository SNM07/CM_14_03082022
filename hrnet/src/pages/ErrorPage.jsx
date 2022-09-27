import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-WH.jpg";
import { Box, Grid, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <>
      <div
        className="error"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".4",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "32vh",
        }}
      >
        <Grid className="errorMessage">
          <Typography
            component={Link}
            to="/"
            variant="h2"
            font-size="8vh"
            color="secondary.main"
            className="errorText"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Page Not Found{" "}
          </Typography>
        </Grid>
      </Box>
    </>
  );
}
