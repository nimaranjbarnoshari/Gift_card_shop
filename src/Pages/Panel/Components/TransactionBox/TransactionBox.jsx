import React from "react";
import Chip from "../Chip/Chip";
import "./TransactionBox.css";
export default function TransactionBox({ date, price, desc, action, bg }) {
  return (
    <div className="transaction-box">
      <span className="transaction-box__date">{date}</span>
      <Chip bg={bg} custom="transaction-box__price">{price} تومان</Chip>
      <span className="transaction-box__title">{desc}</span>
      <Chip bg={bg}>{action}</Chip>
    </div>
  );
}
