import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const LinkForm = ({ path, text }) => {
  return (
    <Link to={path} className={style.link}>
      {text}
    </Link>
  );
};

export default LinkForm;
