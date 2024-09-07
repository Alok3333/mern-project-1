import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isUser, setIsUser] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      const { username } = JSON.parse(loggedInUser);
      setIsUser(username);
    }
  }, []);

  // console.log(isUser, "name")

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {token && (
              <Link to="/" className={styles.menuTitle}>
                <MenuItem>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
            )}

            {token && (
              <Link to="employeelist" className={styles.menuTitle}>
                <MenuItem>
                  <Typography textAlign="center">EmployeeList</Typography>
                </MenuItem>
              </Link>
            )}
          </Box>
          <Box sx={{ display: "flex" }}>
            {token && (
              <MenuItem>
                <Typography textAlign="center">{isUser}</Typography>
              </MenuItem>
            )}

            {token && (
              <Link to="login" className={styles.menuTitle}>
                <Button color="inherit" onClick={handleLogOut}>
                  Logout
                </Button>
              </Link>
            )}

            {/* <Link to="login" className={styles.menuTitle}>
                <Button color="inherit">Login</Button>
              </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
