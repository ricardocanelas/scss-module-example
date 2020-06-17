import React from "react";
import mapPropsToStyles from "../../utils/mapPropsToStyles";
import styles from "./style.module.scss";

const Button = ({ className, variant, actived, children, ...props }) => {
  const classes = mapPropsToStyles({ variant, actived }, styles, className);

  return (
    <button className={`${classes} mr-2`} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "default",
  actived: false,
};

export default Button;
