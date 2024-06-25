import React from "react";
import DashboardBox from "../Components/DashboardBox/DashboardBox";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import OrderBox from "../Components/OrderBox/OrderBox";
import Chip from "../Components/Chip/Chip";
import { BsTicket } from "react-icons/bs";

import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="panel-styles dashboard">
      <div className="dashboard-right">
        <h2 className="dashboard-right__title">داشبورد کاربری</h2>
        <div className="dashboard-header">
          <DashboardBox
            src="/images/svg/check.svg"
            to="/panel/orders"
            count="۲۲"
            title="سفارشات تکمیل شده"
          />
          <DashboardBox
            bg="orange"
            src="/images/svg/loader.svg"
            to="/panel/orders"
            count="۵"
            title="سفارشات در حال انجام"
          />
          <DashboardBox
            bg="pink"
            src="/images/svg/ticket.svg"
            to="/panel/orders"
            count="۱۴"
            title="تیکت های شما"
          />
        </div>
        <div className="dashboard-orders__header">
          <h3 className="dashboard-orders__header-title">
            لیست سفارشات اخیر شما
          </h3>
          <DashboardLink title="مشاهده همه" to="/panel/orders" />
        </div>
        <div className="dashboard-orders__lists">
          <div className="dashboard-orders__list">
            <div className="dashboard-orders__list-rigth">
              <OrderBox
                src="/images/accounts/origin.svg"
                title="اکانت اوریجین ریجن ترکیه"
                desc="Origin"
              />
            </div>
            <div className="dashboard-orders__list-left">
              <PriceBox price="۲۵۶،۰۰۰" isBold={true} />
              <Chip bg="green">تکمیل شده</Chip>
              <DashboardLink title="مشاهده" to="/panel/orders" />
            </div>
          </div>
          <div className="dashboard-orders__list">
            <div className="dashboard-orders__list-rigth">
              <OrderBox
                src="/images/accounts/itunes.svg"
                title="اکانت آتیوز ریجن آمریکا"
                desc="itunes"
              />
            </div>
            <div className="dashboard-orders__list-left">
              <PriceBox price="۲۵۶،۰۰۰" isBold={true} />
              <Chip bg="orange">درحال انجام</Chip>
              <DashboardLink title="مشاهده" to="/panel/orders" />
            </div>
          </div>
          <div className="dashboard-orders__list">
            <div className="dashboard-orders__list-rigth">
              <OrderBox
                src="/images/accounts/spotify.svg"
                title="اکانت اسپاتیفای ریجن آمریکا"
                desc="Spotify"
              />
            </div>
            <div className="dashboard-orders__list-left">
              <PriceBox price="۲۵۶،۰۰۰" isBold={true} />
              <Chip bg="green">تکمیل شده</Chip>
              <DashboardLink title="مشاهده" to="/panel/orders" />
            </div>
          </div>
        </div>
        <h3 className="dashboard-tickets__title">تیکت های اخیر شما</h3>
        <div className="dashboard-tickets__body">
          <BsTicket className="dashboard-tickets__body-icon" />
          <span className="dashboard-tickets__body-title">تیکتی یافت نشد!</span>
        </div>
      </div>

      <div className="dashboard-left">
        <h3 className="dashboard-left__title">اطلاعیه ها</h3>
      </div>
    </div>
  );
}
