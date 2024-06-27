import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import OrderBox from "../Components/OrderBox/OrderBox";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import Chip from "../Components/Chip/Chip";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import { PiShoppingBag } from "react-icons/pi";

import "./Orders.css";
export default function Orders() {
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
          <tbody style={{ padding: "25px" }} className="orders-table__body">
            <tr>
              <td>
                <div className="orders-table__couples">
                  <PiShoppingBag className="orders-table__couples-icon" />
                  <span className="orders-table__couples-text">
                    سفارشات شماره 123123#
                  </span>
                </div>
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲،۳۷۴،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="green" custom="orders-table__chip">
                  تکمیل شده
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/itunes.svg"
                  title="اکانت آتیوز ریجن آمریکا"
                  desc="itunes"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="green" custom="orders-table__chip">
                  تکمیل شده
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/spotify.svg"
                  title="اکانت اسپاتیفای ریجن آمریکا"
                  desc="Spotify"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="orange" custom="orders-table__chip">
                  در حال انجام
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/origin.svg"
                  title="اکانت اوریجین ریجن ترکیه"
                  desc="Origin"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="green" custom="orders-table__chip">
                  تکمیل شده
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/itunes.svg"
                  title="اکانت آتیوز ریجن آمریکا"
                  desc="itunes"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="orange" custom="orders-table__chip">
                  در حال انجام
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/spotify.svg"
                  title="اکانت اسپاتیفای ریجن آمریکا"
                  desc="Spotify"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="orange" custom="orders-table__chip">
                  در حال انجام
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>

            <tr>
              <td>
                <OrderBox
                  custom="orders-table__oreder-box"
                  src="/images/accounts/origin.svg"
                  title="اکانت اوریجین ریجن ترکیه"
                  desc="Origin"
                />
              </td>
              <td>#124513548</td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>
                <PriceBox
                  isBold={true}
                  price="۲۵۶،۰۰۰"
                  custom="orders-table__price"
                />
              </td>
              <td>
                <Chip bg="green" custom="orders-table__chip">
                  تکمیل شده
                </Chip>
              </td>
              <td>
                <DashboardLink
                  title="مشاهده"
                  to="/panel/orders/name"
                  custom="orders-table__link"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
