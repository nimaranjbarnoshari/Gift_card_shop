import React from "react";
import Input from "../../../Components/Form/Input"
import "./Wallet.css";
export default function Wallet() {
  return (
    <div className="panel-styles wallet">
      <h2 className="wallet-title">کیف پول</h2>
      <div className="wallet-container">
        <div className="wallet-pay">
          <div className="wallet-pay__header">
            <h4 className="wallet-pay__header-title">موجودی کیف پول شما</h4>
            <span className="wallet-pay__header-ballance">
              <span className="wallet-pay__header-ballance-unit">تومان</span>{" "}
              ۵،۰۰۰،۰۰۰
            </span>
          </div>
          
        </div>
        <div className="wallet-transactions"></div>
      </div>
    </div>
  );
}
