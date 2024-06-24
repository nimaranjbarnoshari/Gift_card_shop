import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import "./Page404.css";
export default function Page404() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <div className="not-found">
            <h2 className="not-found__heder">404</h2>
            <h3 className="not-found__title">متاسفانه صفحه مورد نظر شما پیدا نشد</h3>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
