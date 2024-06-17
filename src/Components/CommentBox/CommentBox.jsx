import React from "react";
import { BsPerson } from "react-icons/bs";

import "./CommentBox.css";

export default function CommentBox({ text, name, date, img }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-header__img-container">
          {img ? (
            <img src={img} alt="comment_img" className="comment-header__img" />
          ) : (
            <BsPerson className="comment-header__icon" />
          )}
        </div>
        <div className="comment-header__info">
          <span className="comment-header__name">{name}</span>
          <span className="comment-header__date">{date}</span>
        </div>
      </div>
      <div className="comment-body">
        <p className="comment-body__text">{text}</p>
      </div>
    </div>
  );
}
