import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

import "./Articles.css";
export default function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader title="اخبار و مقالات" />

        <div className="articles-wrapper">
          <div className="articles-right"></div>
          <div className="articles-left">
            <ArticleBox src="/images/articles/battlefield.jpg" title="انتظار ها به پایان رسید! انتشار بازی BattleField Mobile در اوایل
          مهرماه!"/>
          </div>
        </div>
      </div>
    </section>
  );
}
