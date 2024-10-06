import React, { useContext, useEffect, useState } from "react";
import BackLink from "../Components/BackLink/BackLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import Chip from "../Components/Chip/Chip";
import { useParams } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";

import "./OrderDetails.css";
export default function OrderDetails() {
  const contextData = useContext(AuthContext);
  const { orderID } = useParams();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    contextData.userOrders.forEach((order) => {
      if (order.constructor === Array) {
        order.forEach((eachOrder) => {
          if (eachOrder.id === orderID) {
            setOrderDetail(order);
          }
        });
      } else {
        if (order.id === orderID) {
          setOrderDetail([order]);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(orderDetail);
  }, [orderDetail]);

  return (
    <div className="panel-styles order-details">
      <BackLink to="/panel/orders" />
      <h2 className="order-details__title">جزئیات سفارشات</h2>
      <div className="order-details__boxes">
        {orderDetail.map((order) => (
          <div key={order.id} className="order-details__box">
            <img
              src={order.src}
              alt="account"
              className="order-details__box-img"
            />
            <div className="order-details__box-row">
              <span className="order-details__box-row-title">نام محصول:</span>
              <span className="order-details__box-row-desc">{order.title}</span>
            </div>
            <div className="order-details__box-row">
              <span className="order-details__box-row-title">نام انگلیسی:</span>
              <span className="order-details__box-row-desc">
                {order.category}
              </span>
            </div>
            <div className="order-details__box-row">
              <span className="order-details__box-row-title">قیمت محصول:</span>
              <PriceBox price={order.price} />
            </div>
            <div className="order-details__box-row">
              <span className="order-details__box-row-title">
                شماره پرداخت:
              </span>
              <span className="order-details__box-row-desc">
                {order.payNumber}
              </span>
            </div>
            <div className="order-details__box-row">
              <span className="order-details__box-row-title">
                تاریخ پرداخت:
              </span>
              <span className="order-details__box-row-desc">
                {`${order.date} - ${PN.convertEnToPe(
                  order.hours
                )}:${PN.convertEnToPe(order.minutes)}`}
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
        ))}
        {/* <div className="order-details__box">
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
        </div> */}
      </div>
    </div>
  );
}
