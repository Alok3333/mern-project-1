import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginTop: "64px" }}>
        <Box sx={{ height: "100vh" }}>
          <h1>Dashboard</h1>
          <h3>Welcome Admin Panel</h3>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
