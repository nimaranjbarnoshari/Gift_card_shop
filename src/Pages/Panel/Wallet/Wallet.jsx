import React from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import "./Wallet.css";
import WalletBox from "../Components/WalletBox/WalletBox";
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
          <div className="wallet-pay__recharge">
            <Input
              id="wallet_input"
              label="مبلغ شارژ"
              type="number"
              custom="wallet-pay__input"
            />
            <span className="wallet-pay__input-unit">تومان</span>
          </div>
          <div className="wallet-pay__choose">
            <h4 className="wallet-pay__choose-title">
              بانک مورد نظر جهت پرداخت
            </h4>
            <WalletBox
              id="saman"
              label="درگاه پرداخت بانک سامان"
              src="/images/wallet/saman.svg"
            />
            <WalletBox
              id="parsian"
              label="درگاه پرداخت بانک پارسیان"
              src="/images/wallet/parsian.svg"
            />
          </div>
        </div>

        <div className="wallet-transactions"></div>
      </div>
    </div>
  );
}
