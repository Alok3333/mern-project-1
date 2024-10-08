import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const token = localStorage.getItem("token");
  // const auth = { token: false };
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
