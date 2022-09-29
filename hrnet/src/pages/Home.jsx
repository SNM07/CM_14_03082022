import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-WH.jpg";
import { Box, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div
        className="home"
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
        <Grid className="welcomeMessage">
          <Typography
            component={Link}
            to="/"
            variant="h2"
            fontSize="8vh"
            color="secondary.main"
            className="welcome"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Welcome{" "}
          </Typography>
        </Grid>
      </Box>
    </>
  );
}
