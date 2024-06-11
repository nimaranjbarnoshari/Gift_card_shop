import React from "react";
import "./Services.css";
import Service from "../Service/Service";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-wrapper">
          <Service src="images/svg/verify.svg" title="تضمین اصالت کالا" />
          <Service
            src="images/svg/dollar-circle.svg"
            title="تضمین بهترین قیمت"
          />
          <Service src="images/svg/wallet-check.svg" title="خرید آسان و ایمن" />
          <Service src="images/svg/box-time.svg" title="تحویل سریع و آنی" />
          <Service src="images/svg/headphone.svg" title="پشتیبانی سریع تلفنی" />
          <Service
            src="images/svg/empty-wallet-change.svg"
            title="ضمانت عودت وجه"
          />
        </div>
      </div>
    </section>
  );
}
