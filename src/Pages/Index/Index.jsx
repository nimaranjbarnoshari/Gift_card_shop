import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Services from "../../Components/Services/Services";
import ProductsCategory from "../../Components/ProductsCategory/ProductsCategory";
import DiscountedProducts from "../../Components/DiscountedProducts/DiscountedProducts";
import GamesCategory from "../../Components/GamesCategory/GamesCategory";
import AccountsSection from "../../Components/AccountsSection/AccountsSection";
import Articles from "../../Components/Articles/Articles";

import "./Index.css";
import Social from "../../Components/Social/Social";

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
      <Articles />
      <Social />
    </div>
  );
}
