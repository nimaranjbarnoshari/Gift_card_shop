import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import ArticlesBanner from "../../Components/ArticlesBanner/ArticlesBanner";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Socials from "../../Components/Social/Social";

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
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
