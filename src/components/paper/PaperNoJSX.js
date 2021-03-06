/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

// import styles from "./Paper.module.css";
import * as styles from "./Paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();
  return jsx(
    "div",
    {
      css: styles.paper
    },
    jsx(
      "div",
      {
        css: styles.frame({
          theme
        })
      },
      children
    )
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
