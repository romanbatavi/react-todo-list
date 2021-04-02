/** @jsxRuntime classic */
import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./TodoForm.module.css";
import * as styles from "./TodoForm.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No blank Todo!");
      return; // to stop JS to execute next line of code
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return jsx(
      "section",
      {
        className: "todoform-component"
      },
      jsx(
        "form",
        {
          onSubmit: handleFormSubmit
        },
        jsx(
          Container,
          {
            alignItems: "flex-start"
          },
          jsx(
            Item,
            {
              flex: 1,
              padding: "0 0 0 16px"
            },
            jsx("input", {
              css: styles.addInput({
                theme
              }),
              type: "text",
              value: value,
              onChange: e => setValue(e.target.value)
            })
          ),
          jsx(
            Item,
            null,
            jsx(Button, {
              text: "Add",
              color: "black"
            })
          )
        )
      )
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
