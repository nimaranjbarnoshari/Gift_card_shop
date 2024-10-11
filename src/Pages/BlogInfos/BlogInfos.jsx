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
import { useFormik } from "formik";
import commentSchema from "../../commentValidation";

import "./BlogInfos.css";

export default function BlogInfos() {
  const contextData = useContext(AuthContext);
  const { blogID } = useParams();
  const [articleInfo, setArticleInfo] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [shownComments, setShownComments] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      textarea: "",
    },
    onSubmit: async (values) => {
      contextData.sendComments(blogID, [
        ...articleComments,
        {
          id: `c${
            Math.ceil(Math.random() * 1000000) +
            Math.ceil(Math.random() * 100000) +
            Math.ceil(Math.random() * 10000)
          }`,
          date: new Date().toLocaleDateString("fa-IR", option),
          name: values.fullName,
          email: values.email,
          body: values.textarea,
          isConfirmed: false
        },
      ]);
    },
    validationSchema: commentSchema,
  });

  const sendComment = (event) => {
    event.preventDefault();
    contextData.sendComments(blogID, [
      ...articleComments,
      {
        id: `c${
          Math.ceil(Math.random() * 1000000) +
          Math.ceil(Math.random() * 100000) +
          Math.ceil(Math.random() * 10000)
        }`,
        date: new Date().toLocaleDateString("fa-IR", option),
        name: fullName,
        email,
        body: formik.values.textarea,
        isConfirmed: false
      },
    ]);
  };

  useEffect(() => {
    const filteredArticle = contextData.articles.filter(
      (article) => article.id === blogID
    );
    setArticleInfo(filteredArticle[0]);
  }, [contextData.articles, blogID]);

  useEffect(() => {
    setArticleComments(articleInfo?.comments);
  }, [articleInfo]);

  useEffect(() => {
    const newComments = articleComments?.filter(
      (comment) => comment.isConfirmed === true
    );
    setShownComments(newComments);
  }, [articleComments]);

  useEffect(() => {
    if (contextData.isLoggedIn) {
      setFullName(contextData.userInfos?.fullName);
      setEmail(contextData.userInfos?.email);
    }
  }, [contextData]);

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
                  {articleInfo ? articleInfo?.title : ""}
                </h2>
              </div>

              {/* infos section */}
              <div className="blog-infos__body">
                <div className="blog-infos__body-img-container">
                  <img
                    className="blog-infos__body-img"
                    src={articleInfo ? articleInfo?.src : ""}
                    alt="blogs_info_img"
                  />
                </div>
                <div className="blog-infos__body-text-container">
                  <p className="blog-infos__body-text">
                    {articleInfo ? articleInfo?.desc : ""}
                  </p>
                  <p className="blog-infos__body-text">
                    {articleInfo ? articleInfo?.desc1 : ""}
                  </p>
                </div>
                <div className="blog-infos__body-footer">
                  <div className="blog-infos__body-footer-right">
                    <span className="blog-infos__body-footer-date-container">
                      نوشته شده در تاریخ:
                      <span className="blog-infos__body-footer-date">
                        {articleInfo ? articleInfo?.date : ""}
                      </span>
                    </span>
                  </div>
                  <div className="blog-infos__body-footer-left">
                    {articleInfo?.tags
                      ? articleInfo.tags.map((tag, index) => (
                          <span
                            key={index + 1}
                            className="blog-infos__body-footer-tag"
                          >
                            {tag}
                          </span>
                        ))
                      : ""}
                  </div>
                </div>
              </div>

              {/* comments section */}
              <div className="blog-comments">
                <div className="blog-comments__header">
                  <h3 className="blog-comments__header-title">نظرات کاربران</h3>
                </div>
                <div className="blog-comments__container">
                  <form
                    className="blog-comments__form"
                    onSubmit={
                      contextData.isLoggedIn
                        ? (event) => {
                            sendComment(event);
                          }
                        : formik.handleSubmit
                    }
                  >
                    <Input
                      custom="blog-comments__input"
                      id="fullName"
                      label="نام و نام خانوادگی"
                      placeholder="نام و نام خانوادگی خود را وارد کنید ..."
                      type="text"
                      value={
                        contextData?.isLoggedIn
                          ? fullName
                          : formik.values.fullName
                      }
                      onChange={
                        contextData?.isLoggedIn ? () => {} : formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                    />
                    {!contextData?.isLoggedIn &&
                      formik.errors.fullName &&
                      formik.touched.fullName && (
                        <span className="login-form__input-phone-err">
                          {formik.errors.fullName}
                        </span>
                      )}
                    <Input
                      custom="blog-comments__input"
                      id="email"
                      label="ایمیل"
                      placeholder="ایمیل خود را وارد کنید ..."
                      type="email"
                      value={
                        contextData?.isLoggedIn ? email : formik.values.email
                      }
                      onChange={
                        contextData?.isLoggedIn ? () => {} : formik.handleChange
                      }
                      onBlur={formik.handleBlur}
                    />
                    {!contextData?.isLoggedIn &&
                      formik.errors.email &&
                      formik.touched.email && (
                        <span className="login-form__input-phone-err">
                          {formik.errors.email}
                        </span>
                      )}
                    <Input
                      id="comment"
                      textarea={true}
                      label="نظر شما"
                      placeholder="نظر خود را وارد کنید ..."
                      type="email"
                      value={formik.values.textarea}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.textarea && formik.touched.textarea && (
                      <span className="login-form__input-phone-err">
                        {formik.errors.textarea}
                      </span>
                    )}
                    <Button
                      type="submit"
                      disabled={
                        contextData?.isLoggedIn
                          ? formik.values.textarea.length >= 4 &&
                            formik.values.textarea.length <= 200
                            ? false
                            : true
                          : !formik.isValid
                      }
                    >
                      ارسال نظر
                    </Button>
                  </form>
                  <div className="blog-comments__body">
                    {shownComments?.length ? (
                      shownComments?.map((comment) => (
                        <CommentBox
                          key={comment.id}
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
                <span className="blog-writer__name">{articleInfo?.writer}</span>
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
