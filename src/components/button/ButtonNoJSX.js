/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

import * as styles from "./Button.styles";

const Button = ({ text, color, align, onClick }) => {
  const theme = useTheme();
  // return React.createElement(
  return jsx(
    "button",
    {
      css: styles.button({
        align,
        color,
        theme
      }),
      onClick: onClick
    },
    text
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
