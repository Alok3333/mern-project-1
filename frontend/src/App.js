import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import NewEmployee from "./components/NewEmployee";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="employeelist" element={<EmployeeList />} />
          <Route path="newemployee" element={<NewEmployee />} />
          <Route
            path="*"
            element={<h1 className="pageNotFound">Page not found</h1>}
          />
        </Route>
        <Route
          path="login"
          element={
            <SnackbarProvider>
              <Login />
            </SnackbarProvider>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
