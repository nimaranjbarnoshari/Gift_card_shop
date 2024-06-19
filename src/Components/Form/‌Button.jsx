import React from "react";
import "./Button.css";

export default function Button({
  onClick,
  type,
  disabled,
  className,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${disabled ? "button-disabled" : ""} ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}
