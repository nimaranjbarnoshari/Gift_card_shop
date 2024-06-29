import React from "react";
import BackLink from "../Components/BackLink/BackLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import Chip from "../Components/Chip/Chip";

import "./OrderDetails.css";
export default function OrderDetails() {
  return (
    <div className="panel-styles order-details">
      <BackLink to="/panel/orders"/>
      <h2 className="order-details__title">جزئیات سفارشات</h2>
      <div className="order-details__boxes">
        <div className="order-details__box">
          <img
            src="/images/accounts/origin.jpg"
            alt="account"
            className="order-details__box-img"
          />
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام محصول:</span>
            <span className="order-details__box-row-desc">
              اکانت اوریجین ریجن ترکیه
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام انگلیسی:</span>
            <span className="order-details__box-row-desc">Origin</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">قیمت محصول:</span>
            <PriceBox price="۲۵۶،۰۰۰" />
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">شماره پرداخت:</span>
            <span className="order-details__box-row-desc">#124513548</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">تاریخ پرداخت:</span>
            <span className="order-details__box-row-desc">
              ۱۴ آبان ۱۴۰۲ - ۱۴:۳۲
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">وضعیت سفارش:</span>
            <Chip bg="green">تکمیل شده</Chip>
          </div>
          <div className="order-details__box-footer">
            <p className="order-details__box-footer-text">
              لایسنس / دانلود یا هرچیزی که مربوط به این محصول هست در این بخش
              قرار میگیرد!{" "}
            </p>
          </div>
        </div>

        <div className="order-details__box">
          <img
            src="/images/accounts/origin.jpg"
            alt="account"
            className="order-details__box-img"
          />
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام محصول:</span>
            <span className="order-details__box-row-desc">
              اکانت اوریجین ریجن ترکیه
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام انگلیسی:</span>
            <span className="order-details__box-row-desc">Origin</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">قیمت محصول:</span>
            <PriceBox price="۲۵۶،۰۰۰" />
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">شماره پرداخت:</span>
            <span className="order-details__box-row-desc">#124513548</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">تاریخ پرداخت:</span>
            <span className="order-details__box-row-desc">
              ۱۴ آبان ۱۴۰۲ - ۱۴:۳۲
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">وضعیت سفارش:</span>
            <Chip bg="green">تکمیل شده</Chip>
          </div>
          <div className="order-details__box-footer">
            <p className="order-details__box-footer-text">
              لایسنس / دانلود یا هرچیزی که مربوط به این محصول هست در این بخش
              قرار میگیرد!{" "}
            </p>
          </div>
        </div>

        <div className="order-details__box">
          <img
            src="/images/accounts/origin.jpg"
            alt="account"
            className="order-details__box-img"
          />
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام محصول:</span>
            <span className="order-details__box-row-desc">
              اکانت اوریجین ریجن ترکیه
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">نام انگلیسی:</span>
            <span className="order-details__box-row-desc">Origin</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">قیمت محصول:</span>
            <PriceBox price="۲۵۶،۰۰۰" />
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">شماره پرداخت:</span>
            <span className="order-details__box-row-desc">#124513548</span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">تاریخ پرداخت:</span>
            <span className="order-details__box-row-desc">
              ۱۴ آبان ۱۴۰۲ - ۱۴:۳۲
            </span>
          </div>
          <div className="order-details__box-row">
            <span className="order-details__box-row-title">وضعیت سفارش:</span>
            <Chip bg="green">تکمیل شده</Chip>
          </div>
          <div className="order-details__box-footer">
            <p className="order-details__box-footer-text">
              لایسنس / دانلود یا هرچیزی که مربوط به این محصول هست در این بخش
              قرار میگیرد!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
