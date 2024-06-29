import React from "react";
import { Link } from "react-router-dom";
import Chip from "../Components/Chip/Chip";
import DashboardLink from "../Components/DashboardLink/DashboardLink";
import "./Tickets.css";
export default function Tickets() {
  return (
    <div className="panel-styles tickets">
      <div className="tickets-header">
        <h2 className="tickets-header__title">تیکت ها</h2>
        <Link to="/panel/new-ticket" className="tickets-header__link">
          + ایجاد تیکت جدید
        </Link>
      </div>
      <div className="tickets-table__container">
        <table className="tickets-table">
          <thead className="tickets-table__header">
            <tr>
              <th>عنوان تیکت</th>
              <th>تاریخ ساخت تیکت</th>
              <th>آخرین آپدیت تیکت</th>
              <th>دپارتمان</th>
              <th>نوع تیکت</th>
              <th>وضعیت تیکت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="tickets-table__body">
            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت وچیز های دیگه ای که نیازه و حتما باید پیگیری  شه
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>اضطراری</td>
              <td>
                <Chip bg="green">پاسخ داده شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>اضطراری</td>
              <td>
                <Chip bg="orange">درحال بررسی</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>

            <tr>
              <td>
                <div className="tickets-table__body-title-box">
                  <span className="tickets-table__body-title">
                    عدم اتصال سرور به درگاه پرداخت
                  </span>
                  <span className="tickets-table__body-ticktID">
                    #124513548
                  </span>
                </div>
              </td>
              <td>۱۴ آبان ۱۴۰۲ - ۱۴:۳۲</td>
              <td>۲۶ خرداد ۱۴۰۳ - ۱۲:۵۲</td>
              <td>بخش فنی سایت</td>
              <td>متوسط</td>
              <td>
                <Chip bg="gray">بسته شده</Chip>
              </td>
              <td>
                <DashboardLink title="مشاهده" to="/panel/tickets/tiketID" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
