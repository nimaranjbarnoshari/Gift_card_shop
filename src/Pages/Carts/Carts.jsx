import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import BaseketCard from "../../Components/BaseketCard/BaseketCard";
import Button from "../../Components/Form/‌Button";

import "./Carts.css";
export default function Carts() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container">
        <div className="carts">
          <div className="carts-header">
            <h2 className="carts-header__title">سبد خرید شما</h2>
          </div>
          <div className="carts-container">
            <div className="carts-basket">
              <div className="carts-basket__header">
                <h3 className="carts-basket__title">آیتم های خریداری شده</h3>
              </div>
              <BaseketCard />
              <BaseketCard />
              <div className="carts-basket__footer">
                <h4 className="carts-basket__footer-title">جمع کل سبد خرید:</h4>
                <div className="carts-basket__footer-price-container">
                  <span className="carts-basket__footer-unit">تومان</span>
                  <span className="carts-basket__footer-price">۵۱۲،۰۰۰</span>
                </div>
              </div>
            </div>
            <div className="carts-pay">
              <h3 className="carts-pay__title">انتخاب درگاه پرداخت</h3>
              <div className="carts-pay__items">
                <div className="carts-pay__item">
                  <img src="images/carts/saman.svg" alt="saman" className="carts-pay__icon" />
                </div>
                <div className="carts-pay__item">
                  <img src="images/carts/up.svg" alt="up" className="carts-pay__icon" />
                </div>
              </div>
              <Button
                children="ثبت نهایی و پرداخت"
                className="carts-pay__button"
              />
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
