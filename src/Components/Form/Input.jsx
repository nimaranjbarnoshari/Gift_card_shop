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
  custom,
  value,
  onChange,
}) {
  return (
    <div className={`form-input__container ${custom ? custom : ""}`}>
      <label htmlFor={id} className="form-input__label">
        {label}
      </label>
      {textarea ? (
        <textarea
          name="textarea"
          id={id}
          placeholder={placeholder}
          className={`form-textarea ${className ? className : ""}`}
          value={value}
          onChange={onChange}
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
                value={value}
                onChange={onChange}
              />
              <img src={src} alt="svg" className="form-input__svg" />
            </div>
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className={`form-input ${className ? className : ""}`}
              value={value}
              onChange={onChange}
            />
          )}
        </>
      )}
    </div>
  );
}
