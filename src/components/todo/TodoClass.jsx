import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

const StyledTodo = styled.div`
  position: relative;

  flex: 1 0 auto;
  text-align: center;

  max-height: 34px;
  margin: 16px 0 0;
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;

  border-bottom: 1px solid ${props => props.theme.color.primary.red};
`;

const StyledTodoText = styled.span`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  text-decoration: ${props => (props.isCompleted ? "line-through" : "initial")};
  color: ${props => props.theme.color.primary.black};

  height: 50px;
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo theme={theme} onClick={() => completeTodo(index)}>
        <StyledTodoText theme={theme} isCompleted={isCompleted}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool,
    completeTodo: PropTypes.func,
    index: PropTypes.number,
    theme: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.objectOf(PropTypes.string)
      })
    })
  };
}

export default withTheme(Todo);
