import { Box, Button, Card, Container, CssBaseline } from "@mui/material";
import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginTop: "64px" }}>
        <Box sx={{ minHeight: "100vh" }}>
          <h2>Employee-List</h2>
          <Link to="/newemployee">
            <Button variant="contained">Create New Employee</Button>
          </Link>
          <Outlet/>

          <Card sx={{ minWidth: 275, margin: "0px 40px", padding: "30px 0px" }}>
            <table width="100%" bgcolor="#fff" id="tablebox">
              <thead>
                <tr>
                  <th>Unique Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Designation</th>
                  <th>gender</th>
                  <th>Course</th>
                  <th>Create date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>Username</td>
                  <td>user email id</td>
                  <td>user no.</td>
                  <td>HR</td>
                  <td>Male</td>
                  <td>MCA</td>
                  <td>12-July-24</td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>Username</td>
                  <td>user email id</td>
                  <td>user no.</td>
                  <td>HR</td>
                  <td>Male</td>
                  <td>MCA</td>
                  <td>12-July-24</td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>Username</td>
                  <td>user email id</td>
                  <td>user no.</td>
                  <td>HR</td>
                  <td>Male</td>
                  <td>MCA</td>
                  <td>12-July-24</td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>Username</td>
                  <td>user email id</td>
                  <td>user no.</td>
                  <td>HR</td>
                  <td>Male</td>
                  <td>MCA</td>
                  <td>12-July-24</td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td>Username</td>
                  <td>user email id</td>
                  <td>user no.</td>
                  <td>HR</td>
                  <td>Male</td>
                  <td>MCA</td>
                  <td>12-July-24</td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default EmployeeList;
