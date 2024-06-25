import React from "react";
import DashboardBox from "../Components/DashboardBox/DashboardBox";
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
      </div>

      <div className="dashboard-left">
        <h3 className="dashboard-right__title">اطلاعیه ها</h3>
      </div>
    </div>
  );
}
