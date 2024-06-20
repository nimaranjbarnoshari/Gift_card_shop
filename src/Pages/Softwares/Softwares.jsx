import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";

import "./Softwares.css";
export default function Softwares() {
  return (
    <>
      <Topbar />
      <Navbar />
      <h2 className="my-5 text-white text-center fw-bolder fs-1">نرم افزار ها</h2>
      <Socials />
      <Footer />
    </>
  );
}
