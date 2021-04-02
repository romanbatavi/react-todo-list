import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  width: 100%;

  border-bottom: 1px solid ${props => props.theme.color.primary.red};
  outline: unset;

  font-family: "Homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = e => {
    const { value } = this.state;
    const { addTodo } = this.props;

    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      this.setState({
        value: ""
      });
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleInput = e => {
    console.log("e ->", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;
    const { showAdd, theme } = this.props;

    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  type="text"
                  value={value}
                  theme={theme}
                  onChange={this.handleInput}
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
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.objectOf(PropTypes.string)
      })
    })
  };
}

export default withTheme(TodoForm);
