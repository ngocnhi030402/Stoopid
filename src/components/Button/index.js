import React from "react";
// import ReactDOM from "react-dom/client";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  children,
  onClick,
  className,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") ** typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
