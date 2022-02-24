import React from "react";
import classNames from "classnames/bind";

import styles from "./index.module.css";

const cx = classNames.bind(styles);

const Button = ({ children, id, type, isActive, onClick }) => {
  const className = cx("normalize", [type], { active: isActive });
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
