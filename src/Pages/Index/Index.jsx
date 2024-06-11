import React from "react";
import "./Index.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
export default function Index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}
