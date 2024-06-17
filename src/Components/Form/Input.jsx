import React from "react";
import "./Input.css";

export default function FormInput({ textarea, type, placeholder, label,id }) {
  return (
    <div className="form-input__container">
      <label htmlFor={id} className="form-input__label">
        {label}
      </label>
      {textarea ? (
        <textarea
          name="textarea"
          id={id}
          placeholder={placeholder}
          className="form-textarea"
        ></textarea>
      ) : (
        <input
        id={id}
          type={type}
          placeholder={placeholder}
          className="form-input"
        />
      )}
    </div>
  );
}
