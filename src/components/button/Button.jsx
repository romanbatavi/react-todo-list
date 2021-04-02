/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

// import cx from "classnames";

// import styles from "./Button.module.css";
import * as styles from "./Button.styles";

const Button = ({ text, color, align, onClick }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });

  const theme = useTheme();

  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>
    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func
};

export default Button;
