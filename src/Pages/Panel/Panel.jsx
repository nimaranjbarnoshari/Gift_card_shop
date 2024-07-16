import React, { useContext } from "react";
import PanelTopbar from "./Components/Topbar/PanelTopbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";
import "./Panel.css";
export default function Panel() {
  const contextData = useContext(AuthContext);
  return (
    <>
      {contextData.isLoggedIn ? (
        <>
          <Sidebar />
          <PanelTopbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
