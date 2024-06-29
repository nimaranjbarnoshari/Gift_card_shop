import React from "react";
import { TiArrowBack } from "react-icons/ti";
import "./TicketBox.css";
export default function TicketBox({ children, title, date, src }) {
  return (
    <div className="ticket-box">
      <div className="ticket-box__header">
        <div className="ticket-box__header-right">
          <img src={src} alt="" className="ticket-box__header-img" />
          <span className="ticket-box__header-title">{title}</span>
        </div>
        <span className="ticket-box__header-date">{date}</span>
      </div>
      <div className="ticket-box__body">
        <p className="ticket-box__text">{children}</p>
      </div>
      <div className="ticket-details__boxes-footer">
        <button className="ticket-details__boxes-footer-btn">
          <TiArrowBack className="ticket-details__boxes-footer-icon" />
          پاسخ
        </button>
      </div>
    </div>
  );
}
