import React from "react";
import "./Index.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import ProductsCategory from "../../Components/ProductsCategory/ProductsCategory";
export default function Index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
      <Services />
      <ProductsCategory />
    </div>
  );
}
