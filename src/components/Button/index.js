import React from "react";
import ReactDOM from "react-dom/client";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, primary, children, onClick }) {
  let Component = "button";

  const props = {};

  if (to) {
  }

  const classes = cx("wrapper");

  return (
    <Component className={classes}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;
