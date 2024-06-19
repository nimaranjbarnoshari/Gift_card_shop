import React from "react";
import "./Input.css";

export default function FormInput({
  textarea,
  type,
  placeholder,
  label,
  id,
  className,
  src,
}) {
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
          className={`form-textarea ${className ? className : ""}`}
        ></textarea>
      ) : (
        <>
          {src ? (
            <div className="form-input__wrapper">
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`form-input ${className ? className : ""}`}
              />
              <img src={src} alt="svg" className="form-input__svg" />
            </div>
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className={`form-input ${className ? className : ""}`}
            />
          )}
        </>
      )}
    </div>
  );
}
