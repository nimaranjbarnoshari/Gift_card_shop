import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";

import "./Games.css";
export default function Games() {
  return (
    <>
      <Topbar />
      <Navbar />
      <h2 className="my-5 text-white text-center fw-bolder fs">بازی ها</h2>
      <Socials />
      <Footer />
    </>
  );
}
