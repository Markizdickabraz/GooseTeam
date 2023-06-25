import React from "react";
import style from "./style.module.css";

const TitleForm = ({ text }) => {
  return <span className={style.titleForm}>{text}</span>;
};

export default TitleForm;
