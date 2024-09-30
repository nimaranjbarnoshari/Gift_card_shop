import React, { useState, useContext } from "react";
import DashboardBox from "../Components/DashboardBox/DashboardBox";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import PriceBox from "../../../Components/PriceBox/PriceBox";
import OrderBox from "../Components/OrderBox/OrderBox";
import Chip from "../Components/Chip/Chip";
import { BsTicket } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";

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
          <DashboardLink title="مشاهده همه" to="/panel/orders" />
        </div>
        <div className="dashboard-orders__lists">
          {[...contextData.userOrders]
            .reverse()
            .slice(0, 3)
            .map((order) => (
              <div className="dashboard-orders__list">
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
                  <DashboardLink title="مشاهده" to="/panel/orders" />
                </div>
              </div>
            ))}

          {/* <div className="dashboard-orders__list">
            <div className="dashboard-orders__list-rigth">
              <OrderBox
                src="/images/accounts/itunes.svg"
                title="اکانت آیتونز ریجن آمریکا"
                // title="اکانت آیتونز ریجن آمریکا"
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
          </div> */}
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
        <div className="dashboard-notices">
          <div className="dashboard-notice unread">
            <h3 className="dashboard-notice__title">عنوان اطلاعیه شماره سه</h3>
            <p className="dashboard-notice__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="dashboard-notice">
            <h3 className="dashboard-notice__title">عنوان اطلاعیه شماره دو</h3>
            <p className="dashboard-notice__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="dashboard-notice">
            <h3 className="dashboard-notice__title">عنوان اطلاعیه شماره یک</h3>
            <p className="dashboard-notice__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
