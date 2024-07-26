import React from "react";
import "./Input.css";

export default function FormInput({
  textarea,
  type,
  placeholder,
  label,
  id,
  name,
  className,
  src,
  custom,
  value,
  onChange,
  onBlur
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
          onBlur={onBlur}
        ></textarea>
      ) : (
        <>
          {src ? (
            <div className="form-input__wrapper">
              <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`form-input ${className ? className : ""}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <img src={src} alt="svg" className="form-input__svg" />
            </div>
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`form-input ${className ? className : ""}`}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        </>
      )}
    </div>
  );
}
