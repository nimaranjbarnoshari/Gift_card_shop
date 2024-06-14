import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import ProductsCategory from "../../Components/ProductsCategory/ProductsCategory";
import DiscountedProducts from "../../Components/DiscountedProducts/DiscountedProducts";
import GamesCategory from "../../Components/GamesCategory/GamesCategory";
import AccountsSection from "../../Components/AccountsSection/AccountsSection";

import "./Index.css";

export default function Index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
      <Services />
      <ProductsCategory />
      <DiscountedProducts />
      <GamesCategory />
      <AccountsSection />
    </div>
  );
}
