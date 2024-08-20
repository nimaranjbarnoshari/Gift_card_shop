import React, { useEffect, useState } from "react";
import "./ProductsCategory.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";

export default function ProductsCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
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
