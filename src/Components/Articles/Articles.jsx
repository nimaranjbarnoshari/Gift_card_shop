import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import ArticlesBanner from "../ArticlesBanner/ArticlesBanner";

import "./Articles.css";
export default function Articles({ reverse, marginBottom }) {
  return (
    <section
      className={`articles ${marginBottom ? "articles-custom__margin" : ""}`}
    >
      <div className="container">
        <div
          className={`articles-wrapper ${
            reverse ? "articles-wrapper__reverse" : ""
          }`}
        >
          <div className="articles-right">
            <ArticlesBanner
              title="جزئیات آپدیت جدید بازی Fall Guys برای پلی استیشن ( آپدیت نهایی بازی و
                    رفع باگ های عجیب کاربران )"
              date="۲۳ آبان,۱۴۰۲"
              blogName="mario"
            />
          </div>

          <div className="articles-left">
            <ArticleBox
              src="/images/articles/battlefield.jpg"
              title="انتظار ها به پایان رسید! انتشار بازی BattleField Mobile در اوایل
          مهرماه!"
              date="۲۳ آبان,۱۴۰۲"
              blogName="battlefield"
            />

            <ArticleBox
              src="/images/articles/outlaws.jpg"
              title="جزئیات جدید بازی outlaws از سری بازی های محبوب استاوارز!"
              date="۲۳ آبان,۱۴۰۲"
              blogName="outlaws"
            />

            <ArticleBox
              src="/images/articles/mafia.jpg"
              title="کد های تقلب بازی محبوب مافیا3 برای ایکس باکس وان"
              date="۲۳ آبان,۱۴۰۲"
              blogName="mafia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
