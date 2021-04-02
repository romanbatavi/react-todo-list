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
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                css={styles.addInput({ theme })}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" color="black" />
            </Item>
          </Container>
        </form>
      </section>
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
