import React, { useContext, useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Socials from "../../Components/Socials/Socials";
import Footer from "../../Components/Footer/Footer";
import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/‌Button";
import CommentBox from "../../Components/CommentBox/CommentBox";
import AuthContext from "../../Context/AuthContext";

import "./BlogInfos.css";

export default function BlogInfos() {
  const contextData = useContext(AuthContext);
  const { blogID } = useParams();
  const [articleInfo, setArticleInfo] = useState({});

  const sendComment = (event) => {
    event.preventDefault();
    console.log(blogID);
    console.log(articleInfo);
  };

  useEffect(() => {
    const filteredArticle = contextData.articles.filter(
      (article) => article.id === blogID
    );
    setArticleInfo(filteredArticle[0]);
  }, [contextData.articles, blogID]);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="blog">
        <div className="container">
          <div className="blog-container">
            {/* right section */}
            <div className="blog__button-container">
              <Link to="/blogs" className="blog-infos__button">
                <TiArrowBack className="blog-infos__button-icon" />
                بازگشت
              </Link>
            </div>

            {/* infos and comment section */}

            <div className="blog-infos">
              <div className="blog-infos__header">
                <h2 className="blog-infos__header-title">
                  {articleInfo ? articleInfo.title : ""}
                </h2>
              </div>

              {/* infos section */}
              <div className="blog-infos__body">
                <div className="blog-infos__body-img-container">
                  <img
                    className="blog-infos__body-img"
                    src={articleInfo ? articleInfo.src : ""}
                    alt="blogs_info_img"
                  />
                </div>
                <div className="blog-infos__body-text-container">
                  <p className="blog-infos__body-text">
                    {articleInfo ? articleInfo.desc : ""}
                  </p>
                  <p className="blog-infos__body-text">
                    {articleInfo ? articleInfo.desc1 : ""}
                  </p>
                </div>
                <div className="blog-infos__body-footer">
                  <div className="blog-infos__body-footer-right">
                    <span className="blog-infos__body-footer-date-container">
                      نوشته شده در تاریخ:
                      <span className="blog-infos__body-footer-date">
                        ۱۴ آبان ۱۴۰۲
                      </span>
                    </span>
                  </div>
                  <div className="blog-infos__body-footer-left">
                    <span className="blog-infos__body-footer-tag">
                      بازی کامپیوتر
                    </span>
                    <span className="blog-infos__body-footer-tag">بتلفیلد</span>
                    <span className="blog-infos__body-footer-tag">
                      بازی اکشن
                    </span>
                  </div>
                </div>
              </div>

              {/* comments section */}
              <div className="blog-comments">
                <div className="blog-comments__header">
                  <h3 className="blog-comments__header-title">نظرات کاربران</h3>
                </div>
                <div className="blog-comments__container">
                  <form action="#" className="blog-comments__form">
                    <Input
                      id="name"
                      label="نام و نام خانوادگی"
                      placeholder="نام خود را وارد کنید ..."
                      type="text"
                    />
                    <Input
                      id="email"
                      label="ایمیل"
                      placeholder="ایمیل خود را وارد کنید ..."
                      type="email"
                    />
                    <Input
                      id="comment"
                      textarea={true}
                      label="نظر شما"
                      placeholder="نظر خود را وارد کنید ..."
                      type="email"
                    />
                    <Button
                      type="submit"
                      disabled={false}
                      onClick={(event) => sendComment(event)}
                    >
                      ارسال نظر
                    </Button>
                  </form>
                  <div className="blog-comments__body">
                    {articleInfo.comments && articleInfo.comments.length ? (
                      articleInfo.comments.map((comment) => (
                        <CommentBox
                          text={comment.body}
                          date={comment.date}
                          name={comment.name}
                        />
                      ))
                    ) : (
                      <h3 className="blog-comments__body-empty">
                        هنوز نظری برای این مقاله ثبت نشده
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* infos section */}

            {/* left section */}
            <div className="blog-writer">
              <img
                src="/images/articles/writer.jpg"
                alt="writer_image"
                className="blog-writer__img"
              />
              <div className="blog-writer__name-container">
                <span>نویسنده:</span>
                <span className="blog-writer__name">{articleInfo.writer}</span>
              </div>
              <div className="blog-writer__socials">
                <Link to="#" className="blog-writer__link">
                  <FaFacebook className="blog-writer__icon" />
                </Link>
                <Link to="#" className="blog-writer__link">
                  <AiFillInstagram className="blog-writer__icon" />
                </Link>
                <Link to="#" className="blog-writer__link">
                  <FaTelegram className="blog-writer__icon" />
                </Link>
                <Link to="#" className="blog-writer__link">
                  <IoLogoWhatsapp className="blog-writer__icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
}
