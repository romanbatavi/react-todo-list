/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

// import styles from "./Todo.module.css";
import * as styles from "./Todo.styles";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return jsx(
    "div",
    {
      css: styles.todo({
        theme
      }),
      onClick: () => completeTodo(index)
    },
    jsx(
      "span",
      {
        css: styles.todoText({
          isCompleted,
          theme
        })
      },
      text
    )
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  completeTodo: PropTypes.func,
  index: PropTypes.number
};

export default Todo;
