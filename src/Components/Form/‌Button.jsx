import React from "react";
import "./Button.css";

export default function Button({
  onclick,
  type,
  disabled,
  className,
  children,
}) {
  return (
    <button
      className={className}
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
