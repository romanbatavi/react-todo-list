/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

// import Todo from "../todo/Todo";
import Todo from "../todo/TodoNoJSX";
import Container from "../../layout/Container";

// import styles from "./Todos.module.css";
import * as styles from "./Todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return jsx(
    "section",
    {
      className: "todos-component"
    },
    jsx(
      Container,
      {
        flexDirection: "column",
        minHeight: "500px"
      },
      todos.length > 0 &&
        todos.map((todo, index) => {
          return jsx(Todo, {
            key: todo.text,
            text: todo.text,
            isCompleted: todo.isCompleted,
            index: index,
            completeTodo: completeTodo
          });
        }),
      todos.length === 0 &&
        jsx(
          "div",
          {
            css: styles.todoPlaceholderText
          },
          "Add todo by clicking",
          " ",
          jsx(
            "span",
            {
              css: styles.addButtonPlaceholderText
            },
            "Add"
          ),
          " button on the top left corner"
        )
    )
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
