import React from "react";
import style from "./style.module.css";

const ErrorField = ({ msg }) => {
  return <div className={style.error}>{msg}</div>;
};

export default ErrorField;
