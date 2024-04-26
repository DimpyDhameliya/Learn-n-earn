import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const auth = JSON.parse(localStorage.getItem("auth"))

function PrivateRoute() {
  return <div>
    {auth ? <Outlet/> : <Navigate to ={"/login"}/>}
  </div>;
}

export default PrivateRoute;
