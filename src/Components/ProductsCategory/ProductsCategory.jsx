import React from "react";
import "./ProductsCategory.css";
import SectionHeader from "../SectionTitle/SectionHeader";

export default function ProductsCategory() {
  return (
    <section className="products-category">
      <SectionHeader title={"دسته بندی محصولات"} off={true} />
    </section>
  );
}
