import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Benefits from "../../Components/Benefits/Benefits";
import ProductsCategory from "../../Components/ProductsCategory/ProductsCategory";
import DiscountedProducts from "../../Components/DiscountedProducts/DiscountedProducts";
import GamesCategory from "../../Components/GamesCategory/GamesCategory";
import AccountsSection from "../../Components/AccountsSection/AccountsSection";
import Articles from "../../Components/Articles/Articles";
import Social from "../../Components/Social/Social";
import Footer from "../../Components/Footer/Footer";

import "./Index.css";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

export default function Index() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
      <Benefits />
      <ProductsCategory />
      <DiscountedProducts />
      <GamesCategory />
      <AccountsSection />
      <SectionHeader title="اخبار و مقالات"/>
      <Articles />
      <Social />
      <Footer />
    </div>
  );
}
