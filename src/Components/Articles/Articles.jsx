import React, { useContext } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import ArticlesBanner from "../ArticlesBanner/ArticlesBanner";
import AuthContext from "../../Context/AuthContext";

import "./Articles.css";
export default function Articles({ reverse, marginBottom }) {
  const contextData = useContext(AuthContext);

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
              title="جزئیات آپدیت جدید بازی Super Mario برای پلی استیشن ( آپدیت نهایی بازی و
                    رفع باگ های عجیب کاربران )"
              date="۲۳ آبان,۱۴۰۲"
              blogName="mario"
            />
          </div>

          <div className="articles-left">
            {contextData.articles.map((article) => (
              <ArticleBox
                key={article.id}
                src={article.src}
                title={article.title}
                date={article.date}
                blogID={article.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
