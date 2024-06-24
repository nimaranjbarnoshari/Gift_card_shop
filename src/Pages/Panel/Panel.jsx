import React from "react";
import PanelTopbar from "./Topbar/PanelTopbar";
import Sidebar from "./Sidebar/Sidebar";
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
