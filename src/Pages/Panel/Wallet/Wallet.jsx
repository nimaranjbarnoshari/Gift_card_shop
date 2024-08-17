import React, { useContext, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import "./Wallet.css";
import WalletBox from "../Components/WalletBox/WalletBox";
import TransactionBox from "../Components/TransactionBox/TransactionBox";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";

export default function Wallet() {
  const contextData = useContext(AuthContext);
  const [amount, setAmount] = useState(0);

  return (
    <div className="panel-styles wallet">
      <h2 className="wallet-title">کیف پول</h2>
      <div className="wallet-container">
        <div className="wallet-pay">
          <div className="wallet-pay__header">
            <h4 className="wallet-pay__header-title">موجودی کیف پول شما</h4>
            <span className="wallet-pay__header-ballance">
              <span className="wallet-pay__header-ballance-unit">تومان</span>{" "}
              {PN.convertEnToPe(contextData.accountBalance.toLocaleString())}
            </span>
          </div>
          <div className="wallet-pay__recharge">
            <Input
              id="wallet_input"
              label="مبلغ شارژ"
              type="number"
              custom="wallet-pay__input"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
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
          <Button
            onClick={() => contextData.chargeBalance(+amount)}
            className="wallet-pay__btn"
          >
            شارژ کیف پول
          </Button>
        </div>
        <div className="wallet-transactions">
          <h3 className="wallet-transactions__title">تراکنش های اخیر شما</h3>
          <div className="wallet-transactions__boxes">
            <TransactionBox
              date="۱۴۰۳/۰۴/۰۸"
              price="۲۵۰،۰۰۰"
              desc="درگاه پرداخت بانک سامان"
              action="شارژ کیف پول"
              bg="green"
            />
            <TransactionBox
              date="۱۴۰۳/۰۴/۰۸"
              price="۲۵۰،۰۰۰"
              desc="درگاه پرداخت بانک پارسیان"
              action="برداشت از کیف"
              bg="pink"
            />
            <TransactionBox
              date="۱۴۰۳/۰۴/۰۸"
              price="۲۵۰،۰۰۰"
              desc="درگاه پرداخت بانک سامان"
              action="شارژ کیف پول"
              bg="green"
            />
            <TransactionBox
              date="۱۴۰۳/۰۴/۰۸"
              price="۲۵۰،۰۰۰"
              desc="درگاه پرداخت بانک پارسیان"
              action="برداشت از کیف"
              bg="pink"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
