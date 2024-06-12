import React from "react";
import "./DiscountedProducts.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import GameBox from "../GameBox/GameBox";

export default function DiscountedProducts() {
  return (
    <div className="discounted-products">
      <div className="container">
        <SectionHeader title="محصولات تخفیف دار" off={true} />

        {/* buttons */}
        <div className="discounted-products__buttons-wrapper">
          <button className="discounted-products__button discounted-products__button--active">
            گیفت کارت
          </button>
          <button className="discounted-products__button">بازی ها</button>
          <button className="discounted-products__button">
            پول وآیتم بازی
          </button>
          <button className="discounted-products__button">خدمات</button>
          <button className="discounted-products__button">نرم افزار</button>
          <button className="discounted-products__button">کالای دیجیتال</button>
        </div>

        {/* boxes */}
        <div className="discounted-products__boxes">
          <GameBox title="گیفت کارت استیم ۵ دلاری" price="۲۵۶،۰۰۰" off="۵" offPrice="۲۴۳،۲۰۰"/>
        </div>
      </div>
    </div>
  );
}
