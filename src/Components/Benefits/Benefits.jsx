import React from "react";
import "./Benefits.css";
import BenefitBox from "../BenefitBox/BenefitBox";

export default function Benefits({ background }) {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-wrapper">
          <BenefitBox
            bg={background}
            src="/images/svg/verify.svg"
            title="تضمین اصالت کالا"
          />
          <BenefitBox
            bg={background}
            src="/images/svg/dollar-circle.svg"
            title="تضمین بهترین قیمت"
          />
          <BenefitBox
            bg={background}
            src="/images/svg/wallet-check.svg"
            title="خرید آسان و ایمن"
          />
          <BenefitBox
            bg={background}
            src="/images/svg/box-time.svg"
            title="تحویل سریع و آنی"
          />
          <BenefitBox
            bg={background}
            src="/images/svg/headphone.svg"
            title="پشتیبانی سریع تلفنی"
          />
          <BenefitBox
            bg={background}
            src="/images/svg/empty-wallet-change.svg"
            title="ضمانت عودت وجه"
          />
        </div>
      </div>
    </section>
  );
}
