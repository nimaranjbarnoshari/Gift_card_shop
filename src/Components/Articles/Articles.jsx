import React, { useContext, useEffect, useState } from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import ArticlesBanner from "../ArticlesBanner/ArticlesBanner";
import AuthContext from "../../Context/AuthContext";

import "./Articles.css";
export default function Articles({ reverse, marginBottom }) {
  const contextData = useContext(AuthContext);
  const [simpleArticles, setSimpleArticles] = useState([]);
  const [bannerArticles, setBannerArticles] = useState({});

  useEffect(() => {
    const banner = contextData.articles.filter(
      (article) => article.kind === "banner"
    );
    const simples = contextData.articles.filter(
      (article) => article.kind === "simple"
    );
    setBannerArticles(banner[0]);
    setSimpleArticles(simples);
  }, [contextData]);

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
              title={bannerArticles ? bannerArticles.title : ""}
              date={bannerArticles ? bannerArticles.date : ""}
              blogID={bannerArticles ? bannerArticles.id : ""}
            />
          </div>

          <div className="articles-left">
            {simpleArticles.map((article) => (
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
