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
      className={`button ${className ? className : ""}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
