import React from "react";
import PanelTopbar from "./Components/Topbar/PanelTopbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Panel.css";
export default function Panel() {
  return (
    <>
      <Sidebar />
      <PanelTopbar />
      <Outlet />
    </>
  );
}
