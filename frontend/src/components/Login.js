import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BACKEND_ENDPOINT = "http://localhost:4000/api/v1";

const Login = () => {
  const [isVal, setIsVal] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggoedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // handle input value
  const handleValue = (e) => {
    const { name, value } = e.target;
    setIsVal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // submit login data
  const handleClick = async (e) => {
    e.preventDefault();
    const payload = {
      f_userName: isVal.username,
      f_Pwd: isVal.password,
    };

    try {
      const res = await axios.post(`${BACKEND_ENDPOINT}/auth/login`, payload);

      if (res.status === 200) {
        enqueueSnackbar("Login successful. Redirecting to home page..", {
          variant: "success",
          autoHideDuration: 1000,
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        });

        localStorage.setItem("token", res.data.token);

        const loggedInUser = await getLoggedInUser();

        // navigate("/");
      }
      // console.log(res, "res post");
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response.data.msg, {
        variant: "error",
        autoHideDuration: 1000,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
    }

    // console.log(payload, "click here");
    setIsLoggoedIn(!isLoggedIn);
  };

  const getLoggedInUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BACKEND_ENDPOINT}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(res.data.userDetails.user)
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xll" sx={{ marginTop: "80px" }}>
        <Box sx={{ minHeight: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "24%",
                }}
              >
                <h2>Login</h2>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "10px 0px 30px 0px",
                  }}
                >
                  <TextField
                    fullWidth
                    value={isVal.username}
                    name="username"
                    onChange={handleValue}
                    label="Username"
                    id="fullWidth"
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "0px 0px 30px 0px",
                  }}
                >
                  <TextField
                    fullWidth
                    value={isVal.pawword}
                    id="outlined-password-input"
                    name="password"
                    onChange={handleValue}
                    label="Password"
                    type="password"
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "0px 0px 60px 0px",
                  }}
                >
                  <Link to="/">
                    <Button
                      onClick={handleClick}
                      variant="contained"
                      size="medium"
                      color="success"
                      fullWidth
                    >
                      Login
                    </Button>
                  </Link>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Login;
