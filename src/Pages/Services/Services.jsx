import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";

import "./Services.css";
export default function Services() {
  return (
    <>
      <Topbar />
      <Navbar />
      <h2 className="my-5 text-white text-center fw-bolder fs-1">خدمات</h2>
      <Socials />
      <Footer />
    </>
  );
}
