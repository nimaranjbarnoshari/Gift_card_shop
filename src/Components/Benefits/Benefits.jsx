import React from "react";
import "./Benefits.css";
import BenefitBox from "../BenefitBox/BenefitBox";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-wrapper">
          <BenefitBox src="images/svg/verify.svg" title="تضمین اصالت کالا" />
          <BenefitBox
            src="images/svg/dollar-circle.svg"
            title="تضمین بهترین قیمت"
          />
          <BenefitBox src="images/svg/wallet-check.svg" title="خرید آسان و ایمن" />
          <BenefitBox src="images/svg/box-time.svg" title="تحویل سریع و آنی" />
          <BenefitBox src="images/svg/headphone.svg" title="پشتیبانی سریع تلفنی" />
          <BenefitBox
            src="images/svg/empty-wallet-change.svg"
            title="ضمانت عودت وجه"
          />
        </div>
      </div>
    </section>
  );
}
