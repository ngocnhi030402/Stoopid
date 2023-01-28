import React from "react";
// import ReactDOM from "react-dom/client";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

<<<<<<< HEAD
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
  leftIcon,
  rightIcon,
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
=======
function Button({ to, href, primary, children, onClick }) {
  let Component = "button";

  const props = {};

  if (to) {
  }

  const classes = cx("wrapper");
>>>>>>> 98ccacd99b5461dce0fb51526b6c0dcdc1d395df

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
