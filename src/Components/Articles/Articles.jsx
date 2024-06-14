import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";
import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Articles.css";
export default function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader title="اخبار و مقالات" />

        <div className="articles-wrapper">
            
          <div className="articles-right">
            <h4 className="articles-title">
              جزئیات آپدیت جدید بازی Fall Guys برای پلی استیشن ( آپدیت نهایی
              بازی و رفع باگ های عجیب کاربران )
            </h4>
            <div className="articles-info">
              <div className="articles-info__date">
                <BsClock className="article--info__icon" />
                <span className="articles-info__text">۲۳ آبان,۱۴۰۲</span>
              </div>
              <Link to="#" className="articles-info__link">
                ادامه مطلب
              </Link>
            </div>
          </div>

          <div className="articles-left">
            <ArticleBox
              src="/images/articles/battlefield.jpg"
              title="انتظار ها به پایان رسید! انتشار بازی BattleField Mobile در اوایل
          مهرماه!"
            />

            <ArticleBox
              src="/images/articles/outlaws.jpg"
              title="جزئیات جدید بازی outlaws از سری بازی های محبوب استاوارز!"
            />

            <ArticleBox
              src="/images/articles/mafia.jpg"
              title="کد های تقلب بازی محبوب مافیا3 برای ایکس باکس وان"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
