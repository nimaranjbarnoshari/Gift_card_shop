import React, { useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import BasketCard from "../../Components/BasketCard/BasketCard";
import Button from "../../Components/Form/‌Button";
import PriceBox from "../../Components/PriceBox/PriceBox";
import AuthContext from "../../Context/AuthContext";
import PN from "persian-number";
import { Navigate } from "react-router-dom";

import "./Carts.css";
export default function Carts() {
  const contextData = useContext(AuthContext);

  return (
    <>
      {contextData.isLoggedIn ? (
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
                    <h3 className="carts-basket__title">
                      آیتم های خریداری شده
                    </h3>
                  </div>
                  {contextData.userBasket.length
                    ? contextData.userBasket.map((product) => (
                        <BasketCard
                          key={product.id}
                          cardSrc={product.src}
                          title={product.title}
                          flagSrc={product.flag ? product.flag : ""}
                          price={product.price}
                          count={product.count}
                          country={product.country ? product.country : ""}
                          productID={product.id}
                        />
                      ))
                    : ""}

                  <div className="carts-basket__footer">
                    <h4 className="carts-basket__footer-title">
                      جمع کل سبد خرید:
                    </h4>
                    <PriceBox
                      price={PN.convertEnToPe(
                        contextData.totalPrice.toLocaleString()
                      )}
                      isTotal={true}
                    />
                  </div>
                </div>
                <div className="carts-pay">
                  <h3 className="carts-pay__title">انتخاب درگاه پرداخت</h3>
                  <div className="carts-pay__items">
                    <div className="carts-pay__item">
                      <img
                        src="images/svg/saman.svg"
                        alt="saman"
                        className="carts-pay__icon"
                      />
                    </div>
                    <div className="carts-pay__item">
                      <img
                        src="images/svg/up.svg"
                        alt="up"
                        className="carts-pay__icon"
                      />
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
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
