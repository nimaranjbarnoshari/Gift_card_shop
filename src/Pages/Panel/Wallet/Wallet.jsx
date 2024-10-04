import React, { useContext, useState } from "react";
import Input from "../../../Components/Form/Input";
import Button from "../../../Components/Form/‌Button";
import WalletBox from "../Components/WalletBox/WalletBox";
import TransactionBox from "../Components/TransactionBox/TransactionBox";
import AuthContext from "../../../Context/AuthContext";
import PN from "persian-number";
import { MdOutlinePayment } from "react-icons/md";
import Swal from "sweetalert2";

import "./Wallet.css";

export default function Wallet() {
  const contextData = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [radioValue, setRadioValue] = useState("");

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
              onChange={() => setRadioValue("درگاه پرداخت بانک سامان")}
            />
            <WalletBox
              id="parsian"
              label="درگاه پرداخت بانک پارسیان"
              src="/images/wallet/parsian.svg"
              onChange={() => setRadioValue("درگاه پرداخت بانک پارسیان")}
            />
          </div>
          <Button
            onClick={() => {
              radioValue
                ? amount
                  ? +amount >= 50000
                    ? contextData.chargeBalance(+amount, radioValue)
                    : Swal.fire({
                        title: "حداقل مبلغ پرداختی پنجاه هزار تومان می باشد",
                        icon: "error",
                        iconColor: "#Fd295c",
                        confirmButtonColor: "#Fd295c",
                      })
                  : Swal.fire({
                      title: "لطفا مبلغی را جهت پرداخت وارد نمایید",
                      icon: "error",
                      iconColor: "#Fd295c",
                      confirmButtonColor: "#Fd295c",
                    })
                : Swal.fire({
                    title: "لطفا یک درگاه جهت پرداخت انتخاب نمایید",
                    icon: "error",
                    iconColor: "#Fd295c",
                    confirmButtonColor: "#Fd295c",
                  });
              setAmount("");
            }}
            className="wallet-pay__btn"
          >
            شارژ کیف پول
          </Button>
        </div>
        <div className="wallet-transactions">
          <h3 className="wallet-transactions__title">تراکنش های اخیر شما</h3>
          <div className="wallet-transactions__boxes">
            {contextData.userPays.length ? (
              [...contextData.userPays]
                .reverse()
                .slice(0, 7)
                .map((pay) => (
                  <TransactionBox
                    key={pay.id}
                    date={pay.date}
                    price={pay.amount}
                    desc={pay.portal}
                    action={pay.transaction}
                    bg={pay.transaction === "شارژ کیف پول" ? "green" : "pink"}
                  />
                ))
            ) : (
              <div className="dashboard-tickets__body">
                <MdOutlinePayment className="dashboard-order__body-icon" />
                <span className="dashboard-tickets__body-title">
                  شما تا کنون تراکنشی نداشته اید!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
