import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import OrderBox from "../Components/OrderBox/OrderBox";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import Chip from "../Components/Chip/Chip";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import AuthContext from "../../../Context/AuthContext";
import { SlBasket } from "react-icons/sl";
import { PiShoppingBag } from "react-icons/pi";

import "./Orders.css";
export default function Orders() {
  const contextData = useContext(AuthContext);

  return (
    <div className="panel-styles orders">
      <div className="orders-header">
        <h2 className="orders-header__title">سفارشات من</h2>
        <div className="orders-header__search">
          <input
            type="text"
            className="orders-header__search-input"
            placeholder="جستجو محصول"
          />
          <IoSearchOutline className="orders-header__search-icon" />
        </div>
      </div>

      {contextData.userOrders.length ? (
        <div className="orders-table__container">
          <table className="orders-table">
            <thead className="orders-table__header">
              <tr>
                <th>نام محصول</th>
                <th>شماره پرداخت</th>
                <th>تاریخ پرداخت</th>
                <th>مبلغ پرداخت</th>
                <th>وضعیت پرداخت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody className="orders-table__body">
              {[...contextData.userOrders].reverse().map((order) =>
                order.constructor === Array ? (
                  <tr key={order[0].id}>
                    <td>
                      <div className="orders-table__couples">
                        <PiShoppingBag className="orders-table__couples-icon" />
                        <span className="orders-table__couples-text">
                          {`سفارشات شماره ${order[0].orderNumber}`}
                        </span>
                      </div>
                    </td>
                    <td>{order[0].payNumber}</td>
                    <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
                    <td>
                      <PriceBox
                        isBold={true}
                        price={order[0].totalPay}
                        custom="orders-table__price"
                      />
                    </td>
                    <td>
                      <Chip bg="green">تکمیل شده</Chip>
                    </td>
                    <td>
                      <DashboardLink title="مشاهده" to="/panel/orders/name" />
                    </td>
                  </tr>
                ) : (
                  <tr key={order.id}>
                    <td>
                      <OrderBox
                        custom="orders-table__oreder-box"
                        src={order.src}
                        title={order.title}
                        desc={order.category}
                      />
                    </td>
                    <td>#124513548</td>
                    <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
                    <td>
                      <PriceBox
                        isBold={true}
                        price={order.price}
                        custom="orders-table__price"
                      />
                    </td>
                    <td>
                      <Chip bg="green">تکمیل شده</Chip>
                    </td>
                    <td>
                      <DashboardLink title="مشاهده" to="/panel/orders/name" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="dashboard-tickets__body">
          <SlBasket className="dashboard-order__body-icon" />
          <span className="dashboard-tickets__body-title">
            سفارشی یافت نشد!
          </span>
        </div>
      )}
    </div>
  );
}
