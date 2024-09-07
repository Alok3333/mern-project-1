import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Link,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const currencies = [
  {
    value: "HR/Manager/Sales",
    label: "HR/Manager/Sales",
  },
  {
    value: "hr",
    label: "HR",
  },
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "sales",
    label: "SALES",
  },
];

const NewEmployee = () => {
  const [isInput, setIsInput] = useState({
    name: "",
    email: "",
    mobile_no: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;

    setIsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(isInput, "inputVal");

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginTop: "10px" }}>
        <Box sx={{ minHeight: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "12%",
                  marginBottom: "10%",
                }}
              >
                <h2>Create new employee here</h2>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "10px 0px 30px 0px",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={isInput.name}
                    onChange={handleInputData}
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
                    name="email"
                    value={isInput.email}
                    onChange={handleInputData}
                    label="Email"
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
                    name="mobile_no"
                    value={isInput.mobile_no}
                    onChange={handleInputData}
                    label="Mobile No"
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
                    id="outlined-select-currency"
                    select
                    label="Designation"
                    // placeholder="HR/Manager/Sales"
                    sx={{ textAlign: "left" }}
                    defaultValue="HR/Manager/Sales"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "0px 0px 30px 0px",
                    textAlign: "left",
                  }}
                >
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "0px 0px 30px 0px",
                    textAlign: "left",
                  }}
                >
                  <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Course</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="MCA"
                      />
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="BCA"
                      />
                      <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="BSC"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    margin: "0px 0px 30px 0px",
                    textAlign: "left",
                  }}
                >
                  <input
                    type="file"
                    id="fileElem"
                    label="Input"
                    multiple
                    accept="image/*"
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
                      variant="contained"
                      color="success"
                      size="medium"
                      fullWidth
                    >
                      Submit
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

export default NewEmployee;
