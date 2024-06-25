import React from "react";
import DashboardBox from "../Components/DashboardBox/DashboardBox";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import OrderBox from "../Components/OrderBox/OrderBox";
import Chip from "../Components/Chip/Chip";
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
        </div>
      </div>

      <div className="dashboard-left">
        <h3 className="dashboard-left__title">اطلاعیه ها</h3>
      </div>
    </div>
  );
}
