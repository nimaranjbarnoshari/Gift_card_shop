import React, { useContext } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Socials from "../../Components/Socials/Socials";
import Articles from "../../Components/Articles/Articles";
import AuthContext from "../../Context/AuthContext";

import "./Blogs.css";
export default function Blogs() {
  const contextData = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="blogs">
        <div className="container">
          <div className="blogs__header">
            <SectionHeader title="اخبار و مقالات" />
          </div>

          <Articles marginBottom={true} />

          <div className="blogs-box__container">
            {contextData.articles.slice(0, 2).map((article) => (
              <ArticleBox
                key={article.id}
                src={article.src}
                title={article.title}
                date={article.date}
                blogID={article.id}
              />
            ))}
           
          </div>
          <Articles reverse={true} />
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
