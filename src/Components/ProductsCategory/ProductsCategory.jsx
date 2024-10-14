import React, { useContext, useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";
import AuthContext from "../../Context/AuthContext";

import "./ProductsCategory.css";
export default function ProductsCategory() {
  const [categories, setCategories] = useState([]);
  const contextData = useContext(AuthContext);
  useEffect(() => {
    fetch(`${contextData.back_url}categories`)
      .then((res) => res.json())
      .then((allCategories) => {
        setCategories(allCategories);
      });
  }, []);
  return (
    <section className="products-category">
      <div className="container">
        <SectionHeader title="دسته بندی محصولات" />

        <div className="products-category__box-wrapper">
          {categories.map((category) => (
            <AccountBox
              key={category.id}
              src={category.src}
              title={category.title}
              desc={category.desc}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
