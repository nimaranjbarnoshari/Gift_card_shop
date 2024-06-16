import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Socials from "../../Components/Social/Social";
import Articles from "../../Components/Articles/Articles";

import "./Blogs.css";
export default function Blogs() {
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
            <ArticleBox
              title="کد های تقلب بازی محبوب مافیا3 برای ایکس باکس وان"
              src="/images/articles/mafia.jpg"
              date="23 آبان,1402"
              blogNmae="mafia"
            />
            <ArticleBox
              title="جزئیات جدید بازی outlaws از سری بازی های محبوب استاوارز!"
              src="/images/articles/outlaws.jpg"
              date="23 آبان,1402"
              blogNmae="outlaws"
            />
          </div>
          <Articles reverse={true} />
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
