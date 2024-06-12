import React from "react";
import "./ProductsCategory.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import AccountBox from "../AccountBox/AccountBox";

export default function ProductsCategory() {
  return (
    <section className="products-category">
      <div className="container">
        <SectionHeader title="دسته بندی محصولات" />

        <div className="products-category__box-wrapper">
          <AccountBox
            src="/images/home/steam.jpg"
            title="انواع گیفت کارت ها"
            desc="انواع گیف کارت های استیم ، گوگل پلی ..."
          />

          <AccountBox
            src="/images/home/popgi.jpg"
            title="انواع بازی های دیجیتال"
            desc="بازی های دیجیتال پلی استیشن ، ایکس باکس و ..."
          />

          <AccountBox
            src="/images/home/coin.jpg"
            title="انواع پول و آیتم بازی"
            desc="انواع کوین های رایج بازی ها (cp) "
          />

          <AccountBox
            src="/images/home/socials.jpg"
            title="انواع خدمات و اکانت دیجیتال"
            desc="اکانت اسپاتیفای ، پریمیوم سازی تلگرام و ..."
          />

          <AccountBox
            src="/images/home/ping.jpg"
            title="انواع نرم افزار ها"
            desc="نرم افزار های کاهش پینگ و ..."
          />

          <AccountBox
            src="/images/home/accessory.jpg"
            title="انواع لوازم دیجیتال"
            desc="کنسول بازی ، موس ، کیبورد و ..."
          />
        </div>
      </div>
    </section>
  );
}
