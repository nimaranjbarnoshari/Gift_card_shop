import React, { useState, useContext } from "react";
import DashboardBox from "../Components/DashboardBox/DashboardBox";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import OrderBox from "../Components/OrderBox/OrderBox";
import Chip from "../Components/Chip/Chip";
import { BsTicket } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";
import { PiShoppingBag } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";

import "./Dashboard.css";
export default function Dashboard() {
  const contextData = useContext(AuthContext);
  const [isShowNotice, setIsShowNotice] = useState(false);

  return (
    <div className="panel-styles dashboard">
      <div className="dashboard-right">
        <h2 className="dashboard-right__title">داشبورد کاربری</h2>
        <div className="dashboard-header">
          <DashboardBox
            src="/images/svg/check.svg"
            to="/panel/orders"
            count={PN.convertEnToPe(contextData.userInfos.orders.length)}
            title="سفارشات تکمیل شده"
          />
          <DashboardBox
            bg="orange"
            src="/images/svg/loader.svg"
            to="/panel/orders"
            count="۰"
            title="سفارشات در حال انجام"
          />
          <DashboardBox
            bg="pink"
            src="/images/svg/ticket.svg"
            to="/panel/orders"
            count={PN.convertEnToPe(contextData.userInfos.tickets.length)}
            title="تیکت های شما"
          />
        </div>
        <div className="dashboard-orders__header">
          <h3 className="dashboard-orders__header-title">
            لیست سفارشات اخیر شما
          </h3>
          {contextData.userOrders.length ? (
            <DashboardLink title="مشاهده همه" to="/panel/orders" />
          ) : (
            ""
          )}
        </div>
        <div className="dashboard-orders__lists">
          {contextData.userOrders.length ? (
            [...contextData.userOrders]
              .reverse()
              .slice(0, 3)
              .map((order) =>
                order.constructor === Array ? (
                  <div key={order[0].id} className="dashboard-orders__list">
                    <div className="dashboard-orders__list-rigth">
                      <div className="orders-table__couples">
                        <PiShoppingBag className="orders-table__couples-icon" />
                        <span className="orders-table__couples-text">
                          {`سفارشات شماره ${order[0].orderNumber}`}
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-orders__list-left">
                      <PriceBox price={order[0].totalPay} isBold={true} />
                      <Chip bg="green">تکمیل شده</Chip>
                      <DashboardLink
                        title="مشاهده"
                        to={`/panel/orders/${order[0].id}`}
                      />
                    </div>
                  </div>
                ) : (
                  <div key={order.id} className="dashboard-orders__list">
                    <div className="dashboard-orders__list-rigth">
                      <OrderBox
                        src={order.src}
                        title={order.title}
                        desc={order.category}
                      />
                    </div>
                    <div className="dashboard-orders__list-left">
                      <PriceBox price={order.price} isBold={true} />
                      <Chip bg="green">تکمیل شده</Chip>
                      <DashboardLink
                        title="مشاهده"
                        to={`/panel/orders/${order.id}`}
                      />
                    </div>
                  </div>
                )
              )
          ) : (
            <div className="dashboard-tickets__body">
              <SlBasket className="dashboard-order__body-icon" />
              <span className="dashboard-tickets__body-title">
                سفارشی یافت نشد!
              </span>
            </div>
          )}
        </div>
        <h3 className="dashboard-tickets__title">تیکت های اخیر شما</h3>
        <div className="dashboard-tickets__body">
          <BsTicket className="dashboard-tickets__body-icon" />
          <span className="dashboard-tickets__body-title">تیکتی یافت نشد!</span>
        </div>
      </div>

      <div className={`dashboard-left ${isShowNotice ? "show-notice" : ""}`}>
        <button
          className="dashboard-left__btn"
          onClick={() => setIsShowNotice(!isShowNotice)}
        >
          <HiSpeakerphone className="dashboard-left__btn-icon" />
        </button>
        <h3 className="dashboard-left__title">اطلاعیه ها</h3>
        {contextData.userNotifications.length ? (
          <div className="dashboard-notices">
            {contextData.userNotifications.map((notif) => (
              <div key={notif.id} className="dashboard-notice unread">
                <h3 className="dashboard-notice__title">
                  عنوان اطلاعیه شماره سه
                </h3>
                <p className="dashboard-notice__text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="dashboard-tickets__body">
            <IoIosNotifications className="dashboard-order__body-icon" />
            <span className="dashboard-tickets__body-title">
              اطلاعیه ای یافت نشد!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
